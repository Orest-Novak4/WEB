function showTeamInfo(teamName, teamDisplayName, teamImage, teamDescription) {
    document.getElementById("teamModal").style.display = "flex";

    document.getElementById("teamName").textContent = teamDisplayName;
    document.getElementById("teamImage").src = teamImage;
    document.getElementById("teamInfo").textContent = teamDescription;
}

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("teamModal").style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === document.getElementById("teamModal")) {
        document.getElementById("teamModal").style.display = "none";
    }
});
