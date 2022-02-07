use actix_web::{get, post, web, HttpResponse,Responder};

// #[get("/")]
// async fn home() -> impl Responder {
//     HttpResponse::Ok().content_type("text/html").body(include_str!("static/home.html"))
// }

// #[get("/insert")]
// async fn insert() -> impl Responder {
//     HttpResponse::Ok().content_type("text/html").body(include_str!("static/insert.html"))
// }

// #[get("/update")]
// async fn update() -> impl Responder {
//     HttpResponse::Ok().content_type("text/html").body(include_str!("static/update.html"))
// }

// #[get("/update/{id}")]
// async fn update_id() -> impl Responder {
//     HttpResponse::Ok().content_type("text/html").body(include_str!("static/update.html"))
// }

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
} 