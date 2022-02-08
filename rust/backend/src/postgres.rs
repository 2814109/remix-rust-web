use diesel::prelude::*;
use diesel::pg::PgConnection;
use dotenv::dotenv;
use std::env;

use actix_web::{dev::ServiceRequest, web, App, Error, HttpServer};
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};

pub type Pool = r2d2::Pool<ConnectionManager<PgConnection>>;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    // let result: Vec<(String, String)> = dotenv::vars().collect();
    println!("connect start");
    // println!("{:?}", &result);
        println!("{:?}", &env::var("DATABASE_URL"));
    println!("connect stay");


    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    // PgConnection::establish(&database_url)
    //     .expect(&format!("Error connecting to {}", database_url))
  let manager = ConnectionManager::<PgConnection>::new(database_url);
    let pool: Pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create pool.");
}