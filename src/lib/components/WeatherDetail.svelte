<script lang="ts">
    import type { WeatherResponse } from "$lib/type";
    import WeatherHeader from "./WeatherHeader.svelte";
    import HourlyForecast from "./HourlyForecast.svelte";
    import AirConditions from "./AirConditions.svelte";

    const {
        weather
    } : {weather: WeatherResponse}= $props();
</script>

<div class="max-w-4xl flex flex-col gap-3">
    <WeatherHeader weather={weather} />
    <HourlyForecast weather={weather} />
    <AirConditions weather={weather} />
</div>