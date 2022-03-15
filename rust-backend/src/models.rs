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

#[derive(Debug, Serialize, Deserialize, Queryable, Identifiable)]
pub struct ProducingArea {
    pub id: i32,
    pub name: String,
}

#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct Country {
    pub id: i32,
    pub country_name: String,
}



#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct LiquorType {
    pub id: i32,
    pub liquor_type_name: String,
}

#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct Field {
    pub id: i32,
    pub country_id: i32,
    pub producing_area_id: i32,

}


#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct SingleMaltWisky {
    pub id: i32,
    pub age: i32,
    pub label: String,
    pub edition: String,
    pub existence_id: i32,
    pub price: i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
    pub field_id: i32,

}

#[derive(Insertable, Debug)]
#[table_name = "single_malt_wisky_list"]
pub struct NewSingleMaltWisky<'a> {
    pub age: &'a i32,
    pub label: &'a str,
    pub edition: &'a str,
    pub existence_id: &'a i32,
    pub price: &'a i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
    pub producing_area_id: &'a i32,
}

#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct JoinedSingleMaltWisky{
    pub id: i32,
    pub label: String,
    pub country_name: String,
    pub producing_area_name: String,
    pub status: String,
    pub price: i32
}

#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct JoinedProducingArea{
    pub id: i32,
    pub country_name: String,
    pub producing_area_name: String,
}

#[derive(Debug, Serialize, Deserialize, Queryable)]
pub struct Liquor {
    pub id: i32,
    pub existence_id: i32,
    pub label: String,
    pub price: i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
    pub country_id: i32,
    pub liquor_type_id: i32,
}

#[derive(Insertable, Debug)]
#[table_name = "liquors"]
pub struct NewLiquor<'a> {
    pub existence_id: &'a i32,
    pub label: &'a str,
    pub price: &'a i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
    pub country_id: &'a i32,
    pub liquor_type_id: &'a i32,
}