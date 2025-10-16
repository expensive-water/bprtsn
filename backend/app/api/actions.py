from fastapi import APIRouter, Depends

from ..services.actions import ActionService
from ..dependencies import get_action_service

router = APIRouter()


@router.post("/impact-score")
async def calculate_impact_score(payload: dict, service: ActionService = Depends(get_action_service)) -> dict:
    score = await service.calculate_score(
        petitions=payload.get("petitions", 0),
        events=payload.get("events", 0),
        representatives=payload.get("representatives", 0)
    )
    return {"score": score.score, "breakdown": score.__dict__}


@router.get("/leaderboard")
async def action_leaderboard(service: ActionService = Depends(get_action_service)) -> dict:
    return {"items": await service.leaderboard()}
