function updateScrollDistance() {
    document.querySelectorAll('.posterCaption').forEach(container => {
        const span = container.querySelector('span');
        if (!span) return;

        span.getBoundingClientRect();
        const spanWidth = span.getBoundingClientRect().width;
        container.getBoundingClientRect();
        const containerWidth = container.getBoundingClientRect().width;
        const offset = containerWidth * 0.03;
        const textWidth = spanWidth - containerWidth + offset;

        span.style.setProperty('--offset', `${Math.max(0, offset)}px`);
        span.style.setProperty('--text-width', `${Math.max(0, textWidth)}px`);

        span.style.animation = 'none';
        span.offsetHeight;
        span.style.animation = '';
    });
}

updateScrollDistance();
window.addEventListener('resize', updateScrollDistance);