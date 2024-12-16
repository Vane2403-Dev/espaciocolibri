const $form = document.querySelector('#form')

$form.addEventListener ('submit', informacionSubmit)

function informacionSubmit (event) {
event.prventDefault()
 const form = new FormData(this)
 console.log(form.get('name'))
 
}