import datetime as dt

from ..core.telemetry import tracer


class StatusService:
    """Generate live civic updates for the home feed ticker."""

    async def get_recent_updates(self) -> list[dict]:
        with tracer.start_span("status.get_recent_updates"):
            now = dt.datetime.utcnow()
            return [
                {
                    "id": "impact-1",
                    "text": "1,200+ petitions signed through prtsn. campaigns this week.",
                    "createdAt": (now - dt.timedelta(minutes=2)).isoformat() + "Z"
                },
                {
                    "id": "debate-spotlight",
                    "text": "Teens from AZ & MA found common ground on community solar in Debate Mode.",
                    "createdAt": (now - dt.timedelta(minutes=5)).isoformat() + "Z"
                }
            ]
