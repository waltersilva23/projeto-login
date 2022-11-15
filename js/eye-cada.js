let btn = document.querySelector('#eye-cada')

btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#isenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#eye-cada2')

btnConfirm.addEventListener('click',()=>{
    let inputConfirmSenha = document.querySelector('#iconfirmsenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})