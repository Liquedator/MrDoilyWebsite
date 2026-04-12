function updateScrollDistance() {
    document.querySelectorAll('.posterCaption').forEach(container => {
        const span = container.querySelector('span');
        if (!span) return;

        const textWidth = span.scrollWidth - container.clientWidth + 15;
        span.style.setProperty('--text-width', `${Math.max(0, textWidth)}px`);
    });
}

updateScrollDistance();
window.addEventListener('resize', updateScrollDistance);