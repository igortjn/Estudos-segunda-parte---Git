function VerificaTelef( campo, tam ) {
var i, c;
var strTel = campo.value;
if ( strTel.length != tam ) {
alert("Telefone " + campo.name
+ " tem que ter " +
tam + " dígitos!");
return false;
window.close(VerificaTelef)
}
for ( i = 0; i < tam; i++ ) {
c = strTel.charAt(i);
if ( (c < '0') || (c > '9')) {
alert("Telefone só pode ter" +
" dígitos, caracter " +
c + " inválido!");

return false;
}
}
return true;
}
