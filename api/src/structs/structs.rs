// use chrono::prelude::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug, Clone)]
pub struct ResponPesan {
    pub pesan: String,
}
