//RELEASE 0

var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.png'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.png'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.png'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.png']
]


function cetakdata(dataArray){
    var dataCard="";

    for (var i=0; i<dataArray.length; i++){
        dataCard += ` <div class="col-md-4 mt-2 mb-2"  id="listBarang" >
                    <div class="card" style="width:21rem; margin-top=2px; ">
                    <img src="./img/${dataArray[i][4]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" id="itemName">${dataArray[i][1]}</h5>
                        <p class="card-text" id="itemDesc">${dataArray[i][3]}</p>
                        <p class="card-text">Rp ${dataArray[i][2]}</p>
                        <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                    </div>
                    </div>
                </div>
    `
    } return dataCard;
}
document.getElementById('listBarang').innerHTML=cetakdata(items);

//RELEASE 1

    var cari= document.getElementById('formItem');
    cari.addEventListener("submit", function(e){
        e.preventDefault();
        var kataKunci =document.getElementById("keyword").value;


        var terFilter = filter(kataKunci);
        document.getElementById('listBarang').innerHTML = cetakdata(filter(kataKunci));
    })

    function filter(kata){
        var filtered = [];
        for(var k=0 ;k <items.length;k++){
            var NamaItem= items[k][1].toLowerCase();
            var kataa =kata.toLowerCase();
            if(NamaItem.includes(kataa)){
                filtered.push(items[k]);
            }
        } return filtered;
    }


//RELEASE 2
var cartt = document.querySelectorAll('addCart');
var keranjang= document.getElementById('cart');

var angka =0;
cartt.forEach(function(ev){
    ev.addEventListener('click', function(evt){
        ev.preventDefault();
        angka +=1;
        console.log(angka)  
    });
   
});



