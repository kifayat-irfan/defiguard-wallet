# 🔐 DeFiGuard Wallet — Technical Assessment

A basic Web3 wallet interface built with Web3.js that allows users to connect their MetaMask wallet, view their ETH balance, and send ETH on the Sepolia testnet.

---

## ✅ Features

- 🦊 MetaMask wallet connection
- 💰 Live ETH balance & wallet address display
- 📤 Send ETH to any address
- 🌐 Sepolia Testnet support

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Web3.js | Blockchain interaction |
| MetaMask | Wallet provider |
| Node.js v18+ | Runtime environment |
| HTML/CSS/JS | Frontend interface |
| Sepolia Testnet | Test network |

---

## 📋 Prerequisites

Before running this project, make sure you have:

- [Node.js v18+](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- [MetaMask](https://metamask.io/) browser extension installed
- Sepolia testnet configured in MetaMask

---

## 🚀 Setup & Installation

### Step 1 — Clone the Repository
```bash
git clone https://github.com/kifayat-irfan/defiguard-wallet.git
cd defiguard-dev
```

### Step 2 — Install Dependencies
```bash
npm install
npm install web3
```

### Step 3 — Start Local Server
```bash
npx live-server public
```

> The app will automatically open at `http://127.0.0.1:8080`

---

## 🧪 How to Test

1. Open browser at `http://127.0.0.1:8080`
2. Open MetaMask → Switch network to **Sepolia Testnet**
   - Settings → Advanced → Enable **Show Test Networks**
3. Click **"Connect MetaMask"** button
4. Approve connection in MetaMask popup
5. Your wallet **address** and **ETH balance** will appear
6. To send ETH:
   - Enter recipient address (`0x...`)
   - Enter amount in ETH (e.g. `0.001`)
   - Click **"Send ETH"**
   - Confirm transaction in MetaMask

---

## 📁 Project Structure

```
defiguard-dev/
├── public/
│   ├── index.html      # Main wallet UI
│   ├── app.js          # Web3.js logic
│   └── favicon.ico
├── server/
│   ├── index.js        # Node.js backend
│   ├── routes/
│   ├── controllers/
│   └── models/
├── package.json
└── README.md
```

---

## 👨‍💻 Developer

**Kifayat Irfan**  
GitHub: [@kifayat-irfan](https://github.com/kifayat-irfan)

---

## 📝 Notes

- This project was built as part of the DeFiGuard technical assessment for Blaize.tech
- Real ETH is **not** required — Sepolia testnet tokens are used for testing
- Task completed within the 30-minute timeframe