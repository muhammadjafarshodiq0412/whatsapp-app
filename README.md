# 🚀 WhatsApp Gateway with Next.js & Baileys

A simple self-hosted WhatsApp Gateway built using **Next.js** and **Baileys**.

This project allows you to connect WhatsApp Web using QR Code and send messages through REST API without using third-party WhatsApp gateway services.

---

# ✨ Features

* 📱 WhatsApp Multi Device Support
* 🔐 QR Code Authentication
* 💾 Persistent Login Session
* 🔄 Auto Reconnect
* 📡 REST API for Sending Messages
* ⚡ Built with Next.js App Router
* 🟦 TypeScript Support
* 🏠 Lightweight & Self Hosted

---

# 🛠 Tech Stack

* ⚛️ Next.js 16
* 🟦 TypeScript
* 💬 Baileys (@whiskeysockets/baileys)
* 🟢 Node.js

---

# 📋 Requirements

Before running this project, make sure you already have:

* 🟢 Node.js >= 18
* 📦 npm >= 9
* 📱 WhatsApp account
* 🌐 Internet connection

Check installed versions:

```bash
node -v
npm -v
```

---

# 📥 Installation

Clone repository:

```bash
git clone https://github.com/your-username/whatsapp-app.git
```

Go to project folder:

```bash
cd whatsapp-app
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Open browser:

```bash
http://localhost:3000
```

---

# 🔗 WhatsApp Login & QR Scan

## 1. Start Application

Run:

```bash
npm run dev
```

---

## 2. Open Browser

Open:

```bash
http://localhost:3000
```

---

## 3. QR Code Appears

QR Code will automatically appear on the page.

---

## 4. Scan QR Using WhatsApp

### Android

* Open WhatsApp
* Tap ⋮ (three dots)
* Linked Devices
* Link a Device

### iPhone

* Open WhatsApp
* Settings
* Linked Devices
* Link a Device

Then scan the QR Code.

---

## 5. Connected

If successful:

```text
CONNECTED
```

will appear in terminal logs.

Session data will automatically be saved inside:
- noted: if you want to clear session, remove/delete auth folder
```bash
/auth
```

So you do not need to scan QR again after restarting the app.

---

# 📡 API Endpoints

## 🔌 Connect WhatsApp

### Endpoint

```http
GET /api/connect
```

### Response

```json
{
  "qr": "qr-code-data"
}
```

---

# ✉️ Send Message

## Endpoint

```http
POST /api/connect/send
```

---

## Request Body

```json
{
  "number": "6281234567890",
  "message": "Hello from Baileys"
}
```

---

## Example Using CURL

```bash
curl --location 'http://localhost:3000/api/connect/send' \
--header 'Content-Type: application/json' \
--data '{
  "number": "628216957356",
  "message": ""
}'
```

---

## Example Using JavaScript Fetch

```javascript
await fetch(
    "http://localhost:3000/api/connect/send",
    {
        method: "POST",
        headers: {
            "Content-Type":
                "application/json"
        },
        body: JSON.stringify({
            number:
                "6281234567890",
            message:
                "Hello World"
        })
    }
);
```

---

## Success Response

```json
{
  "success": true
}
```

---

# ☎️ Number Format

Phone number must:

* 🌍 Use country code
* ❌ Without "+"
* ❌ Without spaces

Correct:

```text
6281234567890
```

Wrong:

```text
081234567890
+6281234567890
```

---

# 📁 Project Structure

```bash
app/
 ├── api/
 │    ├── connect/
 │    │     └── route.ts
 │    │
 │    └── send/
 │          └── route.ts
 │
 ├── page.tsx
 │
lib/
 └── whatsapp.ts

auth/
 └── session files
```

---

# ⚙️ Environment

No environment variables required for basic usage.

Optional:

```env
PORT=3000
```

---

# 🙈 .gitignore

```gitignore
node_modules/
.next/
auth/
.env
.DS_Store
```

---

# 🧰 Useful Commands

Install dependency:

```bash
npm install
```

Run development:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Run production:

```bash
npm start
```

---

# ⚠️ Important Notes

* This project uses unofficial WhatsApp Web protocol
* Avoid spam or bulk messaging
* WhatsApp may block accounts abusing automation
* Recommended for internal tools, automation, and personal projects

---

# 🚧 Future Improvements

* 🖼 Send Images
* 📄 Send PDF/Documents
* 🔌 WebSocket Real-time Status
* 👥 Contact Management
* 👨‍👩‍👧‍👦 Group Messaging
* 🐳 Docker Support
* 🗄 Database Session Storage

---

# 📜 License

MIT License By Jafar
