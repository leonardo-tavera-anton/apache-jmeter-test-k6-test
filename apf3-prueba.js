
import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.URL || 'https://turimar-backend.onrender.com';
const VUS = Number(__ENV.VUS || 50);

export const options = {
  stages: [
    { duration: '30s', target: VUS },
    { duration: '1m', target: VUS },
    { duration: '30s', target: 0 },
  ],

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<2000'],
  },
};

export default function () {

  const response = http.get(`${BASE_URL}/api/v1/locales`);

  check(response, {
    'Estado HTTP 200': (r) => r.status === 200,
    'Tiempo menor a 2 segundos': (r) => r.timings.duration < 2000,
  });

  sleep(1);
}
