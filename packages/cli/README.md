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

### `init`

Create a configuration file:

```bash
pnpm dlx @kkga/shim init
```

## Configuration

Create `shim.config.json` in your project root:

```json
{
  "componentsPath": "src/components"
}
```

### Path Resolution

1. `--path` flag (highest priority)
2. `componentsPath` in config file
3. `components/` directory (default)

All paths are relative to your project root (where `package.json` is located).

## Examples

```bash
# Basic usage
pnpm dlx @kkga/shim add button

# With config file { "componentsPath": "src/ui" }
pnpm dlx @kkga/shim add button    # → src/ui/button.tsx

# Override config with flag
pnpm dlx @kkga/shim add button --path lib/components    # → lib/components/button.tsx
```