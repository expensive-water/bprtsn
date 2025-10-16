from fastapi import APIRouter, Depends

from ..services.campaigns import CampaignService
from ..dependencies import get_campaign_service

router = APIRouter()


@router.get("/")
async def list_campaigns(service: CampaignService = Depends(get_campaign_service)) -> dict:
    campaigns = await service.list_campaigns()
    return {"items": [campaign.__dict__ for campaign in campaigns]}


@router.post("/")
async def create_campaign(request: dict, service: CampaignService = Depends(get_campaign_service)) -> dict:
    campaign = await service.create_campaign(request)
    return {"campaign": campaign.__dict__}
