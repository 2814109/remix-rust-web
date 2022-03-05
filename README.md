# Break through

## insert 時に get_result でエラーが出る

https://github.com/diesel-rs/diesel/issues/2011
構造体のカラム順序と schema のカラム順序を揃える必要がある

### 起こりうるケース

テーブル定義を変更した場合　（カラムの削除　 OR 追加）

# migration

## diesel

### create migration file

diesel migration generate create\_{table_name}

### run migration

diesel migration run

### revert migration

diesel migration revert

### remake migration

diesel migration redo

## command on docker container of rust-app

- curl -v -H "Content-Type: application/json" -X POST -d '{"first_name": "foo1", "last_name": "bar1", "email": "foo1@bar.com"}' 0.0.0.0:9000/users

- curl -v 0.0.0.0:9000/users

- export TOKEN=

## ログアウト処理

AUTH0_RETURN_TO_URL と Allowed Logout URLs 　を一緒にする必要がある

## form method

get 以外の処理 patch delete post は method = "post" と宣言する

# サーバーに SSH 接続した後に実行すること

## タスクのセクションとコマンド一覧

### パッケージのアップデート

sudo yum -y update

### Node のインストール

### Rust のインストール

### ソースコードをクローンする

### Host で DB（Postgres）を用意する

### プロジェクトをビルドする

#### フロントエンド　 remix

#### バックエンド　 actix-web

#### DB postgres

### バックエンドと DB の接続を確立する

### フロントエンドとバックエンドの接続を確認する

### フロントエンドの Port を外部に開放する

### 外部からアクセスしたときに View が表示される
