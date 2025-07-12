# Unified Claude UI

A unified web interface for Claude AI interactions - MVP Implementation.

## 🚀 Features

- **Modern Stack**: Next.js 15 with TypeScript and App Router
- **Responsive Design**: Tailwind CSS with mobile-first approach
- **Performance**: Optimized builds with Turbopack
- **Type Safety**: Full TypeScript integration with strict mode

## 📋 MVP-001 Implementation

This MVP demonstrates the foundational setup for the Unified Claude WebUI platform:

- ✅ Next.js 14+ app with TypeScript
- ✅ Shows "Hello Claude UI" on home page
- ✅ Basic project structure for full-stack development
- ✅ GitHub repository with auto-deploy to Vercel
- ✅ Production-ready build configuration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/alessandroferra/unified-claude-ui.git
cd unified-claude-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript compiler check
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
├── lib/
│   ├── services/       # Business logic services
│   └── utils/          # Utility functions
└── types/              # TypeScript definitions
```

## 🚀 Deployment

### Automatic Deployment

This repository is configured for automatic deployment to Vercel:

1. Connect your GitHub repository to Vercel
2. Every push to `main` triggers a production deployment
3. Pull requests create preview deployments

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

## 🔧 Technology Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **Build Tool**: Turbopack (development), Webpack (production)
- **Linting**: ESLint with Next.js configuration

## 📋 Next Steps

This MVP serves as the foundation for implementing:

1. **Authentication System**: User registration and login
2. **Claude Integration**: AI chat interface with streaming
3. **File Management**: Code editor and file browser
4. **Git Integration**: Worktree management and version control
5. **Real-time Features**: WebSocket connections and collaboration

## 🐛 Issue Reporting

Found a bug or have a feature request? Please create an issue on the [GitHub repository](https://github.com/alessandroferra/unified-claude-ui/issues).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Part of the Unified Claude WebUI Project**  
Building the future of AI-assisted development.
