use crate::schema::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct User {
    pub id: i32,
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub created_at: chrono::NaiveDateTime,
}

#[derive(Insertable, Debug)]
#[table_name = "users"]
pub struct NewUser<'a> {
    pub first_name: &'a str,
    pub last_name: &'a str,
    pub email: &'a str,
    pub created_at: chrono::NaiveDateTime,
}

#[derive(AsChangeset)]
#[table_name = "users"]
pub struct PatchUser<'a> {
    pub first_name: &'a str,
    pub last_name: &'a str,
    pub email: &'a str,
    pub created_at: chrono::NaiveDateTime,
}


#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct ExistenceStatus {
    pub id: i32,
    pub status: String,
}

#[derive(Debug, Serialize, Deserialize, Queryable,Identifiable,Clone)]
pub struct ProducingArea {
    pub id: i32,
    pub name: String,
}

#[derive(Debug,Serialize, Deserialize,Queryable)]
pub struct LiquorRow {
    pub id: i32,
    pub producing_area_id: i32,
    pub age: i32,
    pub label: String,
    pub edition: String,
    pub existence_id: i32,
    pub price: i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
}


#[derive(Debug, Serialize, Deserialize ,Queryable , Identifiable)]
pub struct Liquor {
    pub id: i32,
    pub producing_area: ProducingArea,
    pub age: i32,
    pub label: String,
    pub edition: String,
    pub existence_id: i32,
    pub price: i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
}

#[derive(Insertable, Debug)]
#[table_name = "liquors"]
pub struct NewLiquor<'a> {
    pub producing_area_id: &'a i32,
    pub age: &'a i32,
    pub label: &'a str,
    pub edition: &'a str,
    pub existence_id: &'a i32,
    pub price: &'a i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
}



impl Liquor {
    fn from(liquor_row: &LiquorRow, producing_area: &ProducingArea) -> Liquor {
        // Too much cloning? Maybe, I am not sure... 
        Liquor {
            id: liquor_row.id.clone(),
            age: liquor_row.age.clone(),
            label: liquor_row.label.clone(),
            edition: liquor_row.edition.clone(),
            existence_id: liquor_row.existence_id.clone(),
            price: liquor_row.price.clone(),
            created_at: liquor_row.created_at.clone(),
            updated_at: liquor_row.updated_at.clone(),
            producing_area: producing_area.clone(),
        }
    }
}