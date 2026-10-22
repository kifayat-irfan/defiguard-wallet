# 🔐 DeFiGuard Wallet

A minimal Web3 wallet demo page: connect MetaMask, view your address and live ETH balance,
and send ETH. Plain HTML/JS with Web3.js loaded from CDN — no build step, no dependencies
to install for the wallet itself.

## Run the wallet demo

```bash
npx live-server public
```

1. Open http://127.0.0.1:8080
2. Switch MetaMask to Sepolia Testnet
3. Click **Connect MetaMask** — address and balance display
4. Use the **Send ETH** form to transfer tokens

## Repo layout

- `public/` — the actual wallet demo (`index.html` + `app.js`)
- `src/` — an unrelated React landing-page template (not wired to the wallet)
- `server/` — an unrelated Express + Socket.io + Mongoose scaffold (database and routes
  are commented out; not wired to the wallet)

## Prerequisites

- MetaMask browser extension
- Node.js (only for `live-server`)

## Developer

Kifayat Irfan
