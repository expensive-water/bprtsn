from contextlib import contextmanager
from dataclasses import dataclass
from typing import Generator


@dataclass
class Span:
    name: str

    def __enter__(self) -> "Span":
        return self

    def __exit__(self, exc_type, exc, tb) -> None:
        return None


class TelemetryTracer:
    """Simple tracer placeholder for structured logging/instrumentation."""

    @contextmanager
    def start_span(self, name: str) -> Generator[Span, None, None]:
        span = Span(name=name)
        try:
            yield span
        finally:
            # In a production system this would emit metrics/logs
            pass


tracer = TelemetryTracer()
