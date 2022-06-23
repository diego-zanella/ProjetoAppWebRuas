function gravar(){
    $.ajax({
        type: "POST",
        url: "pagina3.php",
        data: {
            "CEP": document.getElementById("CEP").value,
            "descricao": document.getElementById("descricao").value,
            "UF": document.getElementById("UF").value,
            "descricao_cidade": document.getElementById("descricao_cidade").value,            
            "descricao_bairro": document.getElementById("descricao_bairro").value
        }
    });
}

function listar(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "pagina 4.php",
        success: function(retorno){
            console.log(retorno);
            //document.getElementById("mostrar").innerHTML = retorno[1]["CEP"];
        }
    
    });
}