
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal - Aujourd'hui
      var main0 = data.list[0].weather[0].main;
      var description0 = data.list[0].weather[0].description;
      var temp0 = data.list[0].temp.day;
      var icon0 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      
      // Modifier le DOM - Aujourd'hui
      document.getElementById('today-forecast-main0').innerHTML = main0;
      document.getElementById('today-forecast-more-info0').innerHTML = description0;
      document.getElementById('icon-weather-container0').innerHTML = icon0;
      document.getElementById('today-forecast-temp0').innerHTML = `${temp0}°C`;


      // On récupère l'information principal - Demain
      var main1 = data.list[1].weather[0].main;
      var description1 = data.list[1].weather[0].description;
      var temp1 = data.list[1].temp.day;
      var icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      
      // Modifier le DOM - Demain
      document.getElementById('today-forecast-main1').innerHTML = main1;
      document.getElementById('today-forecast-more-info1').innerHTML = description1;
      document.getElementById('icon-weather-container1').innerHTML = icon1;
      document.getElementById('today-forecast-temp1').innerHTML = `${temp1}°C`;


      // On récupère l'information principal - Aprés-Demain
      var main2 = data.list[2].weather[0].main;
      var description2 = data.list[2].weather[0].description;
      var temp2 = data.list[2].temp.day;
      var icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);
      
      // Modifier le DOM - Aprés-Demain
      document.getElementById('today-forecast-main2').innerHTML = main2;
      document.getElementById('today-forecast-more-info2').innerHTML = description2;
      document.getElementById('icon-weather-container2').innerHTML = icon2;
      document.getElementById('today-forecast-temp2').innerHTML = `${temp2}°C`;


      // On récupère l'information principal - Encore Aprés-Demain
      var main3 = data.list[3].weather[0].main;
      var description3 = data.list[3].weather[0].description;
      var temp3 = data.list[3].temp.day;
      var icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);
      
      // Modifier le DOM - Encore Aprés-Demain
      document.getElementById('today-forecast-main3').innerHTML = main3;
      document.getElementById('today-forecast-more-info3').innerHTML = description3;
      document.getElementById('icon-weather-container3').innerHTML = icon3;
      document.getElementById('today-forecast-temp3').innerHTML = `${temp3}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
