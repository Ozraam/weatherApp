import { API_KEY, API_URL } from '$env/static/private';

export async function getWeatherByCity(city: string) {
    const url = `${API_URL}/current.json?q=${city}&key=${API_KEY}`;
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