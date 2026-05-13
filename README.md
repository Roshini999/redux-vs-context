# Context API vs Redux — Re-render Demo

A minimal React app that **visually proves** the re-render difference between Context API and Redux.

No theory. Just open the app, interact with the controls, and watch the re-render counters.

---

## 🔴 The Problem with Context API

When any value in a Context changes, **every consumer re-renders** — even components that don't use the changed value.

In this demo, typing in the filter box causes `ThemePanel` and `UserPanel` to re-render too — even though they have nothing to do with filters.

## ✅ How Redux Fixes It

With Redux, each component subscribes **only to the slice it needs** via `useSelector`. Typing in the filter box re-renders **only** `FilterPanel`. Everything else stays still.

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/redux-vs-context.git
cd redux-vs-context
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
src/
├── context/
│   └── AppContext.js       # ❌ Single large context (problem demo)
├── store/
│   └── store.js            # ✅ Redux store with separate slices
├── components/
│   └── RenderTracker.js    # Tracks + displays re-render count per component
├── pages/
│   ├── ContextDemo.js      # Demo showing the re-render problem
│   └── ReduxDemo.js        # Demo showing selective re-renders with Redux
└── App.js                  # Tab navigation between both demos
```

---

## 💡 Key Concepts Demonstrated

| | Context API | Redux |
|---|---|---|
| Re-render scope | All consumers | Only subscribed components |
| Setup | Zero (built-in) | Small (RTK) |
| Best for | Theme, auth, locale | Filters, pagination, complex state |
| Debugging | Basic | Redux DevTools (time-travel) |

---

## 📌 When to Use What

**Use Context API for:**
- Dark mode / theme toggling
- Auth state (logged in / out)
- Language and locale preferences

**Use Redux for:**
- State that updates frequently (filters, pagination)
- State shared across many unrelated components
- Large teams needing traceable state changes

---

## 🔗 Related Blog Post

Read the full breakdown on LinkedIn: *[Context API vs Redux — I made my app slow without writing a single bad line of code]*

---

## 🛠️ Tech Stack

- React 18
- Redux Toolkit
- React-Redux

---

⭐ Star this repo if it helped you understand the difference!
