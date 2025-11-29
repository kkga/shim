# Shim

Accessible React UI components built on top of
[React Aria Components](https://react-spectrum.adobe.com/react-aria/index.html).
Install components directly into your codebase so you own and customize them.

- Accessible by default (React Aria Components)
- Tailwind v4-based styling
- Copy-install components you fully control
- Fast CLI with auto dependency install

• Website & docs: https://shim.kkga.me

## Quick start

1. Install Tailwind CSS (v4) following the
   [official guide](https://tailwindcss.com/docs/installation) for your
   framework.

2. Initialize Shim:

```sh
pnpm dlx @kkga/shim init
# npm:  npx @kkga/shim init
# yarn: yarn dlx @kkga/shim init
# bun:  bunx @kkga/shim init
```

3. Add a component:

```sh
pnpm dlx @kkga/shim add button
```

See full docs: https://shim.kkga.me/quick-start

## CLI

The CLI installs dependencies, writes config, and scaffolds utilities and theme
CSS.

```sh
pnpm dlx @kkga/shim init
pnpm dlx @kkga/shim add button dialog form
```

More: https://shim.kkga.me/cli

## Manual setup

Prefer manual steps? Guide here: https://shim.kkga.me/manual-setup

## Theming

Customize tokens, variants, and theme: https://shim.kkga.me/theming

## License

MIT
