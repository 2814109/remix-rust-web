use diesel::prelude::*;
use diesel::pg::PgConnection;
use dotenv::dotenv;
use std::env;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    // let result: Vec<(String, String)> = dotenv::vars().collect();
    println!("connect start");
    // println!("{:?}", &result);
        println!("{:?}", &env::var("DATABASE_URL"));
    println!("connect stay");


    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .expect(&format!("Error connecting to {}", database_url))

}