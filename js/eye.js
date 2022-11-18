//para visualizar a senha do login
let btn = document.querySelector('#eye')

btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#isenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})