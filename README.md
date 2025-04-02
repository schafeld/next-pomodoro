# next-pomodoro

## Description

A simple Pomodoro timer built with Next.js (React) utilising Github Copilot.

## Starter

https://www.coursera.org/learn/optimizing-your-workflow-with-github-copilot-and-vs-code/home/module/1
(Aim is to advance far enough beyond starter to make it open source)

## Repository

https://github.com/schafeld/next-pomodoro

## Set up Next.js

```bash
npx create-next-app@latest
```

✔ What is your project named? … pomodoro-app
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes

Add testing framework

```bash
npm install --save-dev jest jest-environment-jsdom @types/jest @testing-library/react @testing-library/jest-dom
```

## Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Add UI / icons

Diverging from the starter/course to use PrimeReact for UI components and icons.

```bash
npm install primereact primeicons
```
