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

async function populatePosters() {
    const response = await fetch("./gigposters.json");
    const jsonData = await response.json();

    const upcomingContainer = document.getElementById("upcomingGigsContainer");
    const pastContainer = document.getElementById("pastGigsContainer");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (const poster of jsonData) {
        const gigDate = new Date(poster.date + "T00:00:00");

        const gigItem = poster.external
            ? document.createElement("a")
            : document.createElement("div");

        gigItem.classList.add("gigItem");

        if (poster.external) {
            gigItem.href = poster.externalLink;
            gigItem.target = "_blank";
            gigItem.rel = "noopener noreferrer";
        }

        const picture = document.createElement("picture");

        const source = document.createElement("source");
        source.type = "image/webp";
        source.srcset = poster.imgLink + ".webp";

        const img = document.createElement("img");
        img.src = poster.imgLink + "." + (poster.fallbackExt ?? "png");
        img.alt = poster.alt;
        img.id = poster.id;
        img.classList.add("gigsPoster");

        if (poster.external) {
            img.classList.add("externalLink");
        }

        if (poster.headliner) {
            img.classList.add("headliner");
        }

        picture.appendChild(source);
        picture.appendChild(img);
        gigItem.appendChild(picture);

        if (gigDate >= today) {
            upcomingContainer.prepend(gigItem);
            const caption = document.createElement("div");
            caption.classList.add("posterCaption");

            const span = document.createElement("span");
            span.textContent = poster.caption;

            caption.appendChild(span);
            gigItem.appendChild(caption);
        } else {
            pastContainer.appendChild(gigItem);
        }
    }
}

populatePosters();

updateScrollDistance();
window.addEventListener('resize', updateScrollDistance);