// Function to create a 16x16 grid of square divs
function createGrid() {
    const gridContainer = document.getElementById("grid-container");
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        gridContainer.appendChild(div);
    }
}

createGrid();