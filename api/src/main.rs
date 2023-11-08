use actix_cors::Cors;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder, Result};

mod bc;
mod enums;
mod gh;
mod konfigurasi;
mod structs;
mod teks;

#[get("/kesehatan")]
async fn cek_kesehatan() -> impl Responder {
    let respon = structs::structs::ResponPesan {
        pesan: teks::statik::KESEHATAN_OK.to_string(),
    };
    HttpResponse::Ok().json(respon)
}

async fn tidak_ditemukan() -> Result<HttpResponse> {
    let respon = structs::structs::ResponPesan {
        pesan: teks::statik::TDK_DITEMUKAN.to_string(),
    };
    Ok(HttpResponse::NotFound().json(respon))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let konfigurasi = konfigurasi::env::KonfigurasiEnv::new();
    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE", "UPDATE"])
            .allowed_headers(vec!["Accept", "Authorization", "X-Github-Api-Version"])
            .max_age(3600);
        App::new()
            .wrap(cors)
            .configure(bc::api::konfigurasi)
            .configure(gh::api::konfigurasi)
            .service(cek_kesehatan)
            .default_service(web::route().to(tidak_ditemukan))
            .wrap(actix_web::middleware::Logger::default())
    })
    .bind((konfigurasi.API_ENDPOINT_URL, konfigurasi.API_PORT))?
    .run()
    .await
}
