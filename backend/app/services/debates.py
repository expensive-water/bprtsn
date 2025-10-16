from __future__ import annotations

from dataclasses import dataclass
from typing import Sequence

from .moderation import ModerationService

ROUND_SEQUENCE: Sequence[str] = ("Opening", "Rebuttal", "Closing")


@dataclass
class DebateDTO:
    id: str
    topic: str
    prompt: str
    host: str
    status: str


class DebateService:
    def __init__(self, moderation_service: ModerationService) -> None:
        self._moderation = moderation_service

    async def list_debates(self) -> list[DebateDTO]:
        return [
            DebateDTO(
                id="debate-1",
                topic="Climate",
                prompt="What is the fairest path to pricing carbon?",
                host="Emilia · CA",
                status="open"
            )
        ]

    async def create_request(self, topic: str, prompt: str, host: str) -> DebateDTO:
        moderated_prompt = await self._moderation.rewrite(prompt)
        return DebateDTO(
            id="debate-new",
            topic=topic,
            prompt=moderated_prompt.rewritten,
            host=host,
            status="open"
        )

    async def rounds(self) -> list[str]:
        return list(ROUND_SEQUENCE)
