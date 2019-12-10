    var Produto= new array();
    var Tamanho= new array();
    var Cor= new array();

/* São inicializadas com -1 (nada selecionado)*/
    var prodSel, tamSel, corSel;
    prodSel = tamSel = corSel = -1;

    var tabtipos= ["Camisa","Moletom"]; //[0]
    var Tabmarcas = ["Dudalina","Hering","Marfino","Hering","Malwee","Ripping"]; //[1]
    var Tabcor = ["Azul","Branco","Chumbo","Cinza","Preto","Verde"];//[2]
    var Tabtamanho = ["XP", "P", "M", "G", "GG", "XG", "XXG"];//[3]
    var tabprodutos = [
        [ 0, 0, [ 1 ], [ 1, 2, 3, 4 ], 100],
        [ 0, 1, [ 0, 2, 5 ], [ 1, 2, 3, 4, 5 ], 70],
        [ 0, 3, [ 0, 1 ], [ 1, 2, 3, 4 ], 30],
        [ 1, 1, [ 3, 4 ], [ 1, 2, 3, 4 ], 70],
        [ 1, 2, [ 3 ], [ 2, 3, 4 ], 40],
        [ 1, 4, [ 0, 3, 4], [ 0, 1, 2, 3, 4], 80] ];

/* preenche var global prodSel */
    var prodSel = nl;


/*
* Função chamada quando um item é
* selecionado na lista de produtos*/
function selecProd(selec) {
    var total = (f.TxtTotal.value > 0) ?
                parseFloat(f.TxtTotal.value) : 0;
                
    var f = selec.form;
    var nl = selec.selProduto.selectedIndex - 1;

/* limpa descrição, preço, tamanho e cor */
    f.txtDesc.value = "";
    f.TxtPreco.value = "";
    f.selTamanho.selectedIndex = -1;
    f.selCor.selectedIndex = -1;
}
/*
* Função chamada quando um item é
* selecionado na lista de tamanhos*/
function selecTam(selec) {
/* preenche var global tamSel */
/* 3 é tamanho */
tamSel = verificaCampo(selec, 3, "Tamanho");
mostraDesc(selec.form);
}

/*
* Função chamada quando um item é
* selecionado na lista de cores*/
function selecCor(selec) {
    /* preenche var global corSel */
    /* 2 é cor */
    corSel = verificaCampo(selec, 2, "Cor");
    mostraDesc(selec.form);
