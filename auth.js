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
        }
    }
})
