function testRow(size) {
    const container = document.querySelector(".container")

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.className = "row"
        container.appendChild(row)
        for (let j = 0; j < size; j++){
            const node = document.createElement("div")
            node.className = "node"
            row.appendChild(node)
        }
    }
}

testRow(16)


//changes the color of node cursor is on
const nodes = document.querySelectorAll(".node")

nodes.forEach((node) => {
    node.addEventListener("mouseover", () => {
        node.style.backgroundColor = "black"
    })
})