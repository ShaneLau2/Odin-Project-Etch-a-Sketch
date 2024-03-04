document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const gridSize = 16;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
});
document.querySelectorAll(".square").forEach(square => {
            square.addEventListener("mouseover", function() {
                square.style.backgroundColor = "blue";
            });
        }