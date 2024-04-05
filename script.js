function updateCardNumber(value) {
    // Trim any leading or trailing whitespace
    value = value.trim();

    // Limit the input to 16 characters
    if (value.length > 16) {
        value = value.slice(0, 16); // Truncate the input value
    }
    else if (value === '') {
        value = '0000 0000 0000 0000'
    }

    // Update the card number text with the input value
    document.querySelector('.card-number').textContent = value;
}
function updateUserName(value) {
    if (value.trim() === '') {
        value = 'John Applessed';
    }
    document.querySelector('.user-name').textContent = value;
}
function updateCvcNumber(value) {
    if (value.length > 3) {
        value = value.slice(0, 3)
    }
    else if (value.trim() === '') {
        value = '000';
    }
    document.querySelector('.cvc').textContent = value;
}
function updateExpiryMonth() {
    // Get the select element
    var selectElement = document.getElementById('expiryMonth');
    var selectElementYear = document.getElementById('expiryyear');
    // Get the selected option value
    var selectedValue = selectElement.value;
    var selectedValueYear = selectElementYear.value;
    // Get the month div
    var monthDiv = document.querySelector('.date');
    // Update the month div text
    monthDiv.textContent = selectedValue + '/' + selectedValueYear; // Assuming day is always '00'
}