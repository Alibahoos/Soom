document.getElementById('checkBtn').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);
    if (age >= 18) {
        document.getElementById('message').innerHTML = 
            '<p style="color:green;">شما مجاز هستید</p>';
    } else {
        document.getElementById('message').innerHTML = 
            '<p style="color:red;">شما مجاز نیستید</p>';
    }
});
