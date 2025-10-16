from fastapi import APIRouter

from . import topics, debates, campaigns, actions, auth, status, civic

router = APIRouter()

router.include_router(auth.router, prefix="/auth", tags=["auth"])
router.include_router(topics.router, prefix="/topics", tags=["topics"])
router.include_router(debates.router, prefix="/debates", tags=["debates"])
router.include_router(campaigns.router, prefix="/campaigns", tags=["campaigns"])
router.include_router(actions.router, prefix="/actions", tags=["actions"])
router.include_router(status.router, prefix="/status", tags=["status"])
router.include_router(civic.router, prefix="/civic", tags=["civic"])
