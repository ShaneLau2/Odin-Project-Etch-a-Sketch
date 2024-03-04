// document.addEventListener("DOMContentLoaded", function() {
//     const container = document.getElementById("container");
//     const gridSize = 16;

//     for (let i = 0; i < gridSize; i++) {
//         for (let j = 0; j < gridSize; j++) {
//             const square = document.createElement("div");
//             square.classList.add("square");
//             container.appendChild(square);
//             square.addEventListener("mouseover", function() {
//                 square.style.backgroundColor = "gray";
//             });
//         }
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    let gridSize = 16;

    const button = document.createElement("button");
    button.textContent = "Change Grid Size";
    button.classList.add("center-button"); // Add CSS class for centering
    document.body.insertBefore(button, container);

    button.addEventListener("click", function() {
        let newSize = prompt(
            "Enter the number of squares per side for the new grid (max 100):"
        );

        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Invalid input. Please enter a number between 1 and 100.");
            return;
        }

        // Remove existing grid
        // while (container.firstChild) {
        //     container.removeChild(container.firstChild);
        // }
        document.querySelectorAll(".square").forEach((square) => {
            square.remove();
        });

        // Create new grid
        gridSize = newSize;
        createGrid(gridSize);
    });

    function createGrid(size) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            // square.style.width = `calc(100% / ${size})`;
            // square.style.height = `calc(100% / ${size})`;
            container.appendChild(square);
            square.addEventListener("mouseover", function() {
                square.style.backgroundColor = "gray";
            });
        }
    }

    createGrid(gridSize);
});