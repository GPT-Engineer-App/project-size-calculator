# project-size-calculator

Build me a calculator for a project size. Use TailwindCSS and a clean Stripe like look with appropriate elements to create a calculator for project sizes. The different factors are;

1. Number of systems from 2 to n where max(n) is 20 (mandatory)
2. Binary question; one-way or two-way (leave this as optional)
3. Number of datapoints from 1 to n where max(n) is 100 (mandatory)
4. Trigger (this should be a radio option), and the options are - Timer, Asynchronous (webhook), OnDemand (button or CLI call) (mandatory)
5. Quantity of data (estimated) - a) < 10 MB b) < 100MB c) < 1 GB or d) > 1 GB (optional)

When the user answers the first question (Number of systems), fold out a new area with an additional text input boxes corresponding to the number of systems chosen to give the user the opportunity to respond to which ones they are.

Do not calculate anything right now, just put a label in the bottom with the output (live) of all responses.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/project-size-calculator.git
cd project-size-calculator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
