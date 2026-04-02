# Deploy to Fly.io (Node + SQLite + admin)

This app runs a **single Node process** that:

- Serves your storefront (`index.html`, `*.html`, `*.js`, `*.css`)
- Exposes **JSON APIs** under `/api/store/*` and `/api/orders`
- Serves the **admin panel** at `/admin/` (manage stock + product image URLs in SQLite)

## Local run

```powershell
cd "c:\Users\alert\Downloads\website\NEW WEBSITE"
npm install
# Optional: set env — see `.env.example`
npm start
```

Open http://localhost:3000/ and http://localhost:3000/admin/

## Environment variables

| Variable | Purpose |
|----------|---------|
| `PORT` | Listen port (default `3000`) |
| `ADMIN_KEY` | Required for `/api/admin/*` and admin UI saves (header `X-Admin-Key`) |
| `TELEGRAM_BOT_TOKEN` | Optional; server sends order summary after successful stock decrement |
| `TELEGRAM_CHAT_ID` | Optional; Telegram chat id |
| `DB_PATH` | Optional; default `./server/data/store.db`. On Fly use a volume path e.g. `/data/store.db` |

Copy `.env.example` to `.env` for local development.

## Fly.io

```powershell
fly auth login
fly launch
fly secrets set ADMIN_KEY="your-long-random-secret"
fly secrets set TELEGRAM_BOT_TOKEN="..." TELEGRAM_CHAT_ID="..."
fly deploy
```

**Persistent SQLite:** without a volume, the database resets when the machine is replaced. For production inventory, create a Fly volume and set `DB_PATH=/data/store.db`, then mount the volume at `/data` (see [Fly volumes](https://fly.io/docs/reference/volumes/)).

## Security

- Never commit real `ADMIN_KEY` or Telegram tokens.
- The storefront has **no** Supabase; all inventory is in your SQLite DB managed via `/admin/`.
