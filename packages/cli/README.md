# Shim CLI

Command-line tool for installing UI components from [Shim](https://shim.kkga.me).

[Documentation](https://shim.kkga.me) • [GitHub](https://github.com/kkga/shim) • [npm](https://www.npmjs.com/package/@kkga/shim)

## Usage

```bash
pnpm dlx @kkga/shim add <component>
```

## Commands

### `add`

Install components to your project:

```bash
# Install a component
pnpm dlx @kkga/shim add button

# Install to custom path
pnpm dlx @kkga/shim add button --path src/ui

# Install multiple components
pnpm dlx @kkga/shim add button dialog form

# Overwrite existing files
pnpm dlx @kkga/shim add button --overwrite
```

Path is relative to your project root (where `package.json` is located).

### `init`

Initialize your project with configuration and utility files:

```bash
# Create config with default paths
pnpm dlx @kkga/shim init

# Create config with custom paths
pnpm dlx @kkga/shim init --components-path src/ui --utils-path src/lib

# Force overwrite existing config
pnpm dlx @kkga/shim init --force
```

The `init` command:
- Creates a `shim.config.json` configuration file
- Downloads required utility files (`style.ts`, `theme.tsx`) to your utils directory
- Ensures your project is ready for component installation

## Configuration

Create `shim.config.json` in your project root:

```json
{
  "componentsPath": "src/components",
  "utilsPath": "src/lib"
}
```

### Available Options

- `componentsPath`: Directory for component files (default: `"components"`)
- `utilsPath`: Directory for utility files (default: `"utils"`)

## Features

### Import Transformation

Imports are automatically transformed based on your configured paths:

```typescript
// Original: import { Button } from "@/shim-ui/button";
// Becomes: import { Button } from "@/src/ui/button";
```

### Dependency Resolution

Components with dependencies are installed automatically.

### Utility Files

Downloads required utility files (`style.ts`, `theme.tsx`) during init.

