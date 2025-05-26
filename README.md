# 🛍️ Whatbytes Frontend Assignment

This is a [Next.js](https://nextjs.org) ecommerce project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and styled using Tailwind CSS. It implements product filtering, dynamic routing, and a persistent shopping cart using React Context.

---

## 🚀 Live Demo

👉 [View Deployed Project on Vercel](https://your-vercel-link.vercel.app)  
*(Replace this link with your actual deployment URL)*

---

## 📂 Features Implemented

### ✅ Home Page (`/`)
- Responsive layout with sidebar + product grid
- Category and price filtering using UI and URL query params
- Live search with string matching
- "Add to Cart" button directly from product cards
- Mobile-first responsive design (1–3 column grid)

### ✅ Product Detail Page (`/product/[id]`)
- Large image display
- Title, price, description, and category
- Quantity selector and "Add to Cart" button

### ✅ Cart Page (`/cart`) *(Bonus)*
- List of added items
- Quantity update and remove functionality
- Total price calculation
- Cart persisted in `localStorage`

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** for styling
- **Lucide-react** for icons
- **React Context API** for cart state
- **LocalStorage** for cart persistence

---

## 📦 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# whatbytesassingment
