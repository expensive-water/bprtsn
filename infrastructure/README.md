# Infrastructure notes

## Target scale
- 2.5M year-one users (~5% of 50M teen TAM)
- 341.7B global social media TAM reference

## Recommended stack
- **Frontend**: Static hosting via Vercel or Netlify with edge caching.
- **Backend**: FastAPI on AWS Fargate or Google Cloud Run with autoscaling.
- **Database**: Managed PostgreSQL (RDS/Aurora or Cloud SQL) + read replicas.
- **Realtime**: Firebase or Supabase for presence, notifications, and moderation queues.
- **AI moderation**: Serverless function invoking moderation model, writing escalations to a human review queue (e.g., Slack + Linear).

## Security & privacy
- Enforce COPPA-aligned parental consent where required.
- Data minimization with encrypted PII and hashed identifiers for leaderboards.
- Strict anti-doxxing detection with auto-redaction + manual escalation.

## Observability
- OpenTelemetry traces from FastAPI into Grafana Tempo.
- Structured moderation events into BigQuery for policy analytics.
- Synthetic monitoring for feed, debate, campaign, and action endpoints.
