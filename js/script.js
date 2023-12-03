document.addEventListener("DOMContentLoaded", function () {
    // Create form and elements
    let form = document.createElement("form");
    form.id = "registrationForm";

    let usernameLabel = createLabel("Enter Username:");
    let usernameInput = createInput("text", "username", true);

    let passwordLabel = createLabel("Enter Password (at least 12 characters):");
    let passwordInput = createInput("password", "password", false);

    let password2Label = createLabel("Confirm your Password:");
    let password2Input = createInput("password", "password2", false);
    let passwordMatchMessage = document.createElement("span");
    passwordMatchMessage.id = "passwordMatchMessage";

    let termsLabel = createLabel("I accept the terms of service:");
    let termsInput = createInput("checkbox", "terms", false, "yes");

    let countryLabel = createLabel("Select your country:");
    let countrySelect = document.createElement("select");
    countrySelect.id = "country";
    countrySelect.name = "country";
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

    let submitButton = createInput("submit", "submit", true, "Submit");
    submitButton.disabled = true;

    let welcomeMessage = document.createElement("p");
    welcomeMessage.id = "welcomeMessage";
    welcomeMessage.style.display = "none";

    // Append elements to the form
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(password2Label);
    form.appendChild(password2Input);
    form.appendChild(passwordMatchMessage);
    form.appendChild(termsLabel);
    form.appendChild(termsInput);
    form.appendChild(countryLabel);
    form.appendChild(countrySelect);
    form.appendChild(submitButton);
    form.appendChild(welcomeMessage);

    // Append form to the body
    document.body.appendChild(form);

    // Event listeners for form controls
    usernameInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
    password2Input.addEventListener("input", validateForm);
    termsInput.addEventListener("change", validateForm);
    countrySelect.addEventListener("change", validateForm);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Display welcome message with the country code
        var selectedCountryCode = countrySelect.value;
        welcomeMessage.innerText = `Welcome ${usernameInput.value}! The country code you selected is ${selectedCountryCode}.`;
        welcomeMessage.style.display = "block";

    });

    // Function to create label
    function createLabel(text) {
        let label = document.createElement("label");
        label.htmlFor = text.toLowerCase().replace(/\s/g, "");
        label.innerText = text;
        return label;
    }

    // Function to create input element
    function createInput(type, id, required, value) {
        let input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.name = id;
        if (required) {
            input.required = true;
        }
        if (value) {
            input.value = value;
        }
        return input;
    }

    // Function to validate the form and enable/disable the submit button
    function validateForm() {
        let isUsernameValid = usernameInput.value.trim() !== "";
        let isPasswordValid = passwordInput.value.length >= 12;
        let isPasswordMatch = passwordInput.value === password2Input.value;
        let isTermsChecked = termsInput.checked;
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
