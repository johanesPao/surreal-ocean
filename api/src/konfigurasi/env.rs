use std::env;

use crate::teks::statik;

#[allow(non_snake_case)]
pub struct KonfigurasiEnv {
    pub API_ENDPOINT_URL: String,
    pub API_PORT: u16,
}

impl KonfigurasiEnv {
    pub fn new() -> Self {
        let endpoint_url =
            env::var(statik::API_ENDPOINT_URL).expect(statik::API_ENDPOINT_URL_ERROR.as_str());
        let port = env::var(statik::API_PORT)
            .expect(statik::API_PORT_ERROR.as_str())
            .parse::<u16>()
            .unwrap();

        Self {
            API_ENDPOINT_URL: endpoint_url,
            API_PORT: port,
        }
    }
}
