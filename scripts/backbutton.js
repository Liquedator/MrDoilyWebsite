document.getElementById("goBackButton").addEventListener("click", () => {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.replace("/index.html");
    }
});