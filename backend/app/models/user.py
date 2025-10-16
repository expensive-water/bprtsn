import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import JSONB

from ..db.base import Base


class User(Base):
    __tablename__ = "users"

    id = sa.Column(sa.Integer, primary_key=True, index=True)
    external_id = sa.Column(sa.String(128), unique=True, nullable=False, index=True)
    email = sa.Column(sa.String(255), unique=True, nullable=False)
    display_name = sa.Column(sa.String(120), nullable=False)
    avatar_url = sa.Column(sa.String(512))
    is_private = sa.Column(sa.Boolean, default=False)
    stances = sa.Column(JSONB, default=list)
    badges = sa.Column(JSONB, default=list)
    created_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now())
    updated_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now())
