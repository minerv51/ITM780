//Gets the nameButton element and activates the promptName function once it has been clicked
document.getElementById('nameButton').addEventListener('click', promptName);

//Define the function that prompts the user for their name
function promptName() {
    //Prompt the user for their name
    let userName = prompt('Please enter your name: ')

    //Check if they have entered a name
    if (userName) {
        //If so, greet them by their name
        document.getElementById('nameButton').textContent = `Hello ${userName}!`
    } else {
        //If not, let them know no name was entered
        document.getElementById('nameButton').textContent = 'No name was entered!'
    }
}

//Gets the clickableImg element as Image
const image = document.getElementById('clickableImg')

//Add an event listener to the function enlargeImg to enlarge the image when clicked
image.addEventListener('click', enlargeImg)

//Define the function that enlarges the image once it has been clicked
function enlargeImg() {
    image.classList.toggle('enlarged');
}

//Function for dropping down the first dropdown menu
function dropFunc1() {
    document.getElementById("dropdown-1").classList.toggle("show");
    }

//Function for dropping down the second dropdown menu
function dropFunc2() {
    document.getElementById("dropdown-2").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = raiseFunc()

function raiseFunc(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}

//Highlight an element (works with onmouseover to highlight elements that are being hovered)
function highlight(element) {
    element.style.backgroundColor = "#a3c2ff"
}

//Resets an element (works with onmouseout to reset elements that are no longer being hovered)
function resetItem(element) {
    element.style.backgroundColor = ""
}


//Function to get the form data and relay the password back to the user once the submit button is clicked
function relayPassword() {
    //Get the var for the username and password
    var username = document.getElementById("username")
    var password = document.getElementById("password").value;
    //Relay the password back to the user
    alert(`Your password is ${password}`)
}