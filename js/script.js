function runTypingEffect(){
    const text = "I am Lakshay Jakhar."
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text,typingElement,typingDelay)
}

function typeText(text,typingElement,typingDelay){
    for(let i =0; i < text.length; i++){
        setTimeout(() => {
            typingElement.textContent += text.charAt(i)
        }, typingDelay *i);
    }
}


document.addEventListener('DOMContentLoaded', runTypingEffect);

/* remove the data from the input after emial is sent */

window.onload = function() {
    // Get the form element
    var form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        setTimeout(function() {
      var nameInput = document.querySelector('[name="name"]');
      var emailInput = document.querySelector('[name="email"]');
      var messageInput = document.querySelector('[name="message"]');

      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }, 200);
    });
}

/* effect on scrollinh making visible */
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)) 