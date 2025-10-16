import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import JSONB

from ..db.base import Base


class Campaign(Base):
    __tablename__ = "campaigns"

    id = sa.Column(sa.Integer, primary_key=True)
    slug = sa.Column(sa.String(80), unique=True, nullable=False)
    name = sa.Column(sa.String(120), nullable=False)
    focus = sa.Column(sa.String(160), nullable=False)
    goals = sa.Column(JSONB, default=list)
    created_by = sa.Column(sa.Integer, sa.ForeignKey("users.id", ondelete="SET NULL"))
    impact_score = sa.Column(sa.Integer, default=0)
    created_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now())


class CampaignEvent(Base):
    __tablename__ = "campaign_events"

    id = sa.Column(sa.Integer, primary_key=True)
    campaign_id = sa.Column(sa.Integer, sa.ForeignKey("campaigns.id", ondelete="CASCADE"), nullable=False)
    title = sa.Column(sa.String(160), nullable=False)
    description = sa.Column(sa.Text)
    scheduled_for = sa.Column(sa.DateTime(timezone=True), nullable=False)
    location = sa.Column(sa.String(255))
    external_url = sa.Column(sa.String(255))
