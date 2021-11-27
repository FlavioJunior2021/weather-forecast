import { wait } from "@testing-library/dom";

export async function userCity() {
    const req = await fetch('https://api.hgbrasil.com/weather?format=json-cors&key=3dd66b95&user_ip=remote')
    const json = await req.json();
    const filteredjson = {
        temp: json.results.temp,
        description: json.results.description,
        currently: json.results.currently,
        city: json.results.city_name,
        humidity: json.results.humidity,
        sunrise: json.results.sunrise,
        sunset: json.results.sunset
    }

    return filteredjson;
};

export async function searchCity(name){
    const req = await fetch(`https://api.hgbrasil.com/weather?key=3dd66b95$city_name=${name}`)
    const json = await req.json();
    return json;
};
