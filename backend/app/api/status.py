from fastapi import APIRouter, Depends

from ..services.status import StatusService
from ..dependencies import get_status_service

router = APIRouter()


@router.get("/updates")
async def get_updates(service: StatusService = Depends(get_status_service)) -> dict:
    """Return civic wins ticker for the live updates rail."""
    return {"items": await service.get_recent_updates()}
