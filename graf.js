graftype =''
dataliste = []
kategoriliste =[]
fargeliste =[]
borderliste=[]
function giveSelection(x) {
  graftype=x
  // console.log(graftype.type)
}

function randomData(){
  kategoriliste = ["test1","test2","test3","test4"]
  dataliste = [100, 150, 200, 250]
}

function reset(){
  dataliste = []
  kategoriliste=[]
}
function leggtil(){
  var antall = prompt("Hvor mange kategorier har du lyst til å legge til? legg til kun tall")
  for (let i = 0; i < antall; i++) {

    
    var kategori = prompt (`Hva er kategori ${i+1}`)
    var data = prompt(`Hva er dataen i kategori ${i+1}? legg til kun tall, ikke benevning`)
    //må ha dataen og kategoriene i forskjellige lister senere, så 
    // liste.push({ kategori: kategori, data: data })
    
    //Har dem i hver sin liste siden chart bibloteket funker med lister for x og y verdier som er uavhenginge av hverandre
    kategoriliste.push(kategori)
    dataliste.push(data)
  }
  console.log(kategoriliste)
  console.log(dataliste)
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function lagListe(){
  // var barColors = ["red", "blue", "yellow", "green", "orange", "purple", "pink", "brown"];
  var barColors = ["red", "blue", "yellow", "green", "orange", "pink"];

  if(dataliste.length <7){
  shuffleArray(barColors)
  fargeliste = []
  for (let i = 0; i < dataliste.length; i++) {
    
    fargeliste.push(barColors[i])
  
  }}
  else{
  fargeliste = []
  for (let i = 0; i < dataliste.length; i++) {
    var talltest = (Math.floor(Math.random() * barColors.length))

    fargeliste.push(barColors[talltest])
    // var r = Math.floor(Math.random()*255)
    // var g = Math.floor(Math.random()*255)
    // var b = Math.floor(Math.random()*255)
    // fargeliste.push('rgba('+r+', '+g+', '+b+')')
    // border.push('rgba('+r+', '+g+', '+b+', '+0.5+')')

  }
  }
  const element = document.getElementById("myChart");
  element.remove();
  // document.body.innerHTML = "<canvas id='myChart' style='width:100%;max-width:700px'></canvas>";
  var canvas = document.createElement('canvas');
  canvas.id = "myChart";
  canvas.style = "width:100%;max-width:700px";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);
  
  if (graftype == "stolpe"){
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: kategoriliste,
      datasets: [{
        backgroundColor: fargeliste,
        borderWidth: 1,
        borderColor: borderliste,
        data: dataliste
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{
          display: true,
            ticks: {
                beginAtZero: true   // minimum value will be 0.
            }
        }]
      },
      title: {
        display: true,
        text: "test"
      }
    }
  });
}
else if (graftype == "sektor"){

new Chart("myChart", {
  type: "pie",
  data: {
    labels: kategoriliste,
    datasets: [{
      backgroundColor: fargeliste,
      borderWidth: 1,
      borderColor: borderliste,
      data: dataliste
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        display: true,
          ticks: {
              beginAtZero: true   // minimum value will be 0.
          }
      }]
    },
    title: {
      display: true,
      text: "test"
    }
  }
});


}

else if (graftype == "linje"){
  new Chart("myChart", {
    type: "line",
    data: {
      labels: kategoriliste,
      datasets: [{
        fill:false,
        // backgroundColor: fargeliste,
        // borderWidth: 1,
        borderColor: 'rgb(75, 192, 192)',
        data: dataliste
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{
          display: true,
            // ticks: {
            //     beginAtZero: true   // minimum value will be 0.
            // }
        }]
      },
      title: {
        display: true,
        text: "test"
      }
    }
  });
}
else{
  alert("Du er nødt til å velge en graftype i menyen")
}
}
