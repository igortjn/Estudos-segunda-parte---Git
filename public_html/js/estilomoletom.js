function Moletom(tipo) {
    var tabTipos = new Array(6);
    tabTipos[0] = ["Hering", "Cinza", "MolHering_Cinza.jpg", "P/M/G/XG", 70];
    tabTipos[1] = ["Hering", "Preto", "MolHering_Preto.jpg", "P/M/G/XG", 70];
    tabTipos[2] = ["Walwee", "Cinza", "MolMalwee_Cinza.jpg", "M/G/XG", 40];
    tabTipos[3] = ["Ripping", "Azul", "MolRipping_Azul.jpg", "PP/P/M/G/GG", 80];
    tabTipos[4] = ["Ripping", "Cinza", "MolRipping_Cinza.jpg", "P/M/G/XG", 80];
    tabTipos[5] = ["Ripping", "Preto", "MolRipping_Preto.jpg", "PP/P/M/G/GG", 80];
    var jan= open("", "teste", "location=no,status=no,width=350, height=390, top=180, left=500");
    with (jan.document) {
    write("<html><head><title>Moletom</title></head>");
    write("<link rel=stylesheet href=css/Malhama.css>");
    write("</head><body>");
    write("<div class='apres'>");
    write("<h2>"+ tabTipos[tipo][0] + "-" + tabTipos[tipo][1] + "</h2>");
    write("<p><img class='imgborder' src=Imagens/" + tabTipos[tipo][2] +">");
    write("<p>Tamanho: " + tabTipos[tipo][3]);
    write("<p>Preço: R$ "  + tabTipos[tipo][4] + ",00");
    write("<form class='inputback'><input type='button' value='Fechar' onClick='window.close(this)'/></form>");
    write("</body></html>");
    }
    }