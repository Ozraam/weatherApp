import { API_KEY, API_URL } from '$env/static/private';

export async function getWeatherByCity(city: string) {
    const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.ok) {
        return await res.json();
    }
  }