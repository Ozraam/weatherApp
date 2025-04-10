<script lang="ts">
    import { onMount } from "svelte";
    import type { PageProps } from './$types';
    import AppNavBar from "$lib/components/AppNavBar.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";
    import WeatherDetail from "$lib/components/WeatherDetail.svelte";
    import Forecast from "$lib/components/Forecast.svelte";

    let city = $state("Paris");
    let loading = $state(false);
    let weatherData = $state(null);

    function fetchWeather() {
        
        loading = true;
        fetch("/api/currentWeather?city=" + city)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                loading = false;
                // Process the data
                weatherData = data;
                localStorage.setItem("city", city);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
                loading = false;
            });
    }

    onMount(() => {

        const localStorageCity = localStorage.getItem("city");
        if (localStorageCity) {
            city = localStorageCity;
        } else {
            localStorage.setItem("city", city);
        }

        fetchWeather();
    });
</script>

<main class="flex justify-center items-center min-h-screen bg-indigo-dye-3 text-white">
    <div class="bg-prussian-blue p-5 rounded-2xl shadow-lg flex gap-5">
        <AppNavBar/>
        <div class="flex-1">
            <SearchBar class="w-full" bind:city={city} onsubmit={() => fetchWeather()}/>
            {#if weatherData != null}
                <WeatherDetail weather={weatherData}/>
            {/if}
        </div>
    </div>
</main>
