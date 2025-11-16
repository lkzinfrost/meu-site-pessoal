// mostrar o box de registro
function mostrarCadastro() {
    document.getElementById("cadastroBox").style.display = "block";
}

// registrar conta
document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("userReg").value;
    let pass = document.getElementById("passReg").value;

    localStorage.setItem("usuario", user);
    localStorage.setItem("senha", pass);

    alert("Conta criada com sucesso!");
});

// login
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;

    let userSalvo = localStorage.getItem("usuario");
    let passSalvo = localStorage.getItem("senha");

    if (user === userSalvo && pass === passSalvo) {
        alert("Login Feito!");
        window.location.href = "../index.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
