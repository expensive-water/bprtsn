from fastapi import APIRouter, HTTPException

router = APIRouter()


@router.get("/providers")
async def auth_providers() -> dict:
    return {"providers": ["google", "apple"]}


@router.post("/google")
async def google_auth(token: dict) -> dict:
    if "idToken" not in token:
        raise HTTPException(status_code=400, detail="Missing idToken")
    return {"status": "verified", "provider": "google"}


@router.post("/apple")
async def apple_auth(token: dict) -> dict:
    if "identityToken" not in token:
        raise HTTPException(status_code=400, detail="Missing identityToken")
    return {"status": "verified", "provider": "apple"}
