    
var id = 0

// alle spørsmålene i quizen
const kort = [{
    id: 0,
    front:  "Hvilken graftype er best for å representere endring over tid?",
    bak: "Linjediagram"

},
{
    id: 1,
    front: "Hvilken graftype er best for å representere kategorier som er målt i varierende intervall?",
    bak: "histogram"

},
{
    id: 2,
    front: "Hvilken graftype er best for å representere data i formen av tall, og som er målt i like intervaller?",
    bak: "stolpediagram"

},
{
    id: 3,
    front: "Hvilken graftype er best for å representere data som er oppgitt i prosent?",
    bak: "sektordiagram"

}

]

//bytter posisjon på to elementer i lista 100 ganger, tatt fra blackjack koden med kortstokk
function stokke()
    {
        //man kan endre tallet til hva man vil
        for (var i = 0; i < 100; i++)
        {
            var en = Math.floor((Math.random() * kort.length));
            var to = Math.floor((Math.random() * kort.length));
            var tmp = kort[en];

            kort[en] = kort[to];
            kort[to] = tmp;

        }
    }
stokke()

console.log(kort)

var start = true;

function iterate(id){
    
   
 

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    
 
 
    // Providing option text
    op1.innerText = kort[id].front;
    op2.innerText = kort[id].bak;

 
  
}
 

if (start) {
    iterate("0");
}
 


const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < kort.length - 1) {
    id++;
    iterate(id);
    console.log(id);
}

})

const forrige = document.getElementsByClassName('forrige')[0];
var id = 0;

forrige.addEventListener("click", () => {
start = false;
if (id > 0) {
    id--;
    iterate(id);
    console.log(id);
}

})

