<script lang="ts">
    import type { WeatherResponse } from "$lib/type";
    import WiThermometer from "$lib/assets/WiThermometer.svg";
    import WiStrongWind from "$lib/assets/WiStrongWind.svg";
    import WiRaindrops from "$lib/assets/WiRaindrops.svg";
    import WiRain from "$lib/assets/WiRain.svg";

    const {
        weather
    } : {weather: WeatherResponse}= $props();
</script>

<div class="rounded-xl bg-indigo-dye p-3">
    <h2 class="font-bold text-air-superiority-blue uppercase">Air condition</h2>
    <div class="grid grid-cols-2 gap-3">
        <div class="flex gap-2">
            <div>
                <img src={WiThermometer} alt="Thermometer, real feel">
            </div>
            <div>
                <p class="text-air-superiority-blue">Real feel</p>
                <p class="text-2xl font-bold">{weather.current.feelslike_c}°C</p>
            </div>
        </div>
        <div class="flex gap-2">
            <div>
                <img src={WiStrongWind} alt="Wind speed">
            </div>
            <div>
                <p class="text-air-superiority-blue">Wind</p>
                <p class="text-2xl font-bold">{weather.current.wind_kph} km/h</p>
            </div>
        </div>

        <div class="flex gap-2">
            <div>
                <img src={WiRaindrops} alt="Humidity">
            </div>
            <div>
                <p class="text-air-superiority-blue">Humidity</p>
                <p class="text-2xl font-bold">{weather.current.humidity}%</p>
            </div>
        </div>

        <div class="flex gap-2">
            <div>
                <img src={WiRain} alt="Humidity">
            </div>
            <div>
                <p class="text-air-superiority-blue">Chance of rain</p>
                <p class="text-2xl font-bold">{weather.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
            </div>
        </div>            
    </div>
</div>