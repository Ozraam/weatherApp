<script lang="ts">
    import type { WeatherResponse } from "$lib/type";
    import WiThermometer from "$lib/assets/WiThermometer.svg";

    const {
        weather
    } : {weather: WeatherResponse}= $props();
</script>

<div class="max-w-4xl flex flex-col gap-3">
    <div class="flex justify-between">
        <div class="flex flex-col gap-8">
            <div>
                <h1 class="text-5xl font-bold">{weather.location.name}</h1>
                <p class="text-2xl font-semibold">{weather.current.condition.text}</p>
                <p>Humidity: {weather.current.humidity}%</p>
            </div>
            <p class="text-6xl font-bold">
                {weather.current.temp_c}°C
            </p>
        </div>
        <img src="{weather.current.condition.icon}" alt="" class="w-60 aspect-square object-fill" />
    </div>

    <div class="rounded-xl bg-indigo-dye uppercase p-3">
        <h2 class="font-bold  text-air-superiority-blue">Today's forecast</h2>
        <ul class="flex overflow-x-auto">
            {#each weather.forecast.forecastday[0].hour.filter((v, i) => i%3==0) as hour}
                <li class="flex flex-col items-center justify-center gap-2 rounded-xl m-2">
                    <p>{hour.time.slice(-5)}</p>
                    <img src="{hour.condition.icon}" alt="" class="w-20 aspect-square object-fill" />
                    <p>{hour.temp_c}°</p>
                </li>
                
                <li class="w-[1px] bg-air-superiority-blue/25 last:hidden"></li>
            {/each}
        </ul>
    </div>

    <div class="rounded-xl bg-indigo-dye p-3">
        <h2 class="font-bold text-air-superiority-blue uppercase">Air condition</h2>
        <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col gap-2">
                <div>
                    <img src={WiThermometer} alt="Thermometer, real feel">
                </div>
                <div>
                    <p>Real feel</p>
                    <p class="text-2xl font-bold">{weather.current.feelslike_c}°C</p>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>Feels like: {weather.current.feelslike_c}°C</p>
                <p>UV index: {weather.current.uv}</p>
                <p>Gusts: {weather.current.gust_kph} km/h</p>
            </div>

        </div>
    </div>
</div>