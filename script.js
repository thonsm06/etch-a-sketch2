document.body.style.display = "flex";
document.body.style.justifyContent = "center";

let gridWidth = 16;
let gridHeight = 16;
const cellSize = 32;
const gap = 1;
const cellWidth = `${cellSize}px`;
const cellHeight = `${cellSize}px`;
const border = 2;
const borderWidth = `${border}px`;
const masterGrid = document.createElement("div");
masterGrid.style.display = "flex";
masterGrid.style.justifyContent = "space-between";
masterGrid.style.flexWrap = "wrap";
masterGrid.style.flexShrink = "0";
masterGrid.style.width = `${(gridWidth * cellSize) + (gap * (gridWidth - 1)) + (gridWidth * (border * 2))}px`;
masterGrid.style.height = `${(gridHeight * cellSize) + (gap * (gridHeight - 1)) + (gridHeight * (border * 2))}px`;
masterGrid.style.minWidth = masterGrid.style.maxWidth;
masterGrid.style.minHeight = masterGrid.style.maxHeight;
masterGrid.style.maxWidth = masterGrid.style.width;
masterGrid.style.maxHeight = masterGrid.style.height;

masterGrid.style.gap = `${gap}px`;
masterGrid.style.margin = "0, auto";
for (i = 0; i < gridWidth * gridHeight; i++){
    const div = document.createElement("div");
    div.style.width = cellWidth;
    div.style.height = cellHeight;
    div.style.backgroundColor = "lightgrey";
    div.style.border = `${borderWidth}, solid, darkgrey`;
    div.style.flexGrow = "0";
    div.style.flexShrink = "0";
    div.style.flexBasis = "auto";
    masterGrid.appendChild(div);
}


document.body.appendChild(masterGrid);

