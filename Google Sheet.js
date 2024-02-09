const scriptURL = 'https://script.google.com/macros/s/AKfycbxGkmXzpapZ8SDlzq7MEICxR2v7J3eqiplU3MNoO_gDvz3GBUFEURm5aaEyy6bAz1WEOw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})