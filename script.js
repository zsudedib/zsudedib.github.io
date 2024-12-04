console.log("Not sure why you're in the console, but regardless, thanks for checking out my personal website!");
const sendMail = () => {
    let params = {
        formFirstName: ($(".form-name")[0].value.trim() + " ").split(" ")[0],
        formLastName: ($(".form-name")[0].value.trim() + " ").split(" ").splice(1).join(" ").trim(),
        formEmail: $(".form-email")[0].value,
        formMessage: $(".form-message")[0].value,
    }
    // console.log(params);
    emailjs.send("service_jotpb66","template_kpo2rhr",params);
    // console.log("Sent message");
}
