use super::models::{NewUser, PatchUser, User,ExistenceStatus,ProducingArea,Liquor, NewLiquor,LiquorRow};
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
use super::schema::liquors::dsl::*;


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
pub struct InputLiquor {
        producing_area_id: i32,
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

pub async fn get_producing_areas(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    Ok(web::block(move || get_all_producing_areas(db))
        .await
        .map(|user| HttpResponse::Ok().json(user))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn get_all_producing_areas(pool: web::Data<Pool>) -> Result<Vec<ProducingArea>, diesel::result::Error> {
    let conn = pool.get().unwrap();
    let items = producing_areas.load::<ProducingArea>(&conn)?;
    Ok(items)
}

pub async fn add_liquor(
    db: web::Data<Pool>,
    item: web::Json<InputLiquor>,
) -> Result<HttpResponse, Error> {
    Ok(web::block(move || add_single_liquor(db, item))
        .await
        .map(|liquor| HttpResponse::Created().json(liquor))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn add_single_liquor(
    db: web::Data<Pool>,
    item: web::Json<InputLiquor>,
) -> Result<LiquorRow, diesel::result::Error> {
    let conn = db.get().unwrap();
    let new_liquor = NewLiquor {
        producing_area_id: &item.producing_area_id,
        age: &item.age,
        label: &item.label,
        edition: &item.edition,
        existence_id: &item.existence_id,
        price: &item.price,
        created_at: chrono::Local::now().naive_local(),
        updated_at: chrono::Local::now().naive_local(),
    };
    let res = insert_into(liquors).values(&new_liquor).get_result(&conn)?;
    Ok(res)
}

pub async fn get_liquors(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    Ok(web::block(move || get_all_liquors(db))
        .await
        .map(|liquor| HttpResponse::Ok().json(liquor))
        .map_err(|_| HttpResponse::InternalServerError())?)
}

fn get_all_liquors(pool: web::Data<Pool>) -> Result<Vec<(LiquorRow, ProducingArea)>, diesel::result::Error> {
    let conn = pool.get().unwrap();
     let items =  liquors.inner_join(producing_areas)
    //  .select((
    //      liquors::dsl::id,
    //      liquors::dsl::age,
    //      liquors::dsl::label,
    //      liquors::dsl::edition,
    //      liquors::dsl::existence_id,
    //      liquors::dsl::price,
    //      liquors::dsl::created_at,
    //      liquors::dsl::updated_at,
    //      (producing_areas::dsl::id, producing_areas::dsl::name)
    // ))
    .load::<(LiquorRow,ProducingArea)>(&conn)?;
    Ok(items)
}