from __future__ import annotations

from dataclasses import dataclass

from ..services.moderation import ModerationService


def topic_catalog() -> list[str]:
    return ["Climate", "Education", "Economy", "Health", "Free Speech"]


@dataclass
class TopicSummary:
    topic: str
    fact_check: dict[str, str]
    trending_posts: list[dict]


class TopicService:
    def __init__(self, moderation_service: ModerationService) -> None:
        self._moderation = moderation_service

    async def list_topics(self) -> list[str]:
        return topic_catalog()

    async def get_topic_summary(self, topic: str) -> TopicSummary:
        posts = [
            {
                "id": "demo-post",
                "title": "Students across states collaborate on bipartisan climate bill",
                "contentType": "essay",
                "author": "Skye",
                "moderation": await self._moderation.rewrite("Let's keep this debate solutions-first!"),
            }
        ]
        fact_check = {
            "topic": topic,
            "summary": "Multiple nonpartisan think tanks confirm shared facts for this conversation.",
            "sources": ["Congressional Research Service", "Pew Research Center"]
        }
        return TopicSummary(topic=topic, fact_check=fact_check, trending_posts=posts)
