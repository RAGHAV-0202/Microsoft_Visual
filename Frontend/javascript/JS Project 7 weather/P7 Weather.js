// console.time('Full page')

const container = document.querySelector('.container');
const timeDIV = document.querySelector('.timeDIV')
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

const regionNames = new Intl.DisplayNames(
  ['en'], {type: 'region'}
);

// console.time('Part 2')

function search(){

    const APIKey = 'f4c9b1f6671b1e6290662baa534a8ad9';
    const city = document.querySelector('.search input').value;

    if(city === '')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

            if(json.cod === '404'){
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn')
                return;
            }
            error404.style.display = 'none'
            error404.classList.remove('fadeIn')
            
            const image = document.querySelector('.weather-box img')
            const temperature = document.querySelector('.temperature')
            const description = document.querySelector('.description');
            const humidity = document.querySelector('.weather-details .humidity .text span')
            const wind = document.querySelector('.weather-details .wind .text span')
            const location = document.querySelector('.location')
                

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°c</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            var timezone = `${parseInt(json.timezone)}`

            var countryName = regionNames.of(`${json.sys.country}`)
            location.innerHTML= `${city}, ${countryName}`

            var date = new Date();
            var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
            var offset = timezone * 1000;
            var localTime = new Date(utcTime + offset);
            var month = (localTime.getMonth() + 1).toString().padStart(2, '0');
            var day = localTime.getDate().toString()
            var year = localTime.getFullYear().toString().padStart(2, '0');
            var hours = localTime.getHours().toString()
            var realhours = localTime.getHours().toString().padStart(2, '0');
            var minutes = localTime.getMinutes().toString().padStart(2, '0');
            var formattedTime = hours + ':' + minutes;
            
            // console.log(realhours)
            if (hours < 12){
                if (hours == 0){
                    hours = 12
                }
                formattedTime = hours + ':' + minutes + " AM"
            }else {
                hours = hours - 12
                if (hours == 0){
                    hours = 12
                }
                formattedTime = hours + ':' + minutes +  " PM"
            }

            if(month == 1){
                monthNAME = 'January'
            }else if (month == 2){
                monthNAME = "February"
            }else if (month == 3){
                monthNAME = "March"
            }else if (month == 4){
                monthNAME = "April"
            }else if (month == 5){
                monthNAME = "May"
            }else if (month == 6){
                monthNAME = "June"
            }else if (month == 7){
                monthNAME = "July"
            }else if (month == 8){
                monthNAME = "August"
            }else if (month == 9){
                monthNAME = "September"
            }else if (month == 10){
                montNAMEh = "October"
            }else if (month == 11){
                monthNAME = "November"
            }else if (month == 2){
                monthNAME = "December"
            }
            
            if(realhours > 19 || realhours < 5){
                switch(json.weather[0].main){
                case 'Clear':
                    image.src = 'weather custom/night clear.png';
                    break;
                case 'Rain':
                    if(json.weather[0].description == 'light rain'){
                        image.src = 'weather custom/night rain.png'
                    }else if(json.weather[0].description == 'moderate rain'){
                        image.src = 'weather custom/moderate.png'
                    }else if(json.weather[0].description == 'heavy intensity rain'){
                        image.src = 'weather custom/heavy rain.png'
                    }else if(json.weather[0].description == 'very heavy rain'){
                        image.src = 'weather custom/heavy rain.png'
                    }else if(json.weather[0].description == 'extreme rain'){
                        image.src = 'weather custom/heavy rain.png'
                    }else {
                        image.src = 'weather custom/night rain.png'
                    }
                    break;
                case 'Clouds':
                    if(json.weather[0].description =='few clouds'){
                        image.src = 'weather custom/night broken cloud.png' ;
                    }else if(json.weather[0].description =='scattered clouds'){
                        image.src = 'weather custom/night scattered.png'
                    }else if(json.weather[0].description =='broken clouds'){
                        image.src = 'weather custom/night broken cloud.png'
                    }else if(json.weather[0].description =='overcast clouds'){
                        image.src = 'weather custom/overcast clouds2.png '
                    } 
                    break;
                case 'Snow':
                    image.src = 'weather custom/night snow.png';
                    break;
                case 'Haze':
                    image.src = 'weather custom/night mist.png';
                    break;
                case 'Mist':
                    image.src = 'weather custom/night mist.png';
                    break;                   
                case 'Thunderstorm':
                    if(json.weather[0].description == 'thunderstorm with light rain'){
                        image.src = 'weather custom/night thunder.png'
                    }else if(json.weather[0].description == 'thunderstorm with rain'){
                        image.src = 'weather custom/night thunder.png'
                    }else if(json.weather[0].description == 'thunderstorm with heavy rain'){
                        image.src = 'weather custom/thunderstorm with rain.png'
                    }else if(json.weather[0].description == 'light thunderstorm'){
                        image.src = 'weather custom/light thunderstorm.png'
                    }else if(json.weather[0].description == 'thunderstorm'){
                        image.src = 'weather custom/thunderstrom.png'
                    }else if(json.weather[0].description == 'heavy thunderstorm'){
                        image.src = 'weather custom/thunderstrom.png'
                    }else {
                        image.src = 'weather custom/thunderstrom.ng'
                    }
                    break;
                case 'Tornado':
                    image.src = 'weather custom/tornado.png';
                    break;
                case 'Dust':
                    image.src = 'weather custom/dust.png';
                    break;
                case 'Fog':
                    image.src = 'weather custom/fog.png';
                    break;
                case 'Smoke':
                    image.src = 'weather custom/smoke.png';
                    break;
                case 'Drizzle':
                    image.src = 'weather custom/drizzle.png';
                    break;
                default:
                    image.src='weather custom/night clear.png';
            }   
            }else{
                switch(json.weather[0].main){
                case 'Clear':
                    image.src = 'weather custom/clear sky.png';                       
                    break;
                case 'Rain':
                    if(json.weather[0].description == 'light rain'){
                        image.src = 'weather custom/light rain.png'
                    }else if(json.weather[0].description == 'moderate rain'){
                        image.src = 'weather custom/moderate rain.png'
                    }else if(json.weather[0].description == 'heavy intensity rain'){
                        image.src = 'weather custom/heavy rain.png'
                    }else if(json.weather[0].description == 'very heavy rain'){
                        image.src = 'weather custom/heavy rain.png'
                    }else if(json.weather[0].description == 'extreme rain'){
                        image.src = 'weather custom/heavy rain.png'
                    }else if (json.weather[0].description == 'shower rain') {
                        image.src = 'weather custom/shower rain.png'
                    }else {
                        image.src = 'weather custom/light rain.png'
                    }                   
                    break;
                case 'Clouds':
                    if(json.weather[0].description =='few clouds'){
                        image.src = 'weather custom/few clouds.png' ;
                    }else if(json.weather[0].description =='scattered clouds'){
                        image.src = 'weather custom/scattered clouds.png'
                    }else if(json.weather[0].description =='broken clouds'){
                        image.src = 'weather custom/scattered clouds.png'
                    }else if(json.weather[0].description =='overcast clouds'){
                        image.src = 'weather custom/overcast clouds2.png'
                    }                        
                    break;
                case 'Snow':
                    image.src = 'weather custom/snow.png';
                    break;
                case 'Haze':
                    image.src = 'weather custom/mist.png';
                    break;
                case 'Mist':
                    image.src = 'weather custom/mist.png';
                    break;                   
                case 'Thunderstorm':
                    if(json.weather[0].description == 'thunderstorm with light rain'){
                        image.src = 'weather custom/light thunderstorm.png'
                    }else if(json.weather[0].description == 'thunderstorm with rain'){
                        image.src = 'weather custom/light thunderstorm.png'
                    }else if(json.weather[0].description == 'thunderstorm with heavy rain'){
                        image.src = 'weather custom/thunderstorm with rain.png'
                    }else if(json.weather[0].description == 'light thunderstorm'){
                        image.src = 'weather custom/light thunderstorm.png'
                    }else if(json.weather[0].description == 'thunderstorm'){
                        image.src = 'weather custom/thunderstrom.png'
                    }else if(json.weather[0].description == 'heavy thunderstorm'){
                        image.src = 'weather custom/thunderstrom.png'
                    }else {
                        image.src = 'weather custom/thunderstrom.ng'
                    }
                    break;
                case 'Tornado':
                    image.src = 'weather custom/tornado.png';
                    break;
                case 'Dust':
                    image.src = 'weather custom/dust.png';
                    break;
                case 'Fog':
                    image.src = 'weather custom/fog.png';
                    break;
                case 'Smoke':
                    image.src = 'weather custom/smoke.png';
                    break;
                case 'Drizzle':
                    image.src = 'weather custom/drizzle.png';
                    break;

                default:
                    image.src='weather custom/clear sky.png';
            }
            }
            
            document.querySelector('.time').innerText = formattedTime
            document.querySelector('.date').innerText = day + " " + monthNAME + " " + year

            // console.log(wind , humidity , temperature , description)
            // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)

            weatherBox.style.display = 'flex';
            timeDIV.classList.add('fadeIn')
            weatherDetails.style.display = 'flex';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');

            function myFunction(x) {
                if (x.matches) { // If media query matches
                container.style.height = '100%';
                } else {
                container.style.height = '640px';
                }
            }
            var x = window.matchMedia("(max-width: 700px)")
            myFunction(x) // Call listener function at run time
            x.addListener(myFunction)
        }
)}

// console.timeEnd('Part 2')
// console.timeEnd('Full page')
