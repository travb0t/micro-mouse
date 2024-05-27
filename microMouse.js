


function initMaze() {

    let mazeGrid = document.getElementById("mazeGrid");

    for (let i = 0; i < 5; i++) {

        let Row = document.createElement("div");
        Row.className = "mazeRow";

        for (let j = 0; j< 5; j++) {

            // let rowNum = rowArray[i];
            // let columnNum = columnArray[j];

            let column = document.createElement("div");
            let cell = document.createElement("img");

            column.className = "mazeColumn";
            // cell.setAttribute("id", `${columnNum}${rowNum}`);
            cell.setAttribute("class", "empty");
            cell.setAttribute("width", "60px");
            cell.setAttribute("height", "60px");

            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    column.style.backgroundColor = "white";
                } else {
                    column.style.backgroundColor = "darkgray";
                }
            } else {
                if (j % 2 == 0) {
                    column.style.backgroundColor = "darkgray";
                } else {
                    column.style.backgroundColor = "white";
                }
            }

            column.appendChild(cell);
            Row.appendChild(column);
        }

        mazeGrid.appendChild(Row);

    }

}

initMaze();