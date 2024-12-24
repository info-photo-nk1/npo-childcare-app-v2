# バックエンド要求事項

## 概要

このドキュメントでは、バックエンド開発に必要な機能について記述します。

## 機能一覧

### 施設情報管理

*   **施設一覧の取得:**
    *   エンドポイント: `/api/facilities`
    *   メソッド: GET
    *   説明: 登録されている施設の一覧を取得します。
    *   レスポンス: `[{id, name, address, latitude, longitude, phone, email, website, description, opening_hours, closing_hours, created_at, updated_at}]`
*   **特定の施設情報の取得:**
    *   エンドポイント: `/api/facilities/{id}`
    *   メソッド: GET
    *   説明: 特定のIDを持つ施設情報を取得します。
    *   レスポンス: `{id, name, address, latitude, longitude, phone, email, website, description, opening_hours, closing_hours, created_at, updated_at}`

### メッセージ管理

*   **メッセージ一覧の取得:**
    *   エンドポイント: `/api/messages`
    *   メソッド: GET
    *   説明: 投稿されたメッセージの一覧を取得します。
    *   レスポンス: `[{id, sender, message, created_at}]`
*   **メッセージの送信:**
    *   エンドポイント: `/api/messages`
    *   メソッド: POST
    *   説明: 新しいメッセージを投稿します。
    *   リクエストボディ: `{sender, message}`
    *   レスポンス: `{id, sender, message, created_at}`

### 記事情報管理

*   **記事一覧の取得:**
    *   エンドポイント: `/api/articles`
    *   メソッド: GET
    *   説明: 投稿された記事の一覧を取得します。
    *   レスポンス: `[{id, title, content, created_at, updated_at}]`
*   **特定の記事情報の取得:**
    *   エンドポイント: `/api/articles/{id}`
    *   メソッド: GET
    *   説明: 特定のIDを持つ記事情報を取得します。
    *   レスポンス: `{id, title, content, created_at, updated_at}`

### ユーザー管理

*   **ユーザー登録:**
    *   エンドポイント: `/api/users` (仮)
    *   メソッド: POST (仮)
    *   説明: 新しいユーザーを登録します。
    *   リクエストボディ: `{name, email, password}` (仮)
    *   レスポンス: `{id, name, email, created_at, updated_at}` (仮)
*   **ログイン (認証):**
    *   エンドポイント: `/api/login`
    *   メソッド: POST
    *   説明: 登録済みのユーザーでログインし、JWTを取得します。
    *   リクエストボディ: `{email, password}`
    *   レスポンス: `{token}`
