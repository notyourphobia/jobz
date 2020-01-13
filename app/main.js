function companyCheck() {
    let text = document.getElementById('company').value;
    switch (text) {
        case '':
            document.getElementById('company').style.backgroundImage = "url('./resources/warning-icon.svg')";

            document.getElementById('company').style.backgroundColor = "#ffe290";

            document.getElementById('company').style.borderColor = "#ffcd40";

            document.getElementById('company').style.borderWidth = "3px";

            document.getElementById('no-company').style.display = 'block';
            break;

        case 'Company':
            document.getElementById('company').style.backgroundImage = "url('./resources/error-icon.svg')";

            document.getElementById('company').style.backgroundColor = "#f94e52";

            document.getElementById('company').style.borderColor = "#5e1416";

            document.getElementById('company').style.borderWidth = "3px";

            document.getElementById('error-company').style.display = 'block';

            break;

        default:
            document.getElementById('company').style.backgroundImage = "url('./resources/correct-icon.svg')";

            document.getElementById('company').style.backgroundColor = "#87e357";

            document.getElementById('company').style.borderWidth = "3px";

            document.getElementById('company').style.borderColor = "#63ba36"

            document.getElementById('error-company').style.display = 'none';

            document.getElementById('no-company').style.display = 'none';

            break;
    }
}



// ff3b40 ffcd40 63ba36

function emailCheck() {
    let text = document.getElementById('email').value;

    switch (text) {
        case '':
            document.getElementById('email').style.backgroundImage = "url('./resources/warning-icon.svg')";

            document.getElementById('email').style.backgroundColor = "#ffe290";

            document.getElementById('email').style.borderColor = "#ffcd40";

            document.getElementById('email').style.borderWidth = "3px";

            document.getElementById('no-email').style.display = 'block';
            break;

        case 'mirceaiurcu@gmail.com':
            document.getElementById('email').style.backgroundImage = "url('./resources/error-icon.svg')";

            document.getElementById('email').style.backgroundColor = "#f94e52";

            document.getElementById('email').style.borderColor = "#5e1416";

            document.getElementById('email').style.borderWidth = "3px";

            document.getElementById('error-email').style.display = 'block';
            break;

        default:
            document.getElementById('email').style.backgroundImage = "url('./resources/correct-icon.svg')";

            document.getElementById('email').style.backgroundColor = "#87e357";

            document.getElementById('email').style.borderWidth = "3px";

            document.getElementById('email').style.borderColor = "#63ba36"

            document.getElementById('error-email').style.display = 'none';

            document.getElementById('no-email').style.display = 'none';
            break;
    }
}


