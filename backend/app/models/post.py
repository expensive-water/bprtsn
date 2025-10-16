import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import JSONB

from ..db.base import Base


class Post(Base):
    __tablename__ = "posts"

    id = sa.Column(sa.Integer, primary_key=True)
    author_id = sa.Column(sa.Integer, sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    topic = sa.Column(sa.String(64), index=True, nullable=False)
    content_type = sa.Column(sa.String(32), nullable=False)
    title = sa.Column(sa.String(180))
    body = sa.Column(sa.Text)
    media_url = sa.Column(sa.String(512))
    poll_options = sa.Column(JSONB)
    civic_sources = sa.Column(JSONB)
    moderation_summary = sa.Column(sa.String(255))
    created_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now(), index=True)
    updated_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now())
