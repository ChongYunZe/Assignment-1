var Email = document.getElementById('Email');

Email.addEventListener('submit',function(event){
    event.preventDefault();
    var message = document.getElementById('message');
    message.innerText = 'Email entered successfully. You will now receive notifications about the latest news!';
    ;
})