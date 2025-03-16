# KLB React Services Development Guide

## Build Commands
- Build library: `npm run build`
- Start dev server: `npm run start`
- Run tests: `npm run test`
- Run single test: `npm run test -- -t "test name"`

## Code Style
- Use consistent tab indentation
- Single quotes for strings
- Semicolons at end of statements
- Trailing commas in multiline objects/arrays

## Naming Conventions
- camelCase for variables, functions, files
- PascalCase for components, contexts, types
- Hooks prefixed with 'use'
- Endpoints follow domain/feature pattern

## Component Organization
- Context providers in context/
- Hooks organized by feature in hook/
- API endpoints organized by domain in enpoints/
- Type definitions in types/ directory

## Error Handling
- Use useApiErrorHandler hook for API errors
- Try/catch with snackMessageCallback
- Default error handling with customization options