pub enum Kesalahan {
    RekuesHeader(KesalahanHeader),
    Rekues(KesalahanRekues),
}

#[derive(Debug)]
pub enum KesalahanHeader {
    KesalahanParsingToken,
    KesalahanParsingUser,
    KesalahanParsingTokenDanUser,
}

#[derive(Debug)]
pub enum KesalahanRekues {
    KesalahanReqwest(reqwest::Error),
}

impl From<reqwest::Error> for KesalahanRekues {
    fn from(kesalahan: reqwest::Error) -> Self {
        KesalahanRekues::KesalahanReqwest(kesalahan)
    }
}
