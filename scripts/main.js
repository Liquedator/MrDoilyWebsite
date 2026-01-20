let revertTimer = null;
function copyToClipboard() {
    const email = "mrdoily.band@gmail.com";
    const img = document.getElementById("contactEmail");
    const src = document.getElementById("emailSource");

    if (revertTimer) {
        clearTimeout(revertTimer);
        revertTimer = null;
    }

    navigator.clipboard.writeText(email).then(() => {

        src.srcset = "../img/buttons/copied.webp";
        img.src = "../img/buttons/copied.png"
        revertTimer = setTimeout(() => {
            src.srcset = "../img/buttons/email.webp"
            img.src = "../img/buttons/email.png"
            revertTimer = null;
        }, 1500);
    });
}