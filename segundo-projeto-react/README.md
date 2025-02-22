# Vite Starter

A modern starter template for building React applications with Vite, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **shadcn/ui** - High-quality React components
- 🔍 **ESLint** - Code quality enforcement
- 🎯 **TypeScript** - Type safety and better developer experience
- 📱 **Responsive** - Mobile-first design approach

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/feliperohdee/vite-starter.git
cd vite-starter
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

Your application will be available at `http://localhost:3000`.

## Available Commands

- `yarn dev` - Start the development server with hot reload
- `yarn build` - Build the application for production
- `yarn lint` - Run ESLint to check code quality
- `yarn preview` - Preview the production build locally
- `yarn add-component [name]` - Add and configure a shadcn/ui component

## Using shadcn/ui Components

This starter comes with shadcn/ui integration. To add new components:

```bash
yarn add-component [component-name]
```

You can browse all available components and their documentation at [shadcn/ui Components](https://ui.shadcn.com/docs/components).

Available components include:

- `button`
- `card`
- `toast`
- And many more from the shadcn/ui collection

Example:

```bash
yarn add-component button
```

This will:

1. Add the component to your project
2. Configure necessary dependencies
3. Create the component in your components directory

## Project Structure

```
vite-starter/
├── src/
│   ├── assets/         # Assets
│   ├── components/     # React components
│   ├── hooks/         # React hooks
│   ├── libs/          # React libs
│   ├── styles/        # Global styles
│   └── App.tsx        # Root component
│   └── index.css      # Global styles
│   └── main.tsx       # Entry point
│   └── vite-env.d.ts  # TypeScript types
├── public/            # Static assets
├── index.html         # HTML template
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Customization

### Tailwind Configuration

The template includes a basic Tailwind CSS configuration. You can customize it by editing `tailwind.config.js`.

### Adding New Dependencies

Use Yarn to add new dependencies:

```bash
yarn add [package-name]
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
