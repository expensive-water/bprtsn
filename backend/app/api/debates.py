from fastapi import APIRouter, Depends

from ..services.debates import DebateService
from ..dependencies import get_debate_service

router = APIRouter()


@router.get("/")
async def list_debates(service: DebateService = Depends(get_debate_service)) -> dict:
    debates = await service.list_debates()
    return {"items": [debate.__dict__ for debate in debates], "rounds": await service.rounds()}


@router.post("/")
async def create_debate(request: dict, service: DebateService = Depends(get_debate_service)) -> dict:
    debate = await service.create_request(topic=request["topic"], prompt=request["prompt"], host=request["host"])
    return {"debate": debate.__dict__}
