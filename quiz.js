    
var id = 0

feil = 0
riktig = 0
// alle spørsmålene i quizen
const spørsmål = [{
    id: 0,
    q: "Hvilken graftype er best for å representere data i formen av tall, og som er målt i like intervaller?",
    a: [{ text: "Histogram", svar: false },
        { text: "Linjediagram", svar: false },
        { text: "Sektordiagram", svar: false },
        { text: "Stolpediagram", svar: true }
    ]

},
{
    id: 1,
    q: "Hvilken graftype er best for å representere kategorier som er målt i varierende intervall?",
    a: [{ text: "Histogram", svar: true },
    { text: "Linjediagram", svar: false },
    { text: "Sektordiagram", svar: false },
    { text: "Stolpediagram", svar: false }
    ]

},
{
    id: 2,
    q: "Hvilken graftype er best for å representere endring over tid?",
    a: [{ text: "Histogram", svar: false },
    { text: "Linjediagram", svar: true },
    { text: "Sektordiagram", svar: false },
    { text: "Stolpediagram", svar: false }
    ]

},
{
    id: 3,
    q: "Hvilken graftype er best for å representere data som er oppgitt i prosent?",
    a: [{ text: "Histogram", svar: false },
        { text: "Linjediagram", svar: false },
        { text: "Sektordiagram", svar: true },
        { text: "Stolpediagram", svar: false }
    ]

}
// {
//     id: 4,
//     q: "Spørsmål 5",
//     a: [{ text: "feil", svar: false },
//         { text: "feil", svar: false },
//         { text: "riktig", svar: true },
//         { text: "feil", svar: false }
//     ]

// },


]

//bytter posisjon på to elementer i lista 100 ganger, tatt fra blackjack koden med kortstokk
function stokke()
    {
        //man kan endre tallet til hva man vil
        for (var i = 0; i < 100; i++)
        {
            var en = Math.floor((Math.random() * spørsmål.length));
            var to = Math.floor((Math.random() * spørsmål.length));
            var tmp = spørsmål[en];

            spørsmål[en] = spørsmål[to];
            spørsmål[to] = tmp;

        }
    }
stokke()


console.log(spørsmål)

var start = true;

function iterate(id){
    
    //spørsmål id
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");

    // Setting the question text
    question.innerText = spørsmål[id].q;
 

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
 
 
    // Providing option text
    op1.innerText = spørsmål[id].a[0].text;
    op2.innerText = spørsmål[id].a[1].text;
    op3.innerText = spørsmål[id].a[2].text;
    op4.innerText = spørsmål[id].a[3].text;
 
    // Providing the true or false value to the options
    op1.value = spørsmål[id].a[0].svar;
    op2.value = spørsmål[id].a[1].svar;
    op3.value = spørsmål[id].a[2].svar;
    op4.value = spørsmål[id].a[3].svar;


      var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
 
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
 
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
 
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    const evaluate = document.getElementsByClassName("evaluate");
    
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        var neste = document.getElementsByClassName("next");
        neste[0].style.display = 'block'
        if (selected == "false") {
            
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            feil = feil +1
        } else if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            riktig = riktig + 1
        } else{
            result[0].innerHTML = "Du må velge et svar"
            result[0].style.color = "black"
        }
        // console.log("riktig:" + riktig)
        // console.log("feil:" +feil)
     
    })
}
 

if (start) {
    iterate("0");
}
 


const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < spørsmål.length - 1) {
    id++;
    iterate(id);
    console.log(id);
    var neste = document.getElementsByClassName("next");
    neste[0].style.display = "none"
    resetFarge()
    
}else{
    alert("quizen er over")
}

})

const forrige = document.getElementsByClassName('forrige')[0];
var id = 0;

function resetFarge(){
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
}

forrige.addEventListener("click", () => {
start = false;
if (id > 0) {
    id--;
    iterate(id);
    console.log(id);
    resetFarge()
    var neste = document.getElementsByClassName("next");
    neste[0].style.display = 'none'
}else{
    alert("du er allerede på starten av quizzen")
}
})

