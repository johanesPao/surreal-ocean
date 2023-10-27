use chrono::prelude::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ParamDataPenjualan {
    pub id: Option<String>,
    pub pesan: String,
}
