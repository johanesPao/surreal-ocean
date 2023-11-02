use crate::enums::kesalahan::{Kesalahan, KesalahanHeader};
use crate::gh::fungsi::validasi_token;
use crate::teks::statik;

use super::fungsi::repo_event;
use actix_web::{get, web, HttpRequest, HttpResponse};

#[get("/{owner}/{repo}/event")]
pub async fn get_repo_event(req: HttpRequest, path: web::Path<(String, String)>) -> HttpResponse {
    let (owner, repo) = path.into_inner();
    // let mut respon;
    let mut token = "";

    // Jika ada token pada header
    if let Some(auth_header) = req.headers().get("Authorization") {
        let auth_teks = auth_header
            .to_str()
            .map_err(|_| HttpResponse::BadRequest().finish());
        match auth_teks {
            Ok(teks_token) => {
                // validasi token
                match validasi_token(owner.clone(), token.to_string()).await {
                    Ok(_) => token = teks_token,
                    Err(_) => return HttpResponse::BadRequest().finish(),
                }
            }
            Err(kesalahan) => return kesalahan,
        };
    } else {
        // Jika tidak ada token pada header, exit
        return HttpResponse::Unauthorized().finish();
    }

    let respon = match repo_event(owner.clone(), repo.clone(), token.to_string()).await {
        Ok(vektor_event_repo) => HttpResponse::Ok().json(vektor_event_repo),
        Err(kesalahan) => match kesalahan {
            Kesalahan::RekuesHeader(kesalahan_header) => match kesalahan_header {
                KesalahanHeader::KesalahanParsingToken => {
                    HttpResponse::BadRequest().body(format!("{}", statik::PARSE_TOKEN_ERROR))
                }
                KesalahanHeader::KesalahanParsingUser => {
                    HttpResponse::BadRequest().body(format!("{}", statik::PARSE_USER_ERROR))
                }
                KesalahanHeader::KesalahanParsingTokenDanUser => {
                    HttpResponse::BadRequest().body(format!("{}", statik::PARSE_TOKEN_USER_ERROR))
                }
            },
            Kesalahan::Rekues(kesalahan_reqwest) => HttpResponse::InternalServerError()
                .body(format!("{}{:?}", statik::REKUES_ERROR, kesalahan_reqwest)),
        },
    };

    respon
}

pub fn konfigurasi(konfig: &mut web::ServiceConfig) {
    konfig.service(web::scope("/gh").service(get_repo_event));
}
