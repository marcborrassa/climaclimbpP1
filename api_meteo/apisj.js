         function httpGet(url, key, callback) {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open('GET', url, true);
   xmlHttp.setRequestHeader('X-Api-Key', '4HmTxc7yun4KyeLaNe0dyaDeVBZpj0SW1APUTpmn');
   xmlHttp.setRequestHeader('Content-Type', 'application/json');
   xmlHttp.onload = function () {
      //pasem el retorn a la funció callback
      callback(this.responseText);
   };
   xmlHttp.onerror = function () {
      document.getElementById('txt1').innerHTML =
      "hi ha hagut un error en la consulta a l'API";
   };
   xmlHttp.send();
}

 function testingAPI() {
    var key = '4HmTxc7yun4KyeLaNe0dyaDeVBZpj0SW1APUTpmn';
    var url = 'https://api.meteo.cat/xema/v1/estacions/metadades?estat=ope&data=2017-03-27Z';
    httpGet(url, key, function (data) {
       //TODO data té els valors del retorn de la consulta a l'API, en aquest cas els mostrem per pantalla en plà i en la consola del navegador
       document.getElementById('txt1').innerHTML = data;
       console.log(data);
    });
 }