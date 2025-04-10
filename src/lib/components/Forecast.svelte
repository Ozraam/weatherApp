<script lang="ts">
    import type { WeatherResponse } from "$lib/type";

    const { weatherForcast, class: class_ = "" } : {weatherForcast: WeatherResponse, class: string} = $props();

    function stringToDateToDayName(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { weekday: "long" });
    }
</script>

<div class="rounded-xl bg-indigo-dye p-3">
    <h2 class="font-bold text-air-superiority-blue uppercase">Forecast</h2>
    <ul>
        {#each weatherForcast.forecast.forecastday as day}
            <li class="grid grid-cols-[0.5fr_1fr_0.5fr] gap-2 items-center">
                <p>
                    {stringToDateToDayName(day.date)}
                </p>
                <div class="flex  items-center">
                    <img src={day.day.condition.icon} alt="Weather Icon" class=" aspect-square object-fill" />
                    <p>{day.day.condition.text}</p>
                </div>
                <div class="flex gap-1 justify-end">
                    <p class="font-bold">{day.day.maxtemp_c}</p>
                    <p class="font-bold text-white/50">{day.day.mintemp_c}</p>
                </div>
            </li>

            <div class="h-[1px] bg-air-superiority-blue/25 last:hidden"></div>
        {/each}
    </ul>
</div>
