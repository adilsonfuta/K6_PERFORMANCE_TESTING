require('dotenv').config();
import http from 'k6/http';
import {sleep} from 'k6';
// const url = process.env.URL_LOAD;

export default function () {
    http.get(url);
    sleep(1);
}