const ingredientsPizza = ["salsa de tomate", "orégano", "mozzarella", "guindilla", "salami", "anchoas", "alcaparras"];
const goMarket = "Vamos al supermercado";
const shop =  "Compramos la ";
const open = "Abrimos el envoltorio de la ";
const stretch = "estiramos la masa";
const added = "añadimos";
const dough = "masa";
const toPutPizzaOven= "Metemos la pizza en el horno durante 20 minutos";
const outOven ="sacamos la pizza del horno";
const donePizza = "¡Pizza lista!";
const colon = ","

function buy() {
    console.log(shop + dough + ". ");                
}    

function preheat() {
    console.log ("Precalentamos el horno a 180º C.");
}

function preparation() {
    console.log(open + dough + ", " + stretch + " y en el siguiente orden:");
} 

function ingredients() {
    
    for (i=0;i<ingredientsPizza.length;i++) {
        text = " ";
        console.log(added + text + ingredientsPizza[i] + colon)
       }
}

function cook() {
    console.log(toPutPizzaOven+" y esperamos hambrientos a que se haga.");
}

function warningHot() {
    console.log("Con cuidado de no quemarnos, " + outOven +" y lo apagamos.");
}

function readyPizza() {    
    console.log(donePizza);
}

function cut() {
    let portions = "6 porciones";
    console.log("Cortamos la pizza en "+portions+"...");
    console.log("Bon apetit!!");
}

function app() {
    buy();   
    preheat();
    preparation();
    ingredients();   
    cook();
    warningHot();
    readyPizza();
    cut();
}

app();
