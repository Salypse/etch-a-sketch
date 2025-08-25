//Starts pages on default size of a 16x16 grid
makeGrid(16)

function makeGrid(size) {
    const body = document.body

    let newContainer = document.createElement("div")
    newContainer.className = "container";
    body.appendChild(newContainer)

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.className = "row"
        newContainer.appendChild(row)
        for (let j = 0; j < size; j++){
            const node = document.createElement("div")
            node.className = "node"
            row.appendChild(node)
        }
    }
    updateNodeListeners()
}

//changes the color of node cursor is on
function updateNodeListeners() {
    let nodes = document.querySelectorAll(".node")
    nodes.forEach((node) => {
        node.addEventListener("mouseover", () => {
            node.style.backgroundColor = "black";
        })
    })
}


//When change size button pressed prompt user for new size
const sizeButton = document.querySelector(".size-button")
sizeButton.addEventListener("click", function(e) {
    const container = document.querySelector(".container")
    container.remove()

    let size;
    
    while (true) {
        size = parseInt(prompt("Please choose a size for the grid"));
        if (isNaN(size) || !Number.isInteger(size) || size <= 0 || size > 100) {
            alert("Please enter a number between 1 and 100");
        }
        else {
            break;
        }
    }
    makeGrid(size)
});