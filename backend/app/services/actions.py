from __future__ import annotations

from dataclasses import dataclass

ACTION_POINTS = {
    "petition": 5,
    "event": 20,
    "representative": 15
}


@dataclass
class ImpactScore:
    petitions: int
    events: int
    representatives: int

    @property
    def score(self) -> int:
        return (
            self.petitions * ACTION_POINTS["petition"]
            + self.events * ACTION_POINTS["event"]
            + self.representatives * ACTION_POINTS["representative"]
        )


class ActionService:
    async def calculate_score(self, *, petitions: int, events: int, representatives: int) -> ImpactScore:
        return ImpactScore(petitions=petitions, events=events, representatives=representatives)

    async def leaderboard(self) -> list[dict]:
        return [
            {"scope": "Jefferson High", "score": 420},
            {"scope": "Central Region", "score": 318},
            {"scope": "Illinois", "score": 290}
        ]
