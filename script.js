document.getElementById('password-input').addEventListener('input', function(e) {
    var password = e.target.value;
    var strengthText = '';
    var strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }
    if (password.length >= 12) {
        strength += 1;
    }
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }
    if (/[a-z]/.test(password)) {
        strength += 1;
    }
    if (/[0-9]/.test(password)) {
        strength += 1;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    }

    switch (strength) {
        case 0:
        case 1:
            strengthText = 'Very Weak';
            break;
        case 2:
            strengthText = 'Weak';
            break;
        case 3:
            strengthText = 'Moderate';
            break;
        case 4:
            strengthText = 'Strong';
            break;
        case 5:
            strengthText = 'Very Strong';
            break;
        default:
            strengthText = 'Extremely Strong';
            break;
    }

    document.getElementById('strength-display').textContent = 'Strength: ' + strengthText;
});


