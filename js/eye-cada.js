//para visualizar as senhas do cadastro
let btn = document.querySelector('#eye2')
let btnConfirm = document.querySelector('#eye3')

//validaçao do dados de cadastro
let nome = document.querySelector('#inome')
let labelnome = document.querySelector('#labelnome')

let senha = document.querySelector('#isenha')
let labelsenha = document.querySelector('#labelsenha')

let confirmSenha = document.querySelector('#iconfirmsenha')
let labelconfirmSenha = document.querySelector('#labelconfirmsenha')

nome.addEventListener('keyup',() => {
    if(nome.value.length <= 2){
        labelnome.innerHTML = '<strong>Insira no mínimo 3 caracteres</strong>'
        nome.setAttribute('style','color: red')
    } else {
        labelnome.innerHTML = 'Nome'
        nome.setAttribute('style','color: black')
    }
})

senha.addEventListener('keyup',() => {
    if(senha.value.length <= 7){
        labelsenha.innerHTML = '<strong>Insira no mínimo 8 caracteres</strong>'
        senha.setAttribute('style','color: red')
    } else {
        labelsenha.innerHTML = 'Senha'
        senha.setAttribute('style','color: black')
    }
})

confirmSenha.addEventListener('keyup',() => {
    if(confirmSenha.value != senha.value ){
        labelconfirmSenha.innerHTML = '<strong>Senhas diferentes</strong>'
        confirmSenha.setAttribute('style','color: red')
    } else {
        labelconfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style','color: black')
    }
})

function cadastrar(){
    alert('clicado')
}

////para visualizar as senhas do cadastro
btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#isenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click',()=>{
    let inputConfirmSenha = document.querySelector('#iconfirmsenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
