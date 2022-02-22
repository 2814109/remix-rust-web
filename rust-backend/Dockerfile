FROM rust:1.58.1
#ENV USER=root
#ENV DATABASE_URL=postgres://actix:actix@postgres_db/actix
#ENV RUST_BACKTRACE=1
RUN cargo install sccache
RUN cargo install cargo-watch
RUN cargo install diesel_cli
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV HOME=/usr/src/app
ENV SCCACHE_CACHE_SIZE="1G"
ENV SCCACHE_DIR=$HOME/.cache/sccache
ENV RUSTC_WRAPPER="/usr/local/cargo/bin/sccache"
COPY ./Cargo.toml /usr/src/app/
COPY ./Cargo.lock /usr/src/app/
EXPOSE 9000
#CMD bash -c "cargo run --release"