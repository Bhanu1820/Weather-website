var city="";

document.getElementById("find_butt").onclick= function(){
	city=document.getElementById("input_city").value;
	document.getElementById("test").innerHTML=city;
	
	getdata(city);

}
console.log(city);

function getdata(cityname){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cd27ae347fmsh4bffe64cbd6f1acp130ca8jsnbb50db0c3909',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}

	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
		.then(response => response.json())
		.then(response => {console.log(response);
		
			//properties set
			document.getElementById("temp").innerHTML=response.feels_like;
			document.getElementById("max_temp").innerHTML=response.max_temp;
			document.getElementById("min_temp").innerHTML=response.min_temp;
			document.getElementById("cloud_pct").innerHTML=response.cloud_pct;
			document.getElementById("humidity").innerHTML=response.humidity;
			document.getElementById("wind_speed").innerHTML=response.wind_speed;
			document.getElementById("wind_degrees").innerHTML=response.wind_degrees;
		
		
		})
		.catch(err => console.error(err));
		
}
getdata("Delhi");

