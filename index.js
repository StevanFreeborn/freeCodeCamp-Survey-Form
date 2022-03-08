window.onload = function() {
    document.getElementById("name").focus();
    document.getElementById('survey-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('gmail-service', 'survey-form-template', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            }); 
        this.classList.add('hide')
        document.getElementById('submit-message').classList.remove('hide');
    });
}