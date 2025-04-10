import { getWeatherByCity } from '$lib/api/weather';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { weatherData } from '$lib/state.svelte';


export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const city = data.get('city') as string;

        const weather = await getWeatherByCity(city);

        if (weather?.error) {
            console.log("Error fetching weather data:", weather.error);
            
            return fail(400, { error: weather.error });
        }

        if (weather?.location) {
            weatherData.data = weather;
            cookies.set('city', city, {path: '/'});
            return { data: weather };
        } else {
            console.log("City not found:", city, weather);
            return fail(400, { error: 'City not found' });
        }
    }
} satisfies Actions;

export const load : PageServerLoad = async ({ cookies }) => {
    return {
        city: cookies.get('city') || 'Paris',
    };
}