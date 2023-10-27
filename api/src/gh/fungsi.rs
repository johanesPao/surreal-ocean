use crate::enums::kesalahan::{Kesalahan, KesalahanHeader, KesalahanRekues};
use actix_web::HttpResponse;
use reqwest::{
    header::{HeaderMap, AUTHORIZATION, USER_AGENT},
    Client, StatusCode,
};
use serde_json::Value;

fn konstruksi_klien() -> Client {
    Client::new()
}

fn konstruksi_header(user: String, token: String) -> Result<HeaderMap, KesalahanHeader> {
    let gh_token = format!("Bearer {}", token).parse();
    let gh_user = user.parse();

    match (gh_token, gh_user) {
        (Ok(gh_token), Ok(gh_user)) => {
            let mut header = HeaderMap::new();
            header.insert(AUTHORIZATION, gh_token);
            header.insert(USER_AGENT, gh_user);
            Ok(header)
        }
        (Err(_), Ok(_)) => Err(KesalahanHeader::KesalahanParsingToken),
        (Ok(_), Err(_)) => Err(KesalahanHeader::KesalahanParsingUser),
        (Err(_), Err(_)) => Err(KesalahanHeader::KesalahanParsingTokenDanUser),
    }
}

pub async fn validasi_token(owner: String, token: String) -> Result<HttpResponse, Kesalahan> {
    let klien = konstruksi_klien();
    let header =
        konstruksi_header(owner.clone(), token.clone()).map_err(Kesalahan::RekuesHeader)?;
    let respon = klien
        .get("https://api.github.com/user/issues")
        .headers(header)
        .send()
        .await
        .map_err(|kesalahan_reqwest| {
            Kesalahan::Rekues(KesalahanRekues::KesalahanReqwest(kesalahan_reqwest))
        });
    let hasil = match respon {
        Ok(output) => {
            if output.status() == StatusCode::OK {
                HttpResponse::Ok().finish()
            } else if output.status() == StatusCode::NOT_FOUND {
                HttpResponse::NotFound().finish()
            } else {
                HttpResponse::Unauthorized().finish()
            }
        }
        Err(kesalahan) => return Err(kesalahan),
    };

    Ok(hasil)
}

pub async fn repo_event(owner: String, repo: String, token: String) -> Result<Value, Kesalahan> {
    let klien = konstruksi_klien();
    let header =
        konstruksi_header(owner.clone(), token.clone()).map_err(Kesalahan::RekuesHeader)?;
    let respon = klien
        .get(format!(
            "https://api.github.com/repos/{}/{}/events",
            owner, repo
        ))
        .headers(header)
        .send()
        .await
        .map_err(|kesalahan_reqwest| {
            Kesalahan::Rekues(KesalahanRekues::KesalahanReqwest(kesalahan_reqwest))
        });
    let hasil = match respon {
        Ok(output) => output
            .json::<serde_json::Value>()
            .await
            .map_err(|kesalahan_reqwest| {
                Kesalahan::Rekues(KesalahanRekues::KesalahanReqwest(kesalahan_reqwest))
            })?,
        Err(kesalahan) => return Err(kesalahan),
    };

    Ok(hasil)
}
