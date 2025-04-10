<script lang="ts">
    import type { WeatherResponse } from "$lib/type";

    const {
        weather
    } : {weather: WeatherResponse}= $props();
</script>

<div class="rounded-xl bg-indigo-dye uppercase p-3">
    <h2 class="font-bold text-air-superiority-blue">Today's forecast</h2>
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