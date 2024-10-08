import axios from 'axios';

const viteHttp = axios.create({ timeout: 0, baseURL: 'http://localhost:9527/' });
export { viteHttp };
