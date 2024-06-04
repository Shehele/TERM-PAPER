document.addEventListener('DOMContentLoaded',function() {
    const authForm = document.getElementById("auth-form");
    const formTitle = document.getElementById('form-title');
    const toggleFormText = document.getElementById('toggle-form');
    const submitButton = document.getElementById('submit-btn');
    const loginLink = document.getElementById('login-link');
    const toggleLink = document.getElementById('toggle-link');

    let isLogin = false;

    function toggleForm() {
        if (isLogin) {
            formTitle.textContent = 'Sign Up';
            submitButton.textContent = 'Sign Up';
        } else {
            formTitle.textContent = 'Login';
            submitButton.textContent = 'Login';
        }
        isLogin = !isLogin;
    }
});

authForm.addEventListener('submiit',function(event){
    event.preventDefault();
    // Handle form submission logic const email = document.getElementById('email').value;
    const password = document.getElementById('password').ariaValue;
    if (isLogin){
        // Handle login logic console.log('Login with',email,password);
    } else {
        // Handle sign up logic console.logic('Sign up with',email,password);
    }
});

loginLink.addEventListener('click',function(event){
    event.preventDefault();
    if (!isLogin) toggleForm();
});
