(function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const success = document.getElementById('success');
  const showPassword = document.getElementById('showPassword');

  showPassword.addEventListener('change', () => {
    password.type = showPassword.checked ? 'text' : 'password';
  });

  function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    emailError.textContent = '';
    passwordError.textContent = '';
    success.hidden = true;

    if(!isValidEmail(email.value.trim())){
      emailError.textContent = 'Please enter a valid email address.';
      ok = false;
    }

    if(password.value.length < 6){
      passwordError.textContent = 'Password must be at least 6 characters.';
      ok = false;
    }

    if(!ok) return;

    // Demo success handling (no server call here)
    success.hidden = false;
    success.textContent = 'Login successful (demo only) — welcome back!';

    // Optionally clear form after short delay
    setTimeout(()=>{
      form.reset();
      success.hidden = true;
    }, 1600);
  });
})();