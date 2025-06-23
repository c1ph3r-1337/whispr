# Whispr

**Made by fsociety ( c1ph3r1337 aka Jaskaran Singh, Rahul Garg )**

> **Anonymous. Secure. Untraceable. Decentralized.**

Whispr is a whistleblower-first, privacy-hardened communication platform. It's a lightweight, self-hosted "whisper board" where users can anonymously post encrypted messages and files without any trace. No accounts, no logs, no metadata.

Built with Node.js, Express, and modern responsive frontend technologies — Whispr helps protect the voices that need it most.

---

## Table of Contents

- [🔐 Philosophy](#🔐-philosophy)
- [🚀 Features](#🚀-features)
- [🖥️ Demo](#️-demo)
- [⚙️ Prerequisites](#️-prerequisites)
- [📦 Installation](#-installation)
- [🧪 Usage](#-usage)
- [📁 Project Structure](#-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🛠️ Technologies](#️-technologies)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🔐 Philosophy

Whispr is designed for:

- **Whistleblowers**, journalists, and activists under surveillance.
- **End-to-end privacy**: No personal info, no trackers, no identifiers.
- **Untraceable content**: Encrypted messages and anonymized file uploads.
- **Decentralization**: Future-ready for Tor, IPFS, and peer-to-peer routing.
- **Zero-trust model**: Even the server doesn't know what you wrote.

---

## 🚀 Features

### 🔑 Anonymous Identity
- No signup. No email. No login.
- Temporary ID like `whispr_x76nimci` is generated per session.

### 🔐 End-to-End Security
- Every message is **hashed with bcrypt** (irreversible one-way encryption).
- Attachments are anonymized and stored with randomized names.
- Messages are unsearchable and unreadable—even by the server.

### 🧵 Public Chat System
- Users can create "New Whisprs" — anonymously encrypted threads.
- Acts as a secure whisper board or leak repository.

### 🧱 Private Nodes (Paid Groups)
- Custom **Nodes** represent private, encrypted chatrooms or communities.
- Can be public, private, or **premium (paid)** access.
- Each node is a sandboxed environment.

### 🖥️ Responsive UI
- Modern design, glassy effects, dark mode.
- Works seamlessly across desktops, tablets, and phones.

---

## 🖥️ Demo

> _[Optional live link]_  
> Or run locally: `http://localhost:3000`

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v14+
- npm (comes with Node)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/whispr.git
cd whispr
npm install
npm start
````

Open your browser at `http://localhost:3000`.

---

## 🧪 Usage

1. **Login**
   Choose any password (min 4 chars). A temporary anonymous identity is assigned.

2. **Post a Whispr**
   Click **New Whispr**, enter your secret, attach any files, and submit. Your message is encrypted.

3. **Browse Network Nodes**
   View public/private node groups. Premium nodes enable advanced privacy.

4. **Log Out**
   Close the browser tab. No session data is stored.

---

## 📁 Project Structure

```
whispr/
├── public/
│   ├── index.html       # Main UI
│   ├── style.css        # Responsive styling
│   └── script.js        # Client logic (login, views, posting)
├── uploads/             # Encrypted uploaded files
├── posts.json           # Hashed posts (no plain text ever stored)
├── server.js            # Express backend
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

---

## ⚙️ Configuration

| Env Variable     | Description            | Default    |
| ---------------- | ---------------------- | ---------- |
| `PORT`           | Server port            | `3000`     |
| `UPLOAD_DIR`     | Folder for attachments | `uploads/` |
| `SESSION_SECRET` | Session encryption key | random     |

No DB or .env is required for local development.

---

## 🛠️ Technologies

* **Backend**: Express.js, multer, bcrypt, express-session
* **Frontend**: Vanilla JS, modern CSS (with variables and animations)
* **Storage**: JSON file-based (future: IPFS or DB)

---

## 🤝 Contributing

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to your fork: `git push origin feature/YourFeature`.
5. Open a Pull Request.

*We welcome all ideas — especially around encryption, decentralization, and secure UX.*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
