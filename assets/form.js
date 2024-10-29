//Wait for the document to load before running formSubmission
document.addEventListener("DOMContentLoaded", formSubmission);

//Set up the event listener that checks for the form being submitted
function formSubmission() {
    //Select the contact form by its id and store it to a const variable
    const form = document.getElementById("contact-form")

    //Add an event listener to check for form submission and execute collectFormData once it has been pressed
    form.addEventListener("submit", collectFormData)
}

function collectFormData(event) {
    //Prevent the form from actually submitting
    event.preventDefault();

    //Collect the form data for each element
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNum = document.getElementById("phoneNum").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || '';
    const reason = document.getElementById("reason").value;
    const referral = document.getElementById("referral").value;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;

    //Store all of the collected data within a const variable
    const formData = {
        name: name,
        email: email,
        phoneNum: phoneNum,
        contactMethod: contactMethod,
        reason: reason,
        referral: referral,
        message: message,
        consent: consent
    };

    //Save the formData var to the local storage as a JSON string
    localStorage.setItem("contactFormData", JSON.stringify(formData))

    //Alert the user that the form data has been submitted
    alert("Your responses have been submitted!")

    //Access the stored data and relay it to the console to ensure everything has been submitted correctly
    const storedData = JSON.parse(localStorage.getItem("contactFormData"));
    console.log(storedData)
}