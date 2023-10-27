use dotenvy::dotenv;
use std::env;

use crate::teks::statik;

#[allow(non_snake_case)]
pub struct KonfigurasiEnv {
    pub ENDPOINT_URL: String,
    pub PORT: u16,
}

impl KonfigurasiEnv {
    pub fn new() -> Self {
        dotenv().expect(statik::ENV_TDK_DITEMUKAN);

        let endpoint_url = env::var(statik::ENDPOINT_URL).expect(statik::ENDPOINT_URL_ERROR);
        let port = env::var(statik::PORT)
            .expect(statik::PORT_ERROR)
            .parse::<u16>()
            .unwrap();

        Self {
            ENDPOINT_URL: endpoint_url,
            PORT: port,
        }
    }
}
