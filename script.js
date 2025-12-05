(() => {
  'use strict'
  const forms = document.querySelectorAll('form')
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        alert('Form submitted (demo). For real auth, connect to backend.')
      }
      form.classList.add('was-validated')
    }, false)
  })
})();
