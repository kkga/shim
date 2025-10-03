# Shim CLI

A command-line tool for installing UI components from the Shim component library.

## Usage

Run the CLI without installing it globally:

```bash
# The package name is '@kkga/shim', the command is 'shim'
pnpm dlx @kkga/shim <command>
```

### Adding Components

```bash
# Install a component to the default directory
pnpm dlx @kkga/shim add button

# Install a component to a custom directory (relative to project root)
pnpm dlx @kkga/shim add button --path src/components

# Force overwrite existing files
pnpm dlx @kkga/shim add button --overwrite

# Install multiple components
pnpm dlx @kkga/shim add button dialog form
```

### Configuration File

You can create a configuration file to customize component installation paths and other settings.

#### Creating a Config File

```bash
# Generate a sample configuration file
pnpm dlx @kkga/shim init

# Force overwrite existing config file
pnpm dlx @kkga/shim init --force
```

#### Configuration Options

Create a `shim.config.json` file in your project root:

```json
{
  "componentsPath": "src/components"
}
```

**Options:**
- `componentsPath` (string): Path where components will be installed (relative to project root)

#### Priority Order

The CLI determines the installation path in this order:
1. Command-line `--path` option (highest priority)
2. `componentsPath` from config file
3. Default `components` directory (lowest priority)

#### Overwrite Protection

By default, the CLI will not overwrite existing files. If a component file already exists, the installation will fail with an error message listing the conflicting files.

```bash
# This will fail if button.tsx already exists
pnpm dlx @kkga/shim add button

# Use --overwrite to force overwrite existing files
pnpm dlx @kkga/shim add button --overwrite
```

#### Supported Config Files

The CLI will automatically look for these config files in order:
- `shim.config.json`
- `.shim.config.json`

## Examples

```bash
# With the example config above (paths always relative to project root):
pnpm dlx @kkga/shim add button    # Installs to <project-root>/src/components/
pnpm dlx @kkga/shim add dialog    # Installs to <project-root>/src/components/
pnpm dlx @kkga/shim add card      # Installs to <project-root>/src/components/

# Override with CLI option:
pnpm dlx @kkga/shim add button --path lib/ui  # Installs to <project-root>/lib/ui/

# Force overwrite existing files:
pnpm dlx @kkga/shim add button --overwrite  # Overwrites existing button.tsx

# Works from any subdirectory in your project:
cd src/pages
pnpm dlx @kkga/shim add button --path components  # Still installs to <project-root>/components/
```