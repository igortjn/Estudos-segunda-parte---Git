/*var tabProdutos = [
    ["Vazio", 0 , "Vazio"],
["CamBasDudalina_Branca", 70, "P,M,G,GG"],
["CamBasHering_Azul", 70, "P,M,G,XG,XXG"],
["CamBasHering_Chumbo", 70, "P,M,G,XG,XXG"],
["CamBasHering_Verde", 70, "P,M,G,XG,XXG"],
["CamBasMarfinno_azul", 70, "P,M,G,GG"],
["CamBasMarfinno_branca", 70, "P,M,G,GG"];
function Mostra(ind) {
    var foto = document.getElementById("imgCad");
    var prec = document.getElementById("prcCad");
    var desc = document.getElementById("nomCad");
foto.src = "Imagens/" + tabProdutos[ind][0] + ".jpg";
prec.innerHTML = "Preço R$" + tabProdutos[ind][1] + ",00";
desc.innerHtml = "Tamanho:" + tabProdutos[ind][2];
}
*/

var tabProdutos = [
["Vazio", 0, "Vazio"],
["CamBasDudalina_Branca", 100, "P/M/G/GG"],
["CamBasHering_Azul", 70, "P/M/XG/XXG"],
["CamBasHering_Chumbo", 70, "P/M/XG/XXG"],
["CamBasHering_Verde", 70, "P/M/XG/XXG"],
["CamBasMarfinno_azul", 30, "P/M/G/GG"],
["CamBasMarfinno_branca", 30, "P/M/G/GG"] ];
function Camisa(ind) {
var foto = document.getElementById("imgCad");
var prec = document.getElementById("prcCad");
var desc = document.getElementById("nomCad");
foto.src = "Imagens/" + tabProdutos[ind][0] + ".jpg";
prec.innerHTML = "Preço: R$" + tabProdutos[ind][1] + ",00";
desc.innerHTML = "Tamanho:" + tabProdutos[ind][2];
}