# KLB React Services

React hooks and utilities for KarpelesLab services.

## Installation

```bash
npm install @karpeleslab/klb-react-services
```

or

```bash
yarn add @karpeleslab/klb-react-services
```

## Usage

```jsx
import { useUser, useApiErrorHandler } from '@karpeleslab/klb-react-services';

function MyComponent() {
  const { user, loading, error } = useUser();
  const handleApiError = useApiErrorHandler();
  
  // Your component logic here
}
```

## Features

- React hooks for KarpelesLab API services
- Context providers for authentication and API access
- Typescript definitions
- Organized API endpoints for different services
