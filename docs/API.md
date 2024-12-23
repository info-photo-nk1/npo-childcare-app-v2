# APIドキュメント

## エンドポイント一覧

| エンドポイント | メソッド | 説明 | リクエストボディ | レスポンスボディ |
|---|---|---|---|---|
| `/api/facilities` | GET | 施設一覧を取得する |  | `[{id, name, address, ...}]` |
| `/api/facilities/{id}` | GET | 特定の施設情報を取得する |  | `{id, name, address, ...}` |
| `/api/messages` | GET | メッセージ一覧を取得する |  | `[{id, sender, message, ...}]` |
| `/api/messages` | POST | メッセージを送信する | `{sender, message}` | `{id, sender, message, ...}` |
| `/api/articles` | GET | 記事一覧を取得する |  | `[{id, title, content, ...}]` |
| `/api/articles/{id}` | GET | 特定の記事情報を取得する |  | `{id, title, content, ...}` |

## リクエストとレスポンスの形式

### リクエストヘッダー
```
Content-Type: application/json
```

### レスポンスヘッダー
```
Content-Type: application/json
```

### エラーレスポンス
```json
{
  "error": {
    "code": "エラーコード",
    "message": "エラーメッセージ"
  }
}
```

## 認証

APIへのアクセスには、JWT（JSON Web Token）を用いた認証が必要です。

1.  ログインエンドポイント(`/api/login`)にユーザー名とパスワードをPOSTリクエストで送信します。
2.  レスポンスとしてJWTが返却されます。
3.  以降のAPIリクエストでは、Authorizationヘッダーに`Bearer <JWT>`の形式でJWTを含めてください。

例:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
# APIドキュメント

## エンドポイント一覧

| エンドポイント | メソッド | 説明 | リクエストボディ | レスポンスボディ |
|---|---|---|---|---|
| `/api/facilities` | GET | 施設一覧を取得する |  | `[{id, name, address, ...}]` |
| `/api/facilities/{id}` | GET | 特定の施設情報を取得する |  | `{id, name, address, ...}` |
| `/api/messages` | GET | メッセージ一覧を取得する |  | `[{id, sender, message, ...}]` |
| `/api/messages` | POST | メッセージを送信する | `{sender, message}` | `{id, sender, message, ...}` |
| `/api/articles` | GET | 記事一覧を取得する |  | `[{id, title, content, ...}]` |
| `/api/articles/{id}` | GET | 特定の記事情報を取得する |  | `{id, title, content, ...}` |

## リクエストとレスポンスの形式

### リクエストヘッダー
```
Content-Type: application/json
```

### レスポンスヘッダー
```
Content-Type: application/json
```

### エラーレスポンス
```json
{
  "error": {
    "code": "エラーコード",
    "message": "エラーメッセージ"
  }
}
```
