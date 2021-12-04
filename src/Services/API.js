export async function userCity() {
    const req = await fetch('https://api.hgbrasil.com/weather?format=json-cors&key=2a65ec29&user_ip=remote')
    const json = await req.json();
    const filteredjson = {
        temp: json.results.temp,
        description: json.results.description,
        currently: json.results.currently,
        city: json.results.city_name,
        condition: json.results.condition_code,
        humidity: json.results.humidity,
        sunrise: json.results.sunrise,
        sunset: json.results.sunset
    }

    return filteredjson;
};

export async function getForecast(day){
    const req = await fetch('https://api.hgbrasil.com/weather?format=json-cors&key=2a65ec29&user_ip=remote')
    const json = await req.json();
    let forecast = [
        {
            date: json.results.forecast[day].date,
            weekday: json.results.forecast[day].weekday,
            description: json.results.forecast[day].description,
            min: json.results.forecast[day].min,
            max: json.results.forecast[day].max
        }
    ];
    return forecast;
}

export async function searchCity(name){
    const req = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=2a65ec29&city_name=${name}`)
    const json = await req.json();
    return json;
};
