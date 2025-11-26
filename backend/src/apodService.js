const axios = require('axios');
const { LRUCache } = require('lru-cache');

const ttl = (process.env.CACHE_TTL_SECONDS ? Number(process.env.CACHE_TTL_SECONDS) : 3600) * 1000;
const max = process.env.CACHE_MAX_ITEMS ? Number(process.env.CACHE_MAX_ITEMS) : 200;

const cache = new LRUCache({
  max: max,
  ttl: ttl
});

const NASA_BASE = 'https://api.nasa.gov/planetary/apod';
const API_KEY = process.env.NASA_API_KEY;

async function fetchFromNasa(params) {
  if (!API_KEY) throw new Error('NASA_API_KEY missing');

  const key = `${NASA_BASE}?${new URLSearchParams({ ...params, api_key: API_KEY })}`;

  if (cache.has(key)) return cache.get(key);

  const resp = await axios.get(NASA_BASE, {
    params: { ...params, api_key: API_KEY }
  });

  cache.set(key, resp.data);
  return resp.data;
}

module.exports = {
  getToday: () => fetchFromNasa({}),
  getByDate: (date) => fetchFromNasa({ date }),
  getRange: (start, end) => fetchFromNasa({ start_date: start, end_date: end })
};
