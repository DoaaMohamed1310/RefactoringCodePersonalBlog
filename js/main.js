
// btn go to top
function goTop(){
    let btnTop=document.querySelector('.btnGoToTop')
    window.addEventListener('scroll',()=>{
        window.scrollY>150?btnTop.style.opacity=1:btnTop.style.opacity=0
    })
    btnTop.onclick=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

}
goTop();

// contact form
let btnSubmitContact=document.querySelector('.btnSubmit')
btnSubmitContact.addEventListener('click',sendMassage)
function sendMassage(event){
    console.log(event)
    let emailInput=document.querySelector('#email')
    let massageInput=document.querySelector('#massage')
    let form=document.querySelector('form')
    let rgxEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let rgxMassage=/^[a-zA-Z0-9\s-_@]{4,}$/
    if(rgxEmail.test(emailInput.value)==true && rgxMassage.test(massageInput.value)==true && emailInput.value !='' && massageInput.value !='' ){
        form.setAttribute('action',"mailto:dm0189187@gmail.com")
        emailInput.classList.add('is-valid')
        massageInput.classList.add('is-valid')
        emailInput.classList.remove('is-invalid')
        massageInput.classList.remove('is-invalid')
    }else{
        event.preventDefault();
        emailInput.classList.add('is-invalid')
        emailInput.classList.remove('is-valid')
        massageInput.classList.add('is-invalid')
        massageInput.classList.remove('is-valid')
    }
}
