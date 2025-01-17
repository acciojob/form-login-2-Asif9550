//your JS code here. If required.
document.getElementById('submitBtn').addEventListener('click', function () {
    // Get form input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    // Create the alert message
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

    // Display the alert
    alert(alertMessage);
});
