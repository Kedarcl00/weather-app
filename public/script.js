async function getWeather() {

  const city = document.getElementById("cityInput").value;

  if(city === ""){
    alert("Please enter a location");
    return;
  }

  try {

    // Fetch from your backend server
    const response = await fetch(`/weather/${city}`);

    const data = await response.json();

    console.log(data);

    // Handle invalid city
    if(data.error){

  alert(data.error.message || "Location not found!");

  return;
}

    document.getElementById("weatherCard").style.display = "block";

    document.getElementById("cityName").innerText =
      data.location.name + ", " + data.location.country;

    document.getElementById("temp").innerText =
      "Temperature: " + data.current.temp_c + "°C";

    document.getElementById("condition").innerText =
      "Condition: " + data.current.condition.text;

    document.getElementById("humidity").innerText =
      "Humidity: " + data.current.humidity + "%";

    document.getElementById("wind").innerText =
      "Wind Speed: " + data.current.wind_kph + " km/h";

    document.getElementById("weatherIcon").src =
      "https:" + data.current.condition.icon;

  } catch (error) {

    alert("Something went wrong!");

    console.log(error);
  }
}