# Partisan (prtsn.)

Partisan is a civic social platform designed for American teens to learn, debate, and take action together. This repository contains a React web client, an Expo-ready mobile client scaffold, and a FastAPI backend that integrates with civic data providers.

## Architecture overview

```
├── frontend/        # React + Vite web application
├── mobile/          # React Native Expo scaffold for mobile delivery
├── backend/         # FastAPI service with PostgreSQL & Firebase hooks
└── infrastructure/  # Deployment and scaling notes
```

### Frontend (web)
- Minimalist blue + white aesthetic anchored by accent color `#1a35b8`.
- Topic-organised feed with fact-check strips, polls, videos, and takes.
- Civic Debate Mode UI with three-round structure and empathy-based voting.
- Campaign hub with Action Tracker, Impact Score, and Politics IRL map preview.
- Profile area featuring My Stance Card, privacy controls, badges, and streaks.

### Backend (FastAPI)
- OAuth stubs for Google and Apple sign-in.
- Topic summaries with AI-assisted moderation rewrites.
- Debate, campaign, and action tracking services.
- Civic event aggregation service ready for Google Civic + Eventbrite integration.
- PostgreSQL models for users, posts, debates, campaigns, and action logs.

### Mobile scaffold
- See [`mobile/README.md`](mobile/README.md) for Expo start instructions and parity plan with the web client.

## Getting started

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL 14+

### Install & run (web)
```bash
cd frontend
npm install
npm run dev
```

### Install & run (backend)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e .
uvicorn app.main:app --reload
```

### Environment configuration
Create a `.env` file in `backend/` with provider credentials as needed:
```
PRTSN_DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/prtsn
PRTSN_GOOGLE_CLIENT_ID=...
PRTSN_APPLE_CLIENT_ID=...
PRTSN_GOOGLE_CIVIC_API_KEY=...
PRTSN_EVENTBRITE_TOKEN=...
```

## Safety & moderation
- **AI-assisted rewrites** tame hostile language before publication.
- **Human escalation** triggers when potential doxxing or severe content is detected.
- **Tiered filters** planned for sensitive themes (genocide, trafficking) to ensure age-appropriate visibility.

## Scaling considerations
- Designed for 2.5M year-one users with stateless FastAPI workers behind an autoscaling gateway.
- PostgreSQL primary + read replicas for feed + analytics workloads.
- Firebase (or Redis) recommended for session management and real-time presence.
- Static assets served via CDN, with Vite build output configured for edge caching.

## Testing
- Web client uses Vite + React Testing Library (add tests under `frontend/src/__tests__`).
- Backend prepared for pytest + pytest-asyncio.

## Mission reminder
> Two Parties. One Country. Empowering Gen Z to build political literacy, empathy, and action.
