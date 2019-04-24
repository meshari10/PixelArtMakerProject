function makeGrid(height, width) {
    const canvas = document.getElementById("pixelCanvas");
    var theGrid = [];
    // loops over row
    for (var i = 0; i < height; i++) {
        theGrid += '<tr class="row-' + i + '">';
        // loops over cells
        for (var k = 0; k < width; k++) {
            theGrid += '<td class="cell" id="row-' + i + '_cell-' + k + '"></td>';
        } theGrid += '</tr>';
    }
    // adds grid into canvas
    canvas.innerHTML = theGrid;
    // calls the function
    addClicks();
}


// gets height and width from form
function submitForm() {
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    event.preventDefault();
    makeGrid(height, width);
}

// add clicks to cells
function addClicks() {
    const pickColor = document.getElementById("colorPicker");
    const cell = document.getElementsByClassName('cell');
    for (var i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", function (event) {
            let cellClick = event.target;
            cellClick.style.backgroundColor = pickColor.value;
        });
    }
}

document.getElementById('sizePicker').onsubmit = function () {
    submitForm();
};
