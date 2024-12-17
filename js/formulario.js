

const formElem = document.querySelector('#form')
formElem.addEventListener('submit', submit )

const butttonMailto = document.querySelector('#envioMail')


function submit (e) {
    e.preventDefault()
   const data =  new FormData(formElem)
   butttonMailto.setAttribute(
    'href',
    `mailto:vcp2403@gmail.com?subject=${data.get('name')} ${data.get('email')}&body=${data.get('phone')}\n${data.get('msj')}`
)
    butttonMailto.click()
}

