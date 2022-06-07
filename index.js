



const Inche = document.getElementById("In");
const Centi = document.getElementById('CM');
const Feet = document.getElementById('Ft');
const Kilo = document.getElementById('KM');

function getVal() {
    var val = document.getElementById('num').value;
    Inche.innerHTML = 'Inches : ' + (val*2.54).toFixed(6) ;
    Centi.innerHTML= 'Centi Meter : ' + (val*100).toFixed(6) ;
    Feet.innerHTML = 'Feet : ' + (val/30.48).toFixed(6);
    Kilo.innerHTML = 'Kilo Meter : ' + (val/1000).toFixed(6);
    console.log('clicked')
    
    
}

// const element = document.getElementById("num");
// element.addEventListener('change', getVal());
console.log('clicked')