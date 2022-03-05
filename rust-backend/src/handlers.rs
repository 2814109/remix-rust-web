use super::models::*;
use super::schema::users::dsl::*;
use super::Pool;
use crate::diesel::QueryDsl;
use crate::diesel::RunQueryDsl;
use actix_web::{web, Error, HttpResponse};
use diesel::dsl::{delete, insert_into, update};
use serde::{Deserialize, Serialize};
use std::vec::Vec;
use super::schema::existence_statuses::dsl::*;
use super::schema::producing_areas::dsl::*;
use super::schema::countries::dsl::*;
use super::schema::single_malt_wisky_list::dsl::*;


#[derive(Debug, Serialize, Deserialize)]
pub struct InputUser {
    first_name: String,
    last_name: String,
    email: String,
}

// update User
#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateUser {
    id: i32,
    first_name: String,
    last_name: String,
    email: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct InputSingleMaltWisky {
        field_id: i32,
        age: i32,
        label: String,
        edition: String,
        existence_id: i32,
        price: i32,
}

// Handler for GET /users
pub async fn get_users(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    Ok(web::block(move || get_all_users(db))
        .await
        .map(|user| HttpResponse::Ok().json(user))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn get_all_users(pool: web::Data<Pool>) -> Result<Vec<User>, diesel::result::Error> {
    let conn = pool.get().unwrap();
    let items = users.load::<User>(&conn)?;
    Ok(items)
}

// Handler for GET /users/{id}
pub async fn get_user_by_id(
    db: web::Data<Pool>,
    user_id: web::Path<i32>,
) -> Result<HttpResponse, Error> {
    Ok(
        web::block(move || db_get_user_by_id(db, user_id.into_inner()))
            .await
            .map(|user| HttpResponse::Ok().json(user))
            .map_err(|_| HttpResponse::InternalServerError())?,
    )
}

// Handler for POST /users
pub async fn add_user(
    db: web::Data<Pool>,
    item: web::Json<InputUser>,
) -> Result<HttpResponse, Error> {
    Ok(web::block(move || add_single_user(db, item))
        .await
        .map(|user| HttpResponse::Created().json(user))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

// Handler for PATCH /users/{id}
pub async fn update_user(
    db: web::Data<Pool>,
    item: web::Json<UpdateUser>,
) -> Result<HttpResponse, Error> {
    Ok(web::block(move || update_single_user(db, item))
        .await
        .map(|user| HttpResponse::Created().json(user))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

// Handler for DELETE /users/{id}
pub async fn delete_user(
    db: web::Data<Pool>,
    user_id: web::Path<i32>,
) -> Result<HttpResponse, Error> {
    Ok(
        web::block(move || delete_single_user(db, user_id.into_inner()))
            .await
            .map(|user| HttpResponse::Ok().json(user))
            .map_err(|_| HttpResponse::InternalServerError())?,
    )
}

fn db_get_user_by_id(pool: web::Data<Pool>, user_id: i32) -> Result<User, diesel::result::Error> {
    let conn = pool.get().unwrap();
    users.find(user_id).get_result::<User>(&conn)
}

fn add_single_user(
    db: web::Data<Pool>,
    item: web::Json<InputUser>,
) -> Result<User, diesel::result::Error> {
    let conn = db.get().unwrap();
    let new_user = NewUser {
        first_name: &item.first_name,
        last_name: &item.last_name,
        email: &item.email,
        created_at: chrono::Local::now().naive_local(),
    };
    let res = insert_into(users).values(&new_user).get_result(&conn)?;
    Ok(res)
}

fn delete_single_user(db: web::Data<Pool>, user_id: i32) -> Result<usize, diesel::result::Error> {
    let conn = db.get().unwrap();
    let count = delete(users.find(user_id)).execute(&conn)?;
    Ok(count)
}

fn update_single_user(
    db: web::Data<Pool>,
    item: web::Json<UpdateUser>,
) -> Result<User, diesel::result::Error> {
    let conn = db.get().unwrap();
    let update_user = PatchUser {
        first_name: &item.first_name,
        last_name: &item.last_name,
        email: &item.email,
        created_at: chrono::Local::now().naive_local(),
    };
    let updated_row = update(users.find(&item.id))
        .set(&update_user)
        .get_result(&conn)?;
    Ok(updated_row)
}


pub async fn get_existence_statuses(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    Ok(web::block(move || get_all_existence_statuses(db))
        .await
        .map(|user| HttpResponse::Ok().json(user))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn get_all_existence_statuses(pool: web::Data<Pool>) -> Result<Vec<ExistenceStatus>, diesel::result::Error> {
    let conn = pool.get().unwrap();
    let items = existence_statuses.load::<ExistenceStatus>(&conn)?;
    Ok(items)
}

pub async fn get_countries(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    Ok(web::block(move || get_all_countries(db))
        .await
        .map(|country| HttpResponse::Ok().json(country))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn get_all_countries(pool: web::Data<Pool>) -> Result<Vec<Country>, diesel::result::Error> {
    let conn = pool.get().unwrap();
    let items = countries.load::<Country>(&conn)?;
    Ok(items)
}

pub async fn add_single_malt_wisky(
    db: web::Data<Pool>,
    item: web::Json<InputSingleMaltWisky>,
) -> Result<HttpResponse, Error> {
    Ok(web::block(move || add_wisky(db, item))
        .await
        .map(|single_malt_wisky| HttpResponse::Created().json(single_malt_wisky))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn add_wisky(
    db: web::Data<Pool>,
    item: web::Json<InputSingleMaltWisky>,
) -> Result<SingleMaltWisky, diesel::result::Error> {
    let conn = db.get().unwrap();
    let new_single_molt_wisky = NewSingleMaltWisky {
        age: &item.age,
        label: &item.label,
        edition: &item.edition,
        existence_id: &item.existence_id,
        price: &item.price,
        created_at: chrono::Local::now().naive_local(),
        updated_at: chrono::Local::now().naive_local(),
        field_id: &item.field_id,
    };
    let res = insert_into(single_malt_wisky_list).values(&new_single_molt_wisky).get_result(&conn)?;
    Ok(res)
}

pub async fn get_single_malt_wisky_list(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    Ok(web::block(move || get_all_single_malt_wisky_list(db))
        .await
        .map(|single_malt_wisky| HttpResponse::Ok().json(single_malt_wisky))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn get_all_single_malt_wisky_list(pool: web::Data<Pool>) -> Result<Vec<JoinedSingleMaltWisky>, diesel::result::Error> {
    use super::schema::single_malt_wisky_list;
    use super::schema::fields;

    let conn = pool.get().unwrap();
    let items = single_malt_wisky_list::table.inner_join(fields::table.inner_join(countries).inner_join(producing_areas)).inner_join(existence_statuses).select((
        single_malt_wisky_list::id, label, country_name, producing_area_name, status, price)).load::<JoinedSingleMaltWisky>(&conn)?;
    Ok(items)
}

pub async fn get_fields (db: web::Data<Pool>) -> Result<HttpResponse, Error> {
       Ok(web::block(move || get_all_fields(db))
        .await
        .map(|field| HttpResponse::Ok().json(field))
        .map_err(|_| HttpResponse::InternalServerError())?)

}

fn get_all_fields(pool: web::Data<Pool>) -> Result<Vec<JoinedFields>, diesel::result::Error> {
    // use super::schema::single_malt_wisky_list;
    use super::schema::fields;
    let conn = pool.get().unwrap();
    let items = fields::table.inner_join(countries).inner_join(producing_areas).select((
        fields::id, country_name, producing_area_name)).load::<JoinedFields>(&conn)?;
    Ok(items)
}