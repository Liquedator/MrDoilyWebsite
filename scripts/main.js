function copyToClipboard() {
    const email = "mrdoily.band@gmail.com";
    navigator.clipboard.writeText(email);
    document.getElementById("contactEmail").src="../img/buttons/copied-pressed.png";
}