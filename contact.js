const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault()
    // service id
    emailjs.sendForm('service_mmorlod','template_5cj6cn9','#contact-form','yXm86vGCcWrhKVpLK')
    .then(() => {
        // show send message
        contactMessage.textContent = 'Message sent successfully !!'

        // remove message after five minute

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // clere input filds
        contactForm.reset()
    }, () => {
        // show error
        contactMessage.textContent = 'message not sent (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)