# 🧮 Premium Modern Calculator

A sleek, high-performance calculator built with Next.js and Tailwind CSS, featuring a premium dark theme and a custom hook-based architecture.

![Premium Calculator UI](file:///home/kenshien/.gemini/antigravity/brain/85968a17-f8dd-45b4-9495-80af479a8cac/premium_calculator_ui_1770811488433.png)

## ✨ Features

- **Premium UI**: Modern dark theme with glassmorphism effects and vibrant accent colors.
- **Hook-based Architecture**: Logic encapsulated in a custom `useCalculator` hook for clean, maintainable code.
- **Mathjs Integration**: Robust arithmetic evaluation using the `mathjs` library.
- **Tactile Feedback**: Interactive buttons with hover effects and micro-animations.
- **Logical Grouping**: Intuitive layout with color-coded buttons for numbers, operators, and actions.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Logic**: [Mathjs](https://mathjs.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter (Google Fonts)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/page.js`: Main UI component.
- `app/hooks/useCalculator.js`: Custom hook for state and arithmetic logic.
- `app/globals.css`: Global styles and theme configuration.