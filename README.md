# Pokédex

A Pokédex built with React and strict TypeScript, using the PokéAPI.

## Features

- Search any Pokémon by name and see its sprite and types.
- Browse a grid of 20 Pokémon.
- Clear loading and error states, with a specific message for each kind of error (no connection, HTTP error, invalid data).

## Tech stack

- React
- TypeScript (strict mode)
- Vite
- PokéAPI

## What I practiced

- Discriminated unions to model request states (`RequestState`), API errors (`ApiError`) and results (`Result<T, E>`).
- Type guards with `unknown` to validate external JSON at runtime, with no `any` and no `as`.
- Exhaustive rendering with the `never` pattern, so a missing state is a compile error.
- Custom hooks with `useEffect` and `AbortController` to cancel stale requests.
- Generic functions and component props typing.

## Getting started

```bash
npm install
npm run dev
```

## Live demo

https://dariel-pokedex.netlify.app/
