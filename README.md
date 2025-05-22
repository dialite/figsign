# 🎨 Figsign – Figma-like Collaborative Design Tool

[![Live Site](https://img.shields.io/badge/Live%20Demo-figsign.vercel.app-blue?style=for-the-badge&logo=vercel)](https://figsign.vercel.app/)
[![Source Code](https://img.shields.io/badge/GitHub-Source%20Code-black?style=for-the-badge&logo=github)](https://github.com/dialite/figsign.git)

**Figsign** is a collaborative, real-time, web-based design platform inspired by Figma. It offers canvas-based editing, live multiplayer collaboration, contextual comments, export to PDF, and a clean, responsive interface — built with cutting-edge web technologies.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Core Tools](#architecture--core-tools)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Scripts](#scripts)
- [License](#license)

---

## 🔍 Overview

**Figsign** recreates the core collaborative design experience of tools like Figma with:

- Canvas editing using `Fabric.js`
- Real-time collaboration using `Liveblocks`
- Contextual commenting
- Export to PDF
- Beautiful UI powered by Tailwind and Radix UI

> Designed for developers, designers, and teams to brainstorm, create, and communicate visually — right in the browser.

---

## 🌐 Live Demo

🔗 [**Try It Now**](https://figsign.vercel.app/)  
🔗 [**Source Code on GitHub**](https://github.com/dialite/figsign.git)

---

## ✨ Features

- 🖼️ Canvas drawing with `Fabric.js` (shapes, text, images, drag/resize)
- 👥 Real-time collaboration with presence syncing (`Liveblocks`)
- 💬 Inline comments and discussion threads
- 📤 Export designs to PDF (`jsPDF`)
- ⚡ Context-aware menus and dropdowns (`Radix UI`)
- 🎨 Tailwind-powered custom UI styling
- 🌘 Dark mode ready (via Tailwind variants)
- 🧠 Class variant utilities (`clsx`, `cva`)
- ⚙️ Type-safe development with TypeScript
- 📱 Mobile-responsive design
- 🧩 Modular & scalable component architecture

---

## 🛠️ Tech Stack

| Category          | Technology                                     |
| ----------------- | ---------------------------------------------- |
| Framework         | [Next.js 14](https://nextjs.org/)              |
| Language          | TypeScript                                     |
| Styling           | Tailwind CSS, Tailwind Merge, Tailwind Animate |
| Canvas            | [Fabric.js](http://fabricjs.com/)              |
| Collaboration     | [Liveblocks](https://liveblocks.io/)           |
| PDF Export        | [jsPDF](https://github.com/parallax/jsPDF)     |
| UI Components     | [Radix UI](https://www.radix-ui.com/)          |
| Icons             | [Lucide React](https://lucide.dev/)            |
| Utility Libraries | clsx, class-variance-authority, uuid           |
| Package Manager   | pnpm (preferred) or npm                        |

---

## 🧩 Architecture & Core Tools

### 🧑‍🤝‍🧑 Live Collaboration

- **Liveblocks** handles:
  - Real-time presence (cursor and selection sharing)
  - Shared document state
  - Inline comments with `@liveblocks/react-comments`

### 🧰 Drawing & Editing

- **Fabric.js** powers a performant, interactive HTML5 canvas.
- Objects can be selected, transformed, styled, or deleted.

### 🧠 UI System

- Built with `Tailwind CSS`, `clsx`, `cva`, and Radix primitives
- Context Menu, Dropdowns, Select inputs, Labels, etc.

### 📄 Export & Document Management

- Designs can be exported as PDFs via `jsPDF`.

---

## 🚀 Getting Started

### 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/dialite/figsign.git
cd figsign
pnpm install
# or
npm install
```
