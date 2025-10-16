from __future__ import annotations

import datetime as dt
from dataclasses import dataclass
from typing import Iterable


@dataclass
class CivicEvent:
    id: str
    name: str
    starts_at: str
    source: str
    location: str
    url: str


class CivicDataService:
    """Integrates Google Civic and Eventbrite APIs."""

    def __init__(self, google_client, eventbrite_client) -> None:
        self._google = google_client
        self._eventbrite = eventbrite_client

    async def upcoming_events(self, *, latitude: float, longitude: float) -> list[CivicEvent]:
        # Placeholder data. In production we would call both APIs asynchronously.
        base_time = dt.datetime.utcnow() + dt.timedelta(days=3)
        events: Iterable[CivicEvent] = [
            CivicEvent(
                id="civic-1",
                name="Local voter registration drive",
                starts_at=(base_time).isoformat() + "Z",
                source="google_civic",
                location="City Hall",
                url="https://www.vote.org/"
            ),
            CivicEvent(
                id="eventbrite-1",
                name="Bipartisan climate rally",
                starts_at=(base_time + dt.timedelta(days=2)).isoformat() + "Z",
                source="eventbrite",
                location="Riverfront Park",
                url="https://www.eventbrite.com/"
            )
        ]
        return list(events)
