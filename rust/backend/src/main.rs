use actix_web::{App, HttpServer};
mod router;
mod postgres;

use crate::router::*;
use crate::postgres::*;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    establish_connection();
    HttpServer::new(|| {
        App::new()
            .configure(init_router)
    })
    .bind("0.0.0.0:9000")?
    .run()
    .await
}