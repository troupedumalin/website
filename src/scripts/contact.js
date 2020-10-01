window.onload = () => {
	const contactForm = document.getElementById('contact_form')
	contactForm.addEventListener('submit', function (event) {
		event.preventDefault()
		const contactFormSubmitButton = document.getElementById('contact_form_submit_button')
		contactFormSubmitButton.value = 'Envoi en cours...'

		emailjs.sendForm('default_service', 'contact_form', this).then(
			() => {
				contactForm.reset()
				contactFormSubmitButton.value = 'Envoyer'
				alert('Les malins ont bien reçu votre message !')
			},
			(err) => {
				contactFormSubmitButton.value = 'Envoyer'
				alert(JSON.stringify(err))
			}
		)
	})
}
