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

var closeIconOne = document.getElementById("box-one");
    closeIconOne.setAttribute("id", "box-1");

var closeIconTwo = document.getElementById("box-two");
    closeIconTwo.setAttribute("id", "box-2");

var closeIconThree = document.getElementById("box-three");
    closeIconThree.setAttribute("id", "box-3");

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

        var newCloseIcon = closeIconThree.cloneNode(true);
        newCloseIcon.setAttribute("id", "box-"+index);
        newCloseIcon.setAttribute("onclick", "deleteNewBox()");
        newDiv.appendChild(newCloseIcon);
        newDiv.setAttribute("style", "margin: 5px 2px;");
        
        // for deleting new boxes
        newCloseIcon.addEventListener("click", function deleteNewBox() {
            if (newDiv.id == newCloseIcon.id) {
                newDiv.parentNode.removeChild(newDiv);
            }
        });
        
    }
}


// for removing boxes
function deleteBoxOne () {
    if (boxOne.id == closeIconOne.id) {
        boxOne.parentNode.removeChild(boxOne);
    }
}

function deleteBoxTwo () {
    if (boxTwo.id == closeIconTwo.id) {
        boxTwo.parentNode.removeChild(boxTwo);
    } 
}

function deleteBoxThree () {
    if (boxThree.id == closeIconThree.id) {
        boxThree.parentNode.removeChild(boxThree);
    } 
}