// use actix_web::{error::ResponseError, HttpResponse};
// use derive_more::Display;

use actix_web::{dev::HttpResponseBuilder, error, get, http::header, http::StatusCode, App, HttpResponse,
};
use derive_more::{Display, Error};


#[derive(Debug, Display, Error)]
enum MyError {
    #[display(fmt = "internal error")]
    InternalError,

    #[display(fmt = "bad request")]
    BadClientData,

    #[display(fmt = "timeout")]
    Timeout,
}

impl error::ResponseError for MyError {
    fn error_response(&self) -> HttpResponse {
        HttpResponseBuilder::new(self.status_code())
            .set_header(header::CONTENT_TYPE, "text/html; charset=utf-8")
            .body(self.to_string())
    }

    fn status_code(&self) -> StatusCode {
        match *self {
            MyError::InternalError => StatusCode::INTERNAL_SERVER_ERROR,
            MyError::BadClientData => StatusCode::BAD_REQUEST,
            MyError::Timeout => StatusCode::GATEWAY_TIMEOUT,
        }
    }
}


#[derive(Debug, Display)]
pub enum ServiceError {
    #[display(fmt = "Internal Server Error")]
    InternalServerError,

    #[display(fmt = "BadRequest: {}", _0)]
    BadRequest(String),

    #[display(fmt = "JWKSFetchError")]
    JWKSFetchError,
}

// impl ResponseError trait allows to convert our errors into http responses with appropriate data
// impl ResponseError for ServiceError {
//     fn error_response(&self) -> HttpResponse {
//         match self {
//             ServiceError::InternalServerError => {
//                 HttpResponse::InternalServerError().json("Internal Server Error, Please try later")
//             }
//             ServiceError::BadRequest(ref message) => HttpResponse::BadRequest().json(message),
//             ServiceError::JWKSFetchError => {
//                 HttpResponse::InternalServerError().json("Could not fetch JWKS")
//             }
//         }
//     }
// }