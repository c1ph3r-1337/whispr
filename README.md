# Whispr

**Made by fsociety (c!ph3r1337 aka Jaskaran Singh , Rahul Garg**

**Anonymous. Secure. Untraceable.**

A lightweight, self‑hosted "whisper board" web application that allows users to post anonymized messages ("Whisprs") and attachments without trace or logging. Built with Node.js, Express, and a modern, responsive CSS UI.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Anonymous Login**: Generates a random, non‑predictable `anon_xxxxx` username on each login.
- **Secure Posts**: Messages are hashed server‑side with bcrypt before storage.
- **File Attachments**: Upload and serve attachments via a static `uploads/` route.
- **Responsive UI**: Mobile‑first design with a modern, glassy theme.
- **Multiple Views**:
  - **Whispr Board**: View and post new messages.
  - **Network Nodes**: Browse available nodes (All, Active, Premium).
  - **Profile**: (Future) User account settings.

## Demo

_Screenshots or link to a live demo can be added here._

## Prerequisites

- [Node.js](https://nodejs.org/) v14+  
- npm (comes bundled with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/whispr.git
   cd whispr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

---

## Usage

1. **Login**: Choose any password (≥4 characters). You will be assigned an anonymous ID.
2. **Post a Whispr**: Click **New Whispr**, enter text, optionally attach files, and submit.
3. **Browse Nodes**: Switch to **Network Nodes** for a read‑only view of privacy servers.
4. **Log Out**: Simply close your browser—no session data is stored.

---

## Project Structure

```
whispr/
├── uploads/           # Stored file attachments
├── posts.json         # Persisted hashed posts
├── index.html         # Single‑page application entry
├── style.css          # Styles and responsive layout
├── script.js          # Client‑side logic and view switching
├── server.js          # Express server, REST API routes
├── package.json       # Project metadata & scripts
└── README.md          # This documentation
```

---

## Configuration

No external configuration required for local dev. Defaults:

- **Server Port**: `3000` (or set `PORT` environment variable)
- **Upload Directory**: `./uploads/`
- **Posts File**: `./posts.json`

Environment variables (optional):

| Key  | Description             | Default  |
| ---- | ----------------------- | -------- |
| PORT | HTTP server listen port | `3000`   |

---

## Technologies

- **Server**: [Express](https://expressjs.com/), [bcrypt](https://www.npmjs.com/package/bcrypt), [multer](https://github.com/expressjs/multer)
- **Client**: Vanilla JS (ES6+), CSS3, CSS Variables
- **Data**: JSON file storage (no database)

---

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add ..."`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please ensure code style consistency and include relevant tests or screenshots.

---

## License

This project is licensed under the [MIT License](LICENSE).

