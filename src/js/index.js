/* pegar o value do btn atual clicado */
let vermelho = false;
let id = 0;
function pegaId(entrada) {

    const btnClicado = document.getElementById(entrada);

    let eOMesmo = entrada == id;

    if (vermelho && eOMesmo) {
        let troca = document.getElementById(id);
        troca.classList.remove("clicou");
        vermelho = false;
        id = 0;
    } else if (vermelho && !eOMesmo) {
        let troca = document.getElementById(id);
        troca.classList.remove("clicou");
        btnClicado.classList.add("clicou");
        vermelho = true;
        id = entrada;
    } else if (!vermelho) {
        btnClicado.classList.add("clicou");
        id = entrada;
        vermelho = true;
    }
    return id;
}

let btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click",
    function submeter(){
        if(id===0){ console.log("espera"); }
        else{ 
            let mostrar = document.getElementById("mostrar");
            let esconder = document.getElementById("esconder");
            mostrar.classList.remove("mostrar");
            mostrar.classList.add("esconder");
            esconder.classList.remove("esconder");
            esconder.classList.add("mostrar");
            let tks = document.getElementById("tksRating");
            tks.innerHTML = `You selected ${id} out of 5`;
        }
    }
);


/* botao submit
pede elemento clicado. se variavel diferente de zero
dispara função que vai colocar no tks
*/
