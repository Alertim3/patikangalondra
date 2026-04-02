# Patika Nga Londra — web store

Single **Node.js** app: storefront, REST API (`/api`), and admin UI (`/admin/`) with **SQLite** inventory.

## Run locally

```bash
npm install
cp .env.example .env
# Set ADMIN_KEY in .env, then:
npm start
```

- Shop: http://localhost:3000/  
- Admin: http://localhost:3000/admin/  

## Deploy (GitHub → Render)

1. Push this folder to a **GitHub** repository (root must contain `package.json` and `server/`).
2. In [Render](https://render.com): **New → Web Service** → connect that repo.
3. **Build command:** `npm install`  
   **Start command:** `npm start`
4. Add **Environment** variables in Render:
   - `NODE_VERSION` = `20`
   - `ADMIN_KEY` = long random secret (use the same value when you log into `/admin/`)
   - Optional: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
5. Deploy. Open your `https://*.onrender.com` URL.

Details, persistence for SQLite, and troubleshooting: **[RENDER_DEPLOY.md](./RENDER_DEPLOY.md)**.  
Optional **Blueprint**: [render.yaml](./render.yaml) (New → Blueprint).

## Env reference

See [.env.example](./.env.example).
