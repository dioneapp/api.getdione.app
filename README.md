# Dione Public API

A high-performance API service for the Dione platform, built with Hono.js and deployed on Cloudflare Workers.

## Features

- Lightning-fast API responses
- RESTful design
- Built with TypeScript
- Integrated with Supabase
- Pagination and filtering support

## Getting Started

### Prerequisites

- Node.js 18+
- NPM
- Cloudflare Wrangler CLI
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.dev.vars`, copy `.env.example` to `.dev.vars`

### Development

```bash
npm run dev
```

### Deployment

```bash
npm run deploy
```

## API Documentation

### Base URL
```
https://api.getdione.app
```

### Endpoints

#### GET /v1/scripts

Retrieve scripts with filtering and pagination.

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `tags`: Filter by tags (comma-separated)
- `q`: Search by name (string)
- `id`: Search by ID (UUID)
- `order_type`: Sort order (asc/desc)
- `order`: Field to order by (default: created_at)
- `featured`: Filter by featured scripts (true/false)

**Examples:**

```bash
curl 'https://api.getdione.app/v1/scripts?q=applio'
```

```bash
curl 'https://api.getdione.app/v1/scripts?id=08975e39-9e84-4027-8c4f-0130c89c7425'
```

```bash
curl 'https://api.getdione.app/v1/scripts?page=1&limit=10&tags=audio&featured=true&order_type=desc&order=created_at'
```

#### GET /status

Check API status.

**Response:**
```json
{
  "status": "ok",
  "latency": "45ms",
  "timestamp": "2025-01-01T00:00:00Z"
}
```

## Environment Variables

- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_ANON_KEY`: Supabase anonymous key

## License

MIT