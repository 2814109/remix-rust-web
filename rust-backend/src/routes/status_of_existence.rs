// use actix_web::{delete, get, post, put, web, HttpResponse,Error};
// use super::super::Pool;
// use super::super::models::{StatusOfExistence};
// use super::super::schema::status_of_existence::dsl::*;
// use crate::diesel::RunQueryDsl;

// #[get("/status_of_existence")]
// pub async fn get_status_of_existence(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
//     Ok(web::block(move || get_all_status_of_existence(db))
//         .await
//         .map(|user| HttpResponse::Ok().json(user))
//         .map_err(|_| HttpResponse::InternalServerError())?)
// }

// fn get_all_status_of_existence(pool: web::Data<Pool>) -> Result<Vec<StatusOfExistence>, diesel::result::Error> {
//     let conn = pool.get().unwrap();
//     let items = status_of_existence.load::<StatusOfExistence>(&conn)?;
//     Ok(items)
// }
