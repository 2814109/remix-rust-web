mod handlers;

use actix_web::{get, post, web, HttpResponse,Responder};

#[get("/test")]
async fn hello_test_section() -> impl Responder {
    HttpResponse::Ok().body("Hello world! here we go  test version ")
}

#[get("/hello/test")]
async fn hello_test() -> impl Responder {
    HttpResponse::Ok().body("test page")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

#[post("/insert")]
async fn post_test(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
} 

pub fn init_router(config: &mut web::ServiceConfig) {
    // config.service(home);
    // config.service(insert);
    // config.service(update);
    // config.service(update_id);
    config.service(hello_test_section);
    config.service(hello_test);
    config.service(echo);
    // config.route("/users", web::get().to(handlers::get_users))
    // config.route("/users/{id}", web::get().to(handlers::get_user_by_id))
    // config.route("/users", web::post().to(handlers::add_user))
    // config.route("/users/{id}", web::delete().to(handlers::delete_user))
} 