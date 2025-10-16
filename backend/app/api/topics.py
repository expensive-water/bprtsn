from fastapi import APIRouter, Depends, HTTPException

from ..services.topics import TopicService, topic_catalog
from ..dependencies import get_topic_service

router = APIRouter()


@router.get("/")
async def list_topics(service: TopicService = Depends(get_topic_service)) -> dict:
    return {"topics": await service.list_topics()}


@router.get("/{topic}")
async def topic_detail(topic: str, service: TopicService = Depends(get_topic_service)) -> dict:
    if topic not in topic_catalog():
        raise HTTPException(status_code=404, detail="Topic not found")
    summary = await service.get_topic_summary(topic)
    return {
        "topic": summary.topic,
        "factCheck": summary.fact_check,
        "trendingPosts": summary.trending_posts
    }
