from __future__ import annotations

import datetime as dt
from dataclasses import dataclass


@dataclass
class CampaignDTO:
    id: str
    name: str
    focus: str
    goals: list[str]
    events: list[dict]
    titles: list[str]


class CampaignService:
    async def list_campaigns(self) -> list[CampaignDTO]:
        now = dt.datetime.utcnow()
        return [
            CampaignDTO(
                id="mental-health",
                name="Mind Matters",
                focus="Mental health access",
                goals=["Host 3 peer-support circles", "Lobby school board for more counselors"],
                events=[
                    {
                        "title": "Wellness Week planning jam",
                        "scheduledFor": (now + dt.timedelta(days=5)).isoformat() + "Z",
                        "location": "Virtual"
                    }
                ],
                titles=["Campaign Organizer", "Peer Listener", "Ambassador"]
            )
        ]

    async def create_campaign(self, payload: dict) -> CampaignDTO:
        return CampaignDTO(
            id=payload.get("slug", "new"),
            name=payload["name"],
            focus=payload.get("focus", ""),
            goals=payload.get("goals", []),
            events=payload.get("events", []),
            titles=["Campaign Organizer"]
        )
