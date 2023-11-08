use crate::structs::structs::ResponPesan;
use actix_web::web;
use actix_web::{get, HttpResponse};

#[get("/penjualan/{id}")]
pub async fn tarik_data_penjualan(id: web::Path<String>) -> HttpResponse {
    let respon_pesan = ResponPesan {
        pesan: format!("api endpoint tarik_data_penjualan untuk {}", id).to_string(),
    };
    HttpResponse::Ok().json(respon_pesan)
}

pub fn konfigurasi(konfig: &mut web::ServiceConfig) {
    konfig.service(web::scope("/bc").service(tarik_data_penjualan));
}
