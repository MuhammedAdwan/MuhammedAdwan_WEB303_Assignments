document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("registrationForm");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let password2Input = document.getElementById("password2");
    let termsCheckbox = document.getElementById("terms");
    let countrySelect = document.getElementById("country");
    let submitButton = document.getElementById("submit");
    let welcomeMessage = document.getElementById("welcomeMessage");
    let passwordMatchMessage = document.getElementById("passwordMatchMessage");

    // this code will populate the countries in countries.js
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select your country";
    countrySelect.appendChild(defaultOption);

    countries.forEach(function (country) {
        const option = document.createElement("option");
        option.value = country.code;
        option.text = country.name;
        countrySelect.appendChild(option);
    });

    // Event listeners for form controls
    usernameInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
    password2Input.addEventListener("input", validateForm);
    termsCheckbox.addEventListener("change", validateForm);
    countrySelect.addEventListener("change", validateForm);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Display welcome message with the country code
        var selectedCountryCode = countrySelect.value;
        welcomeMessage.innerText = `Welcome ${usernameInput.value}! The country code you selected is ${selectedCountryCode}.`;
        welcomeMessage.style.display = "block";
    });

    // Function to validate the form and enable/disable the submit button
    function validateForm() {
        let isUsernameValid = usernameInput.value.trim() !== "";
        let isPasswordValid = passwordInput.value.length >= 12;
        let isPasswordMatch = passwordInput.value === password2Input.value;
        let isTermsChecked = termsCheckbox.checked;
        let isCountrySelected = countrySelect.value !== "";

        submitButton.disabled = !(isUsernameValid && isPasswordValid && isPasswordMatch && isTermsChecked && isCountrySelected);

        // Display password match message
        if (!isPasswordMatch) {
            passwordMatchMessage.innerText = "Passwords do not match!";
        } else {
            passwordMatchMessage.innerText = "";
        }
    }
});
