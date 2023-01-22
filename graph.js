const table = document.querySelector("#table1");
const rows = table.querySelectorAll("tbody tr");
const Td = table.querySelectorAll("td:nth-of-type(1)");
const ligne = table.querySelectorAll(" td:not(:first-child)");
const labell = [...Td].map((element) => element.innerText);
const dataArray = [...ligne].map((element) => element.innerText);

let data = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
  datasets: [],
};

for (var i = 0; i < dataArray.length; i += 12) {
  var country = dataArray[i];
  var countryData = {
    label: country,
    data: [],
    borderColor: ["blue","red","green",],
    hoverBorderWidth:4,
  };
  for (var j = 1; j < 13; j++) {
    countryData.data.push(parseInt(dataArray[i + j]));
    /*initialisation un objet "data" qui contient des labels qui pointent sur country
     pour l'axe des x (2006-2012) et un tableau vide pour les ensembles de données. Ensuite, 
      une boucle for pour parcourir le dataArray, 
     où il prend chaque 12e élément comme country calcul +12 et 
     créer un nouvel objet  "countryData" 
    a vec une étiquette définie sur le pays et un tableau de données vide. 
     Il utilise ensuite une autre boucle for pour parcourir les éléments restants du dataArray,
      en commençant par l'index suivant après le pays, donc i+j comme je fais a java dans afraylist pour tjrs evite
      r first colonne,
      et les pousse sous forme de nombres  dans le tableau "countryData.data".avec parseint come java.
     Enfin, il pousse l'objet "countryData" dans le tableau "data.datasets"*/
  }
  data.datasets.push(countryData);
}

var ctx = document.getElementById("myChart").getContext("2d");
var mychart = new Chart(ctx, {
  type: "bar",

  // The data for our dataset
  data: data,
  // Configuration options
  options: {
    title:{
        display:true,
        text:"Crime statistics",
    },
    

    }
    
    
});

