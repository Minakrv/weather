const fetch = require('node-fetch');
const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=2df125ed5ea250c03e42147f1dd09c77&units=metric`;

const getWeather = async()=> {
    let data = await fetch(url);
    console.log(await data.json());
};

getWeather();