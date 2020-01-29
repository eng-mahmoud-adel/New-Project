var index = 3;

var boxOne = document.getElementById("box-one");
    boxOne.setAttribute("id", "box-1");

var boxTwo = document.getElementById("box-two");
    boxTwo.setAttribute("id", "box-2");

var boxThree = document.getElementById("box-three");
    boxThree.setAttribute("id", "box-3");

var input = document.getElementById("input");

var btn = document.getElementById("add");
var parent = document.getElementById("service-title");
var closeIcon = document.getElementById("close-icon");

// for adding new box
function addNewBox () {
    if (input.value == "") {
     return false;
    } else { 
        index++;
        var newDiv = document.createElement("div");
        var inputValue = document.createTextNode(input.value);
        parent.appendChild(newDiv);
        newDiv.appendChild(inputValue)
        newDiv.setAttribute("id", "box-"+index);
        newDiv.appendChild(closeIcon);
        newDiv.setAttribute("style", "margin: 5px 2px;");
    }
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