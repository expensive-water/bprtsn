from functools import lru_cache
from typing import Any

from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    environment: str = Field("development", env="PRTSN_ENV")
    database_url: str = Field(
        "postgresql+asyncpg://prtsn:prtsn@localhost:5432/prtsn", env="PRTSN_DATABASE_URL"
    )
    firebase_credentials_path: str | None = Field(default=None, env="PRTSN_FIREBASE_CREDENTIALS")
    google_civic_api_key: str | None = Field(default=None, env="PRTSN_GOOGLE_CIVIC_API_KEY")
    eventbrite_token: str | None = Field(default=None, env="PRTSN_EVENTBRITE_TOKEN")
    cors_allowed_origins: list[str] = Field(default_factory=lambda: ["http://localhost:5173"])
    apple_client_id: str | None = Field(default=None, env="PRTSN_APPLE_CLIENT_ID")
    google_client_id: str | None = Field(default=None, env="PRTSN_GOOGLE_CLIENT_ID")

    class Config:
        env_file = ".env"


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
