/* document.getElementById("submit-btn").addEventListener("click", function (event) {
    


    
 */

/* const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const alphanumericRegex = /^[A-Za-z\s]+$/;
    const pincodeRegex = /^[0-9]{6}$/;


    if (!nameRegex.test(firstname) && !nameRegex.test(lastname) && !emailRegex.test(email) && !phoneRegex.test(phone) &&
        !alphanumericRegex.test(city) && !alphanumericRegex.test(state) && !pincodeRegex.test(pincode)) {
        alert('Please fill the details before submitting!');
        return;
    }

    if (!nameRegex.test(firstname)) {
        alert('First Name should contain at least one alphabet.');
        return;
    }
    if (!nameRegex.test(lastname)) {
        alert('Last Name should contain at least one alphabet.');
        return;
    }


    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address. ');
        return;
    }


    if (!phoneRegex.test(phone)) {
        alert('Phone number must be 10 digits.');
        return;
    }

    if (!alphanumericRegex.test(city)) {
        alert('Please enter valid City name.');
        return;
    }
    if (!alphanumericRegex.test(state)) {
        alert('Please enter valid State name.');
        return;
    }

    if (!pincodeRegex.test(pincode)) {
        alert('Please enter valid Pincode .');
        return;
    }
 */
/*  if (document.getElementById("contact-form").checkValidity()) {
        sendEmail(firstname, lastname, email, phone, city, state, pincode);
    } else {
        alert('Please fill the details before submitting!');
        return;
    }
}); */

var submitButton = document.getElementById("submit-btn");

document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var pincode = document.getElementById("pincode").value;
    var form = document.getElementById("contact-form");


    if (form.checkValidity()) {

        sendEmail(firstname, lastname, email, phone, city, state, pincode);
    } else {

        alert('Please enter valid details before submitting!');
        return;
    }
});

function sendEmail(firstname, lastname, email, phone, city, state, pincode) {
    emailjs.init("EpRzmqV9waziTiQPv");

    var params = {
        from_name: firstname,
        from_lastname: lastname,
        from_email: email,
        from_phone: phone,
        from_city: city,
        from_state: state,
        from_pincode: pincode
    };

    emailjs.send("service_6yrfx0w", "template_p01dnrj", params)
        .then(function (response) {
            console.log("Email sent:", response);
            submitButton.innerText = "Submitted!";
            submitButton.style.backgroundColor = "#D3D04F";
            clearFormFields();
        }, function (error) {
            console.error("Email error:", error);
            alert("Error sending email.");
        });
}

function clearFormFields() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("pincode").value = "";
}
