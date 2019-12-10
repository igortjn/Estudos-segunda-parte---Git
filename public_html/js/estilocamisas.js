var tabProdutos = [
["Vazio", 0, "Vazio"],
["CamBasDudalina_Branca", 100, "P/M/G/GG"],
["CamBasHering_Azul", 70, "P/M/XG/XXG"],
["CamBasHering_Chumbo", 70, "P/M/XG/XXG"],
["CamBasHering_Verde", 70, "P/M/XG/XXG"],
["CamBasMarfinno_azul", 30, "P/M/G/GG"],
["CamBasMarfinno_branca", 30, "P/M/G/GG"] ];
function Camisa(ind) {
var foto = document.getElementById("imgCam");
var prec = document.getElementById("prcCam");
var desc = document.getElementById("nomTam");
foto.src = "Imagens/" + tabProdutos[ind][0] + ".jpg";
prec.innerHTML = "<span class='colorprice'>" + "Preço: R$" + tabProdutos[ind][1] + ",00" + "</span>";
desc.innerHTML = "Tamanho:" + tabProdutos[ind][2];
				}
			