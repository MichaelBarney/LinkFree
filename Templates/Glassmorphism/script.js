let buttons = document.querySelectorAll("#role-social-button")

buttons.forEach(button => {
    
    button.addEventListener('click',(event)=>{
       let url = button.getAttribute('data-social-links') 
       window.open(url)
    })
})