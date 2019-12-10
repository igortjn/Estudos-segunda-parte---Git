var prodSel, tamSel, corSel;

prodSel = tamSel = corSel = -1;

/*  *   Tabelas de tipos de produto, marcas, cores e tamanhos  */
var tabTipos = [ "Camisa", "Moleton" ];
var tabMarcas = [ "Dudalina", "Hering", "Malwee","Marfinno", "Ripping" ];
var tabCores = [ "Azul", "Branco", "Chumbo","Cinza", "Preto", "Verde" ];
var tabTamanhos = [ "XP", "P", "M",  "G", "XG", "XXG" ];
var tabPreco = [ 100, 70, 40 , 30, 80];
/*   Tabela de produtos: Cada entrada armazena tipo, marca,   *   lista de cores, lista de tamanhos e preço de um produto  */
var tabProdutos = [  [ 0, 0, [ 1 ],[ 1, 2, 3, 4 ], 100], [ 0, 1, [ 0, 2, 5 ],[ 1, 2, 3, 4, 5 ], 70], [ 0, 3, [ 0, 1 ], [ 1, 2, 3, 4 ], 30],
[ 1, 1, [ 3, 4 ],[ 1, 2, 3, 4 ], 70], [ 1, 2, [ 3 ], [ 2, 3, 4 ], 40], [ 1, 4, [ 0, 3, 4], [ 0, 1, 2, 3, 4], 80] ];



function selecProd(selec) {
  var f = selec.form;
  var nl = selec.selectedIndex - 1;

  /* preenche var global prodSel */
  prodSel = nl;
  /* limpa descrição, preço, tamanho e cor */
  f.txtDesc.value = "";
  f.TxtPreco.value = "";
  f.selTamanho.selectedIndex = -1;
  f.selCor.selectedIndex = -1;


}

/*  * Função chamada quando um item é   * selecionado na lista de tamanhos  */
function selecTam(selec) {
  tamSel = verificaCampo(selec, 3, "Tamanho");
  mostraDesc(selec.form);

}

/*  * Função chamada quando um item é   * selecionado na lista de cores  */

function selecCor(selec) {
  /* preenche var global corSel */     /*  2 é cor  */
  corSel = verificaCampo(selec, 2, "Cor");
  mostraDesc(selec.form);
}

function prodTem(prodSel,corSel,ind) {
  if (prodSel == 0 || prodSel==1 || prodSel==2) {
    document.getElementById('txtDesc').value=tabTipos[0]+" "+tabMarcas[prodSel]+" "+tabTamanhos[tamSel]+" "+tabCores[corSel];
    document.getElementById('TxtPreco').value=tabPreco[prodSel];

  }else {
    document.getElementById('txtDesc').value=tabTipos[1]+" "+tabMarcas[prodSel]+" "+tabTamanhos[tamSel]+" "+tabCores[corSel];
    document.getElementById('TxtPreco').value=tabPreco[prodSel];
  }

  return ind;
}

function verificaCampo(selec, campo, nome) {
  var ind = selec.selectedIndex - 1;

  if (prodSel==-1) {
    alert("Nenhum produto selecionado!");

  }

  var prdTem = prodTem(prodSel, campo,ind);


  return prdTem;
}
function mostraDesc(formulario) {

}



function CompraItem() {
  if (prodSel==-1) {
    alert("Produto não selecionado!");
  }
  var textDesc= document.getElementById('txtDesc').value;
  var textarea = document.querySelector('textarea');
  textarea.value+=textDesc+"\n";


  TxtPreco = Number(document.getElementById('TxtPreco').value);
  TxtTotal = Number(document.getElementById('TxtTotal').value);
  resultado=TxtPreco+TxtTotal;
  document.getElementById('TxtTotal').value=resultado;

  selecProd();


}
