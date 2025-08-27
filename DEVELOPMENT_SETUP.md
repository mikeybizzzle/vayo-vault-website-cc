# Vayo Vault - Development Environment Setup

## Prerequisites

### System Requirements
- **Node.js**: v18.17.0 or later (LTS recommended)
- **pnpm**: v8.0.0 or later (recommended over npm/yarn)
- **Git**: Latest version
- **Docker**: For local database and Redis
- **PostgreSQL**: v15+ (via Docker or local install)
- **Redis**: v7+ (via Docker or local install)

### Development Tools
- **VS Code**: Recommended IDE with extensions
- **GitHub CLI**: For seamless GitHub integration
- **Vercel CLI**: For local development and deployment
- **Stripe CLI**: For webhook testing

## Initial Project Setup

### 1. Repository Setup
```bash
# Clone the repository
git clone https://github.com/your-org/vayo-vault-cc.git
cd vayo-vault-cc

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local
```

### 2. Environment Configuration
```bash
# .env.local - Fill in your values
DATABASE_URL="postgresql://username:password@localhost:5432/vayovault_dev"
NEXTAUTH_SECRET="your-development-secret"
NEXTAUTH_URL="http://localhost:3000"

# Stripe Configuration
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Redis Configuration
REDIS_URL="redis://localhost:6379"

# Email Configuration (Resend)
RESEND_API_KEY="re_..."
FROM_EMAIL="noreply@vayovault.com"

# Upload Configuration
UPLOADTHING_SECRET="sk_live_..."
UPLOADTHING_APP_ID="your-app-id"

# Analytics
VERCEL_ANALYTICS_ID="your-analytics-id"
```

## Database Setup

### Docker Compose (Recommended)
```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: vayovault_dev
      POSTGRES_USER: developer
      POSTGRES_PASSWORD: dev_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Database Initialization
```bash
# Start services
docker-compose up -d

# Run database migrations
pnpm db:migrate

# Seed development data
pnpm db:seed

# Generate Prisma client
pnpm db:generate
```

### Manual Database Setup (Alternative)
```bash
# Install PostgreSQL locally (macOS)
brew install postgresql
brew services start postgresql

# Create database
createdb vayovault_dev

# Install Redis (macOS)
brew install redis
brew services start redis
```

## Package Scripts

### Development Commands
```json
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:seed": "prisma db seed",
    "db:studio": "prisma studio",
    "db:reset": "prisma migrate reset",
    
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    
    "analyze": "ANALYZE=true next build",
    "lighthouse": "lhci autorun",
    
    "prepare": "husky install"
  }
}
```

### Pre-commit Hooks Setup
```bash
# Install husky for git hooks
pnpm add -D husky lint-staged

# Initialize husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

## Development Workflow

### 1. Starting Development Server
```bash
# Start all services
docker-compose up -d

# Start Next.js development server
pnpm dev

# Open additional terminals for:
pnpm db:studio  # Database management UI
pnpm test       # Test watcher
```

### 2. Branch Workflow
```bash
# Create feature branch
git checkout -b feature/user-authentication

# Make changes and commit
git add .
git commit -m "feat: implement user authentication with NextAuth"

# Push and create PR
git push origin feature/user-authentication
gh pr create --title "feat: User Authentication" --body "Implements NextAuth.js authentication"
```

### 3. Code Quality Checks
```bash
# Run all quality checks
pnpm lint          # ESLint checks
pnpm type-check    # TypeScript validation
pnpm format:check  # Prettier formatting
pnpm test          # Unit tests
pnpm test:e2e      # End-to-end tests
```

## VS Code Configuration

### Recommended Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "prisma.prisma",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.eslint",
    "ms-playwright.playwright",
    "ms-vscode.vscode-json"
  ]
}
```

### Workspace Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Debug Configuration
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "pnpm dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

## Testing Setup

### Unit Testing (Vitest)
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### E2E Testing (Playwright)
```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'pnpm build && pnpm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

## Environment Management

### Development Environment
```bash
# Local development with hot reload
pnpm dev

# Access points
http://localhost:3000          # Main application
http://localhost:5555          # Prisma Studio
http://localhost:4040          # Lighthouse CI (when running)
```

### Staging Environment
```bash
# Deploy to staging branch
git push origin staging

# Automatic deployment to staging.vayovault.com
# Run staging tests
pnpm test:e2e --config=staging
```

### Production Deployment
```bash
# Deploy to main branch
git push origin main

# Monitor deployment
vercel --prod --confirm

# Run production health checks
pnpm health-check:prod
```

## Performance Monitoring

### Local Performance Auditing
```bash
# Bundle analysis
pnpm analyze

# Lighthouse CI
pnpm lighthouse

# Core Web Vitals monitoring
pnpm dev:metrics
```

### Build Optimization
```bash
# Check bundle size
pnpm build
pnpm start

# Analyze bundle composition
ANALYZE=true pnpm build

# Performance profiling
NODE_ENV=production pnpm build --profile
```

## Troubleshooting

### Common Issues

#### Database Connection Issues
```bash
# Check Docker containers
docker-compose ps

# Restart database
docker-compose restart postgres

# Reset database
pnpm db:reset
```

#### Node Modules Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Clear Next.js cache
rm -rf .next
pnpm build
```

#### Port Conflicts
```bash
# Check port usage
lsof -ti:3000
kill -9 $(lsof -ti:3000)

# Use different port
pnpm dev -- -p 3001
```

### Development Best Practices

#### Code Organization
- Follow Next.js App Router conventions
- Use TypeScript strict mode
- Implement proper error boundaries
- Follow accessibility guidelines (WCAG 2.1 AA)

#### Performance Guidelines
- Optimize images with Next.js Image component
- Use dynamic imports for code splitting
- Implement proper caching strategies
- Monitor bundle size with each PR

#### Security Practices
- Never commit secrets to repository
- Use environment variables for configuration
- Implement proper input validation
- Follow OWASP security guidelines

## Team Collaboration

### Code Review Process
1. Create feature branch from main
2. Implement changes with tests
3. Run all quality checks locally
4. Create pull request with description
5. Address review feedback
6. Merge after approval and CI passes

### Development Conventions
- Use conventional commit messages
- Write comprehensive PR descriptions
- Include tests for new features
- Update documentation for API changes
- Follow TypeScript strict guidelines

This development setup ensures a consistent, efficient, and collaborative development environment for the Vayo Vault team while maintaining high code quality and performance standards.