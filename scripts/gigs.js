function updateScrollDistance() {
    document.querySelectorAll('.posterCaption').forEach(container => {
        const span = container.querySelector('span');
        if (!span) return;

        span.getBoundingClientRect();
        const spanWidth = span.getBoundingClientRect().width;
        container.getBoundingClientRect();
        const containerWidth = container.getBoundingClientRect().width;

        const textWidth = spanWidth - containerWidth + 15;

        span.style.setProperty('--text-width', `${Math.max(0, textWidth)}px`);

        span.style.animation = 'none';
        span.offsetHeight;
        span.style.animation = '';
    });
}

updateScrollDistance();
window.addEventListener('resize', updateScrollDistance);