import sqlalchemy as sa

from ..db.base import Base


class Debate(Base):
    __tablename__ = "debates"

    id = sa.Column(sa.Integer, primary_key=True)
    topic = sa.Column(sa.String(64), nullable=False, index=True)
    prompt = sa.Column(sa.String(240), nullable=False)
    host_id = sa.Column(sa.Integer, sa.ForeignKey("users.id", ondelete="SET NULL"))
    challenger_id = sa.Column(sa.Integer, sa.ForeignKey("users.id", ondelete="SET NULL"))
    status = sa.Column(sa.String(24), default="open")
    created_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now())


class DebateRound(Base):
    __tablename__ = "debate_rounds"

    id = sa.Column(sa.Integer, primary_key=True)
    debate_id = sa.Column(sa.Integer, sa.ForeignKey("debates.id", ondelete="CASCADE"), nullable=False)
    round_type = sa.Column(sa.String(24), nullable=False)
    speaker_id = sa.Column(sa.Integer, sa.ForeignKey("users.id", ondelete="SET NULL"))
    content = sa.Column(sa.Text, nullable=False)
    clarity_votes = sa.Column(sa.Integer, default=0)
    civility_votes = sa.Column(sa.Integer, default=0)
    created_at = sa.Column(sa.DateTime(timezone=True), server_default=sa.func.now())
