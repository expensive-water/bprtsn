from collections.abc import AsyncGenerator

from .services.status import StatusService
from .services.campaigns import CampaignService
from .services.debates import DebateService
from .services.actions import ActionService
from .services.topics import TopicService
from .services.moderation import ModerationService


async def get_status_service() -> StatusService:
    return StatusService()


def get_campaign_service() -> CampaignService:
    return CampaignService()


def get_debate_service() -> DebateService:
    return DebateService(moderation_service=ModerationService())


def get_action_service() -> ActionService:
    return ActionService()


def get_topic_service() -> TopicService:
    return TopicService(moderation_service=ModerationService())


def get_moderation_service() -> ModerationService:
    return ModerationService()

from .services.civic import CivicDataService


def get_civic_service() -> CivicDataService:
    return CivicDataService(google_client=None, eventbrite_client=None)
