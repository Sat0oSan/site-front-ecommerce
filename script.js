fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    });

fetch('side-bar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('side-bar-container').innerHTML = data;
    });

fetch('login-page.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('login-page-container').innerHTML = data;

        // Agora que o conteúdo está carregado, associamos o evento de submit ao formulário
        const form = document.querySelector('form');  // Verifique se o formulário existe
        if (form) {
            form.addEventListener('submit', RequisitLogin);
        } else {
            console.error('Formulário não encontrado');
        }
    });

    
//acionamento da side bar
function bars(){
    const bar = document.getElementById('side-bar');

    if(bar.style.left === '-250px'){
        bar.style.left = '0px';
    } else {
        bar.style.left = '-250px';
    }
}

//trocar cor da div do input login
function verificarInputsCorDiv(){
    const divEmail = document.getElementById('caixaA'); //Presetando Div do InputEmail
    const divSenha = document.getElementById('caixaB'); //Presetando Div do InputSenha

    const inputEmail = document.querySelector('input[type="text"][name="email"]');
    const inputSenha = document.querySelector('input[type="password"]');

    if (inputEmail.value.trim() !== "") { 
        divEmail.style.boxShadow = '1px 1px 1px 1px #fff'
    } else {
        divEmail.style.boxShadow = '1px 1px 1px 1px #858484';
    }
     if (inputSenha.value.trim() !== "") { 
        divSenha.style.boxShadow = '1px 1px 1px 1px #fff'
    } else {
        divSenha.style.boxShadow = '1px 1px 1px 1px #858484';
    }


}
//verificar se loop precisa continuar ativo                                             /*PUTA CODIGO DIFICIL DO CARAI*/
let loop /* para manter chk de cor da div na aba-login funcionando */
function VerificadorDeLoop() {
        const loginPage = document.getElementById("tela-login-container"); // ID da aba de login
        
        loop = setInterval(verificarInputsCorDiv, 500)
        while(loginPage.style.display = 'flex'){
            return loop && VerificadorDeLoop;  //retorna o valor de loop p fora da função e repete verificadorDeLoop retornando o valor de loop enquando Login-page estiver ativa
        } if(loginPage.style.display = 'none'){  //Se login-page estiver desativada retorna loop a zero e acaba função
            return clearInterval(loop);
        }
}


//ativação da tela de login
function abrirTelaLogin(){
    const telaLogin = document.getElementById('tela-login-container')

    if(telaLogin.style.display === 'none'){
        telaLogin.style.display = 'flex'
    }
    return VerificadorDeLoop();
}
//fechar tela de login pelo X
function exitLogin(){
    const telaLogin = document.getElementById('tela-login-container')

    if(telaLogin.style.display === 'flex'){
    telaLogin.style.display = 'none'
    }
}


// Função de validação do login
function RequisitLogin(event) {
    event.preventDefault();  // Impede o envio do formulário

    let isValid = true;


    // Funções de verificadores de padrões chk de Email e Senha
    // Função de validação de email
    function verificarEmailValido() {
    const inputEmail = document.querySelector('input[type="text"][name="email"]');
    
    if (!inputEmail) {
        console.error("Elemento de email não encontrado!");
        return false;
    }

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return regexEmail.test(inputEmail.value);
    }

    // Função de validação de senha
    function verificarPadraoSenha() {
    const inputSenha = document.querySelector('input[type="password"][name="senha"]');
    
    if (!inputSenha) {
        console.error("Elemento de senha não encontrado!");
        return false;
    }

    // Remover espaços antes de validar
    const senha = inputSenha.value.trim();
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    console.log("Senha para validação (trimmed):", senha); // Para depuração
    return regexSenha.test(senha);
    }

    // Verificador de senha
    function verificarSenha() {
    const inputSenha = document.querySelector('input[type="password"][name="senha"]');
    const senha = inputSenha.value.trim(); // Remover espaços antes de verificar

    // Exemplo de senha específica para validação
    if(senha == 'Ca95650286'){  
        return true;
    } else {
        return false;
    }
    }

    // Verificador de email
    function verificarEmail() {
    const inputEmail = document.querySelector('input[type="text"][name="email"]');
    
    if(inputEmail.value == 'attie.com'){
        return true;
    } else {
        return false;
    }
    }


    // Obter os elementos de erro
    const errorEmail = document.getElementById('emailError');
    const errorPassword = document.getElementById('passwordError');
    const telaLoginHeightPorError = document.getElementById('tela-login-container');

    // Mensagens de erro
    let mensagemFormatSenhaIncorreta = "Senha está no formato errado. <br> Deve possuir de 8 a 20 caracteres, contendo ao menos: <br> - 1 letra maiúcula <br> - 1 letra minúscula <br> - 1 Número ";
    let mensagemFormatEmailIncorreto = "Email está no formato errado. ex: example@gmail.com";
    let mensagemSenhaInvalida = "Senha não corresponde";
    let mensagemEmailInvalido = "Email não corresponde";

    // Verificar email e senha
    const emailFormatIncorrect = !verificarEmailValido();
    const senhaFormatIncorrect = !verificarPadraoSenha();
    const senhaIncorrect = !verificarSenha();
    const emailIncorrect = !verificarEmail();

    // Verificar email
    if (emailFormatIncorrect) {
        isValid = false;
        telaLoginHeightPorError.style.height = '600px';
        errorEmail.textContent = mensagemFormatEmailIncorreto;
        errorEmail.style.display = 'block';
        errorEmail.style.color = 'red';
    } else {
        errorEmail.style.display = 'none';
        telaLoginHeightPorError.style.height = '450px';
    }

    // Verificar senha
    if (senhaFormatIncorrect) {
        isValid = false;
        telaLoginHeightPorError.style.height = '600px';
        errorPassword.textContent = mensagemFormatSenhaIncorreta;
        errorPassword.style.display = 'block';
        errorPassword.style.color = 'red';
    } else {
        errorPassword.style.display = 'none';
        telaLoginHeightPorError.style.height = '450px';
    }

    // Verificar senha incorreta
    if (senhaIncorrect) {
        isValid = false;
        telaLoginHeightPorError.style.height = '600px';
        errorPassword.textContent = mensagemSenhaInvalida;
        errorPassword.style.display = 'block';
        errorPassword.style.color = 'red';
    } else {
        errorPassword.style.display = 'none';
        telaLoginHeightPorError.style.height = '450px';
    }

    // Verificar email incorreto
    if (emailIncorrect) {
        isValid = false;
        telaLoginHeightPorError.style.height = '600px';
        errorEmail.textContent = mensagemEmailInvalido;
        errorEmail.style.display = 'block';
        errorEmail.style.color = 'red';
    } else {
        errorEmail.style.display = 'none';
        telaLoginHeightPorError.style.height = '450px';
    }

    // Se todos os campos estiverem válidos
    if (isValid) {
        console.log('formulario completo');
        // Aqui você pode fazer a submissão do formulário ou realizar outras ações
    } else {
        console.log('formulario fail.');
    }
}

   



