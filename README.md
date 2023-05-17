# MantineProvider + Vitest Bug Test Case

This demonstrates a minimal case to reproduce a bug where `MantineProvider` does not pass a `theme` context to an `@emotion/styled` component when using the component in a `vitest` unit tests.

## Setup

- `npm install`

## Running

- `npm run dev` to see the component running at `http://localhost:5173/`
- `npm run test:bad` to see the test fail when the component is wrapped in a `MantineProvider`, because `theme === {}`
- `npm run test:good` to see the same test pass when the component is wrapped in an emotion `ThemeProvider`
