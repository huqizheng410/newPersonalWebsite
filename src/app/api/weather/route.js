// app/api/weather/route.js
import cache from 'memory-cache';

export async function GET(req) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const cacheKey = 'weatherData';
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse) {
    console.log('Returning cached response:', cachedResponse);
    return new Response(JSON.stringify(cachedResponse), { status: 200 });
  }

  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=Auckland`
    );
    const data = await response.json();
    
    // Log the fetched data
    console.log('Fetched Data:', data);

    // Cache the response for 10 hour (36000000 milliseconds)
    cache.put(cacheKey, data, 36000000);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching data' }), { status: 500 });
  }
}
