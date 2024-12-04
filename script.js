const sendMail = () => {
    let params = {
        formName: $("#form-name")[0].value,
        formEmail: $("#form-email")[0].value,
        formMessage: $("#form-message")[0].value,
    }

    emailjs.send("service_jotpb66","template_kpo2rhr",params).then(alert('Message sent!'))
}
