import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getWeatherByCity } from '$lib/api/weather';

export const GET: RequestHandler = async ({ url }) => {
	const city = url.searchParams.get('city') ?? '';

	if (!city) {
		error(400, 'City is required');
	}

	const weather = await getWeatherByCity(city);

	if (weather?.error) {
		console.log("Error fetching weather data:", weather.error);
		return error(400, { message: weather.error });
	}

	return new Response(JSON.stringify(weather), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store',
		},
	});
};