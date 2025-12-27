## Database Schema

This project uses **PostgreSQL** to store recipients and their selected news outlet.  
Each user can subscribe to **exactly one news source**, while each news source can have **many users**.

---

### `users` table

Stores delivery destinations (email or SMS) and their subscription state.

| Column | Type | Description |
|------|------|------------|
| `id` | `bigserial` | Primary key. Uniquely identifies a user/recipient. |
| `channel` | `varchar` | Delivery channel. Either `email` or `sms`. |
| `destination` | `varchar` | The delivery target (email address or phone number). |
| `is_active` | `boolean` | Whether the user is currently receiving daily news digests. Allows unsubscription at a further time without deletion. |
| `is_verified` | `boolean` | Indicates whether the destination has been verified. |
| `news_source_id` | `bigint` | Foreign key referencing `news_sources.id`. Each user must be subscribed to exactly one outlet. |
| `created_at` | `timestamptz` | Timestamp of when the user record was created. |

---

### `news_sources` table

Stores supported news outlets available for subscription.

| Column | Type | Description |
|------|------|------------|
| `id` | `bigserial` | Primary key. Uniquely identifies a news source. |
| `name` | `varchar` | Readable name of the news outlet (e.g. news.com.au). |
| `link` | `varchar` | Base URL or RSS feed used to fetch articles from the outlet (subject to change depending on API used for news gathering). |

---

