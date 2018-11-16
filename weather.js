// const showWeather = function(data){

// }

const showWeather = (data)=>{
    // saving the tempurature to a variable
    const current_weather = data.current.temp_f
    // saving the condition to a variable
    const condition = data.current.condition.text
    // changing the html of the element with an id of weather-value to current_weather
    $("#weather-value").html(current_weather)
    // changing the html of the element with an id of condition to condition
    $("#condition").html(condition)
}

// the function that get's the data
const getWeather = (apiKey, city) =>{
    // builds the url string with the apiKey and city
    const weatherURL = "http://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + city

    // makes an ajax call to the weatherURL and calls the showWeather function with the data
    $.ajax({
        url: weatherURL,
        success: showWeather,
    })
    }
// biolerplate function that gets called when the DOM is ready
$(document).ready(function() {
    // saving the apiKey to a variable
    const apiKey = "c8f817b33fd7443aa10150432181311"
    // puts an eventlistner on the element that has an id of gets-weather 
    $("#get-weather").on("click", function(){
    // grab the value that is in the input with an id of city, saves it to city
    let city = $("#city").val()
    // calls the getWeather function with the apiKey and city
    getWeather(apiKey, city)
    })
    });