(function(){
  emailjs.init("Qe5hE0bhBNwrtMFXZ");
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact_form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_12i8yrt";         
    const mainTemplateID = "template_hogaknl";  
    const autoReplyTemplateID = "template_c07xeta"; 

    const sendMain = emailjs.sendForm(serviceID, mainTemplateID, this);

    const sendAutoReply = emailjs.sendForm(serviceID, autoReplyTemplateID, this);

    Promise.all([sendMain, sendAutoReply])
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Something went wrong. Please try again later.");
      });
  });
});
