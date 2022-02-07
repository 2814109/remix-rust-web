FROM rust:1.58.1
ENV USER=root
ENV DATABASE_URL=postgres://actix:actix@postgres_db/actix
RUN cargo install cargo-watch
RUN cargo install diesel_cli
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#COPY ./ ./
COPY ./Cargo.toml /usr/src/app/
COPY ./Cargo.lock /usr/src/app/
#ENV CARGO_BUILD_TARGET_DIR=/app/target
CMD bash -c "cargo run --release"