# Deploy on Render (Node backend + same-origin storefront)

This project is **one Node.js app**: it serves your HTML/CSS/JS **and** `/api/*` **and** `/admin/`. On Render you create **one Web Service** (not a separate “static site” + API unless you split the repo later).

## GitHub first

1. Create a new repository on GitHub.
2. From this project folder run (replace `YOUR_USER` / `YOUR_REPO`):

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Patika store"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
   git push -u origin main
   ```

3. Do **not** commit `.env` (it is in `.gitignore`). Set production secrets only in Render.

## Prerequisites

- Code in a **GitHub / GitLab / Bitbucket** repo (Render deploys from Git).
- A Render account: [render.com](https://render.com)

## Steps (Dashboard)

1. **New → Web Service** → connect your repository.

2. **Settings**
   - **Root directory**: leave empty if `package.json` is at the repo root (or set it if the app lives in a subfolder).
   - **Runtime**: **Node**
   - **Build command**: `npm install`
   - **Start command**: `npm start`
   - **Instance type**: Free is OK to try; use a paid plan + **persistent disk** if you need inventory to survive restarts (see below).

3. **Environment variables** (Environment → add):

   | Key | Value |
   |-----|--------|
   | `NODE_VERSION` | `20` (recommended) |
   | `ADMIN_KEY` | Long random secret (same value you type in `/admin/`) |
   | `TELEGRAM_BOT_TOKEN` | Optional |
   | `TELEGRAM_CHAT_ID` | Optional |

   Do **not** set `PORT` manually — Render injects `PORT`; the server already uses `process.env.PORT`.

4. **Deploy** → wait for build. Open the service URL, e.g. `https://your-service.onrender.com`.

5. **Smoke test:** open `https://your-service.onrender.com/api/health` — expect `{"ok":true}`.

6. **URLs**
   - Shop: `https://your-service.onrender.com/`
   - Admin: `https://your-service.onrender.com/admin/`

## SQLite / inventory persistence

- On **Free** web services, the filesystem is often **ephemeral**: deploys or restarts can **wipe** `server/data/store.db`, and the app will **auto-seed** from `data.js` again (you lose admin edits).
- For **production** stock + admin image URLs, use a Render **Persistent Disk** (paid feature on Web Services): mount e.g. `/data` and set:

  ```text
  DB_PATH=/data/store.db
  ```

  Create the disk in the Render dashboard for your service, mount path `/data`, add the env var, redeploy.

## After first deploy

- Open `/admin/`, enter `ADMIN_KEY`, **Ngarko stokun**, set image URLs and stock, **Ruaj**.
- Place a test order; stock should decrease and Telegram should fire if you set those env vars.

## Optional: Blueprint

If you use [`render.yaml`](./render.yaml) in the repo root, you can use Render **Blueprints** to create/update the service from Git. Edit names/plan/region there before connecting the repo.

## Troubleshooting

- **Build fails on `better-sqlite3`**: ensure **Node 20** (`NODE_VERSION=20`). If it still fails, check the build log; native addons need a successful compile on Render’s Linux builders.
- **502 / won’t start**: confirm **Start command** is exactly `npm start` and logs show `Patika server` listening.
- **API 404**: you must use the **https://….onrender.com** URL (same host). Opening `file:///…` for HTML will not reach `/api`.
