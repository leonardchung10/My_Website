function toggleOther() {
    const relation = document.getElementById("relation").value;
    const otherGroup = document.getElementById("other-group");
    if (relation === "other") {
        otherGroup.style.display = "block";
    } else {
        otherGroup.style.display = "none";
    }
}

