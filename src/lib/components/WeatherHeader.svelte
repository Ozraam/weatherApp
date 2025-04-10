<script lang="ts">
    import type { WeatherResponse } from "$lib/type";

    const {
        weather
    } : {weather: WeatherResponse}= $props();
</script>

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