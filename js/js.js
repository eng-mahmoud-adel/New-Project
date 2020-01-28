let index = 3;

let boxOne = document.getElementById("box-one");
    boxOne.setAttribute("id", "box-1");

let boxTwo = document.getElementById("box-two");
    boxTwo.setAttribute("id", "box-2");

let boxThree = document.getElementById("box-three");
    boxThree.setAttribute("id", "box-3");

// for adding new box
function addNewBox () {
    index++;
    let cloneBox = boxTwo.cloneNode(true);
        cloneBox.setAttribute("id", "box-"+index);

        cloneBox.setAttribute("style", "margin: 5px 2px;");
        
    
    let parent = document.getElementById("service-title");
        parent.appendChild(cloneBox);
}

// for removing boxes
function deleteBoxOne () {
    boxOne.parentNode.removeChild(boxOne);
}

function deleteBoxTwo () {
    boxTwo.parentNode.removeChild(boxTwo);
}

function deleteBoxThree () {
    boxThree.parentNode.removeChild(boxThree);
}