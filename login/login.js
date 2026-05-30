// js/login.js

document.addEventListener('DOMContentLoaded', function () {
    loadData();
    loadHeader();
    loadFooter();

    if (localStorage.getItem('currentUser')) {
        window.location.href = basePath + 'home';
        return;
    }

    bindEvent();
});

function bindEvent() {
    //Submit form
    const form = document.getElementById('login-form');
    if (form) form.addEventListener('submit', handleLoginSubmit);

    document.querySelectorAll('.toggle-password').forEach(function (btn) {
        btn.addEventListener('click', togglePassword);
    });

    document.getElementById('email').addEventListener('input', function () {
        clearFieldError('email');
        clearGeneralError();
    });
    document.getElementById('password').addEventListener('input', function () {
        clearFieldError('password');
        clearGeneralError();
    });

    // Tai khoan demo
    document.querySelectorAll('.auth-demo__btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const emailEl = document.getElementById('email');
            const passwordEl = document.getElementById('password');
            if (emailEl) emailEl.value = this.dataset.enail;
            if (passwordEl) passwordEl.value = this.dataset.password;
            clearAllError();
        });
    });
}


// Xu ly dang nhap
function handleLoginSubmit(e) {
    e.preventDefault();
    clearAllError();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim(); 

    const errors = validateLoginForm(email,password);
    if (errors.length > 0) {
        errors.forEach(function(err) {
            showFieldError(err.field, err.msg);
        }); 
        return;
    }

    setButtonLoadding(true);

    setTimeout(function () {
        const user = authenticateUser(email,password);

        if (!user) {
            setButtonLoadding(false);
            showGenerationError('Email hoặc mật khẩu không chính xác. Vui lòng thử lại.');
            document.getElementById('group-password')?.claslist.add('shake');
            setTimeout(function () {
                document
            })
        }
    });
}