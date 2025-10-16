import sqlalchemy as sa

from ..db.base import Base


class ActionLog(Base):
    __tablename__ = "action_logs"

    id = sa.Column(sa.Integer, primary_key=True)
    user_id = sa.Column(sa.Integer, sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    action_type = sa.Column(sa.String(32), nullable=False)
    metadata = sa.Column(sa.JSON, default=dict)
    points = sa.Column(sa.Integer, default=0)
    created_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now())
