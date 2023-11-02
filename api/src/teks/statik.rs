use lazy_static::lazy_static;

// HALAMAN
pub static KESEHATAN_OK: &str = "Semuanya bekerja dengan baik";
pub static TDK_DITEMUKAN: &str = "Sumber daya tidak dapat ditemukan";

// NAMA ENV
// Nilai di bawah ini hanya helper untuk menghindari kesalahan dalam penulisan nama
// env yang dipanggil oleh fungsi. Environment di bawah ini harus juga terdapat dalam
// .cargo/config.toml pada root folder (untuk development) atau pada environment
// host dimana biner dijalankan.
pub static API_ENDPOINT_URL: &str = "API_ENDPOINT_URL";
pub static API_PORT: &str = "API_PORT";

// ERROR ENV
static ENV_TDK_DITEMUKAN: &str = "tidak dapat ditemukan dalam environment";
lazy_static! {
    pub static ref API_ENDPOINT_URL_ERROR: String =
        format!("{} {}", API_ENDPOINT_URL, ENV_TDK_DITEMUKAN);
    pub static ref API_PORT_ERROR: String = format!("{} {}", API_PORT, ENV_TDK_DITEMUKAN);
}

// ERROR
pub static PARSE_TOKEN_ERROR: &str = "Kesalahan parsing TOKEN";
pub static PARSE_USER_ERROR: &str = "Kesalahan parsing USER";
pub static PARSE_TOKEN_USER_ERROR: &str = "Kesalahan parsing TOKEN dan USER";
pub static REKUES_ERROR: &str = "Kesalahan pada proses rekues: ";
