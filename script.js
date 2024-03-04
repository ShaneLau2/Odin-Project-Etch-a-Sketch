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
    button.classList.add("button");
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
            square.style.width = `calc(100% / ${size})`;
            square.style.height = `calc(100% / ${size})`;
            container.appendChild(square);
            //     square.addEventListener("mouseover", function() {
            //         let hsl;
            //         if (!square.dataset.color) {
            //             // Generate a random RGB color
            //             const r = Math.floor(Math.random() * 256);
            //             const g = Math.floor(Math.random() * 256);
            //             const b = Math.floor(Math.random() * 256);
            //             square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            //             // Convert RGB to HSL
            //             let r1 = r / 255,
            //                 g1 = g / 255,
            //                 b1 = b / 255;
            //             let maxColor = Math.max(r1, g1, b1),
            //                 minColor = Math.min(r1, g1, b1);
            //             let h,
            //                 s,
            //                 l = (maxColor + minColor) / 2;
            //             if (maxColor == minColor) h = s = 0; // achromatic
            //             else {
            //                 let d = maxColor - minColor;
            //                 s =
            //                     l > 0.5 ?
            //                     d / (2 - maxColor - minColor) :
            //                     d / (maxColor + minColor);
            //                 switch (maxColor) {
            //                     case r1:
            //                         h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
            //                         break;
            //                     case g1:
            //                         h = (b1 - r1) / d + 2;
            //                         break;
            //                     case b1:
            //                         h = (r1 - g1) / d + 4;
            //                         break;
            //                 }
            //                 h /= 6;
            //             }
            //             square.dataset.color = [h, s, l]; // Store the HSL values
            //         } else {
            //             // Retrieve the HSL values
            //             hsl = square.dataset.color.split(",");
            //         }

            //         // Decrease lightness by 10%
            //         hsl[2] = Math.max(parseFloat(hsl[2]) - 0.1, 0);

            //         // Apply the new color
            //         square.style.backgroundColor = `hsl(${hsl[0] * 360}, ${
            //   hsl[1] * 100
            // }%, ${hsl[2] * 100}%)`;
            //         square.dataset.color = hsl; // Store the updated HSL values
            //     });
            square.addEventListener("mouseover", function() {
                let rgba;
                if (!square.dataset.color) {
                    // Generate a random RGB color
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;

                    // Store the RGBA values
                    square.dataset.color = [r, g, b, 0.1];
                } else {
                    // Retrieve the RGBA values
                    rgba = square.dataset.color.split(",");
                    // Increase opacity by 10%
                    rgba[3] = Math.min(parseFloat(rgba[3]) + 0.1, 1);

                    // Apply the new color
                    square.style.backgroundColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
                    square.dataset.color = rgba; // Store the updated RGBA values
                }
            });
        }
    }

    createGrid(gridSize);
});