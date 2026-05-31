# VCareer — Personal Job Board & Portal Manager

A sleek, dark-themed personal dashboard for tracking and managing company career portals. VCareer lets you build a curated watchlist of up to 50+ companies, store your account credentials in a local vault, filter by industry or application status, and monitor new job openings — all without any backend or internet dependency.

---

## ✨ Features

- **50 Pre-loaded Career Portals** across 7 industry categories (MAANG, AI/Hardware, SaaS, Fintech, Consulting, Healthcare, and more)
- **Add & Delete Custom Portals** — create your own watchlist entries with a name, URL, category, and logo abbreviation
- **Credentials Vault** — store your username/email and private notes for each portal locally per user account
- **Application Status Tracking** — mark portals as *No Account*, *Incomplete*, *Complete*, or *Applied*
- **Search & Filter** — instantly search by name or keyword, filter by industry category, and filter by application status
- **Hero Stats Banner** — real-time count of portals you're tracking
- **Multi-user Support** — each account is isolated in localStorage; credentials are never shared between users
- **Toast Notifications** — instant feedback on all actions (add, delete, vault save, login)
- **Responsive Design** — works on desktop and mobile
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript; no framework, no build step

---

## 🗂️ Industry Categories

| Category | Companies |
|---|---|
| MAANG / Tech Giants | Google, Microsoft, Apple, Amazon, Meta, Netflix |
| AI / Hardware / Aero | NVIDIA, Tesla, SpaceX, Intel, AMD, Qualcomm |
| Enterprise / SaaS | Salesforce, Adobe, Shopify, Stripe, Zoom, Slack, Atlassian, HubSpot, ServiceNow, Oracle |
| Finance & Fintech | Goldman Sachs, JPMorgan, PayPal, Visa, Mastercard, Robinhood, Coinbase |
| Gig, Travel & Media | Spotify, Disney, Airbnb, Uber, Lyft, Nike, Walmart, Target |
| Consulting & Tech Services | Deloitte, Accenture, McKinsey, BCG, IBM, Capgemini |
| Healthcare & Pharma | J&J, Pfizer, Moderna, CVS, UnitedHealth, Eli Lilly, Abbott |

---

## 🚀 Getting Started

### Prerequisites

- [Python 3](https://www.python.org/) — for the local dev server (built into most systems)
- A modern web browser (Chrome, Edge, Firefox, Safari)
- No `npm install`, no build step required

### Run Locally

```bash
# Navigate to the project folder
cd path/to/jobboard

# Start the Python HTTP server
python -m http.server 8000
```

Then open your browser and go to:

```
http://localhost:8000
```

> **Note:** Open the app via `http://localhost:8000` rather than directly opening `index.html` as a file, to avoid CORS issues with fonts and icons.

---

## 🔐 Authentication

VCareer uses a local, browser-based authentication system:

- Click **Create Account** on the login screen to register a username and password
- All data (portals, vault credentials, jobs) is stored in your browser's `localStorage` and is **fully isolated per username**
- No data is ever sent to a server
- To log out, click the logout button (→) in the top-right corner

---

## 🗃️ Project Structure

```
jobboard/
├── index.html   # Application markup and modals
├── styles.css   # Full design system (variables, components, animations)
└── app.js       # All application logic (state, CRUD, filtering, auth)
```

---

## 🛠️ How to Use

### Adding a Custom Portal
1. Click **+ Add Portal** in the top-right header
2. Enter the company name, careers URL, industry category, and an optional abbreviation (e.g. `OAI`)
3. Click **Create Portal** — the card appears instantly in your grid

### Managing the Vault
1. On any portal card, click the **user-gear icon** (top-right of card) or the **Vault** button (card footer)
2. Fill in your email/username, choose an application status, and add any private notes
3. Click **Save Changes** — the status badge and email on the card update immediately

### Filtering Portals
- Use the **search bar** to filter by name or keyword in real time
- Use the **All Industries** dropdown to filter by category
- Use the **All Accounts** dropdown to filter by application status

### Deleting a Portal
- Click the **trash icon** on any card and confirm the prompt

---

## 📦 Data Storage

All data is stored in the browser's `localStorage` under keys namespaced by username:

| Key | Contents |
|---|---|
| `vcareer_session` | Currently logged-in username |
| `vcareer_user_<name>` | Hashed password for the account |
| `vcareer_portals_<name>` | Portal list with vault data |
| `vcareer_jobs_<name>` | Job entries |

To fully reset the app, open DevTools → Application → Local Storage → clear all `vcareer_*` keys.

---

## 🎨 Design System

- **Font:** Inter (body) + Outfit (headings) via Google Fonts
- **Icons:** Font Awesome 6.4
- **Theme:** Space-dark glassmorphism with HSL color palette
- **Accents:** Purple `hsl(262, 80%, 60%)` / Cyan `hsl(192, 95%, 48%)`
- **Glass panels:** `backdrop-filter: blur(12px)` with translucent backgrounds

---

## 📄 License

This project is for personal use. Feel free to fork and customize it for your own job search workflow.
