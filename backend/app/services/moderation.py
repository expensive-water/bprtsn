from __future__ import annotations

from dataclasses import dataclass


@dataclass
class ModerationResult:
    original: str
    rewritten: str
    escalated: bool


class ModerationService:
    """AI + human-in-the-loop safety pipeline."""

    async def rewrite(self, text: str) -> ModerationResult:
        softened = text.replace("hate", "disagree").replace("stupid", "misinformed")
        if softened == text:
            softened = f"{text} (remember: lead with respect)"
        return ModerationResult(original=text, rewritten=softened, escalated="dox" in text.lower())

    async def evaluate(self, text: str) -> ModerationResult:
        return await self.rewrite(text)
