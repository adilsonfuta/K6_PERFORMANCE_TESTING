// require('dotenv').config();
import http from 'k6/http';
import {sleep} from 'k6';
// const url = process.env.URL_LOAD;

export const options = {
    vus: 5,
    duration: '30s',
  };

export default function () {
    http.get("https://test.k6.io/");
    sleep(1);
}