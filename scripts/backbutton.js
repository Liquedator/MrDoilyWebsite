document.getElementById("goBackButton").addEventListener("click", () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.replace("/index.html");
    }
});