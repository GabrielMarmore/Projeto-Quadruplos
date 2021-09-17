function validaForm(frm){
    if(frm.Q_nome.value == ""){
        alert("Por favor, indique o seu nome.");
        frm.Q_nome.focus();
        return false;
    }
/*
O proprio input tem um sistema para isso
if(frm.Q_e-mail.value.indexOf("@") == -1 || frm.Q_e-mail.value.indexOf(".") == -1){
    alert("Por favor, indique um e-mail válido.");
    frm.Q_e-mail.focus();
    return false;
}
*/
    if(frm.Q_email.value == ""){
        alert("Por favor, campo e-mail não pode ser vazio");
        frm.Q_email.focus();
        return false;
    }
}