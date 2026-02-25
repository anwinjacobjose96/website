document.getElementById('calcBtn').addEventListener('click', function () {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');

    if (!dob) {
        result.innerHTML = 'Please select your date of birth.';
        return;
    }

    const today = new Date();
    const birth = new Date(dob);
    const days = Math.floor((today - birth) / (1000 * 60 * 60 * 24));

    if (days < 0) {
        result.innerHTML = 'Date cannot be in the future.';
        return;
    }

    result.innerHTML = `<span>${days.toLocaleString()}</span> days lived 🎉`;
});
