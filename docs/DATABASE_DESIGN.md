# データベース設計

## テーブル一覧

### facilities
| カラム名 | データ型 | 説明 |
|---|---|---|
| id | INT | 施設ID |
| name | VARCHAR(255) | 施設名 |
| address | VARCHAR(255) | 住所 |
| latitude | DECIMAL | 緯度 |
| longitude | DECIMAL | 経度 |
| phone | VARCHAR(20) | 電話番号 |
| email | VARCHAR(255) | メールアドレス |
| website | VARCHAR(255) | ウェブサイト |
| description | TEXT | 説明 |
| opening_hours | VARCHAR(255) | 開館時間 |
| closing_hours | VARCHAR(255) | 閉館時間 |
| created_at | TIMESTAMP | 作成日時 |
| updated_at | TIMESTAMP | 更新日時 |

### messages
| カラム名 | データ型 | 説明 |
|---|---|---|
| id | INT | メッセージID |
| sender | VARCHAR(255) | 送信者 |
| message | TEXT | メッセージ内容 |
| created_at | TIMESTAMP | 作成日時 |

### articles
| カラム名 | データ型 | 説明 |
|---|---|---|
| id | INT | 記事ID |
| title | VARCHAR(255) | タイトル |
| content | TEXT | 内容 |
| created_at | TIMESTAMP | 作成日時 |
| updated_at | TIMESTAMP | 更新日時 |

### users
| カラム名 | データ型 | 説明 |
|---|---|---|
| id | INT | ユーザーID |
| name | VARCHAR(255) | ユーザー名 |
| email | VARCHAR(255) | メールアドレス |
| password | VARCHAR(255) | パスワード |
| created_at | TIMESTAMP | 作成日時 |
| updated_at | TIMESTAMP | 更新日時 |

## リレーションシップ

*   施設とメッセージは1対多の関係
*   ユーザーとメッセージは1対多の関係
*   ユーザーと記事は1対多の関係

## 注意事項

*   データ型はSupabaseに合わせて調整する。
*   必要に応じてテーブルやカラムを追加する。
