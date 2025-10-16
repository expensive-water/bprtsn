from fastapi import APIRouter, Depends

from ..services.civic import CivicDataService
from ..dependencies import get_civic_service

router = APIRouter()


@router.get("/events")
async def civic_events(latitude: float, longitude: float, service: CivicDataService = Depends(get_civic_service)) -> dict:
    events = await service.upcoming_events(latitude=latitude, longitude=longitude)
    return {"items": [event.__dict__ for event in events]}
