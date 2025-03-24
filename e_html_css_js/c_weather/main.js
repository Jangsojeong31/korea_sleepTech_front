// https://openweathermap.org/

// const city = "Seoul";
// : input 창에서 지역명을 입력받는 값
// - Capitalize 사용
//    >> 시작은 대문자, 기타 문자는 소문자로 ex) London, Tokyo 등

const apikey = "760ef0024f87035f0258229107a69311"; 
const lang = 'kr';

async function getWeatherData(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

  try{
    const response = await fetch(api);

    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    displayWeather(data);

  }catch(error){
    console.error('Error: ', error);
    document.getElementById('weather-info').innerHTML = 
    `<p>날씨 정보를 불러오는 데 실패하였습니다. (${error.message})</p>`;
  }
  
}

getWeatherData();

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weather-info');
  weatherInfoDiv.innerHTML =
  `<h2>${data.name}</h2>
  <p>현재 온도: ${data.main.temp}</p>
  <p>체감 온도: ${data.main.feels_like}</p>
  <p>날씨: ${data.weather[0].main} (${data.weather[0].description})</p>
  <p></p>
  <p></p>
  `;
}

document.getElementById('search-button').addEventListener('click', () => {
  const cityInput = document.getElementById('city-input').value;
  const city = capitalizeCity(cityInput);

  if(city === ''){
    alert('지역명을 입력해주세요');
    return;
  }

  getWeatherData(city);
  document.getElementById('city-input').value=''; 

})

function capitalizeCity(city) {
  const trimCity = city.trim();
  if(trimCity.length === '') return '';

  return trimCity.charAt(0).toUpperCase() + trimCity.slice(1).toLowerCase();

}

// 엔터키로 검색
document.getElementById('city-input').addEventListener('keyup', (e) => {
  if(e.key === "Enter") {
    document.getElementById('search-button').click(); // 버튼을 클릭한 것과 같은 효과
  }
})


