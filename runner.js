import http from 'k6/http';
import {sleep} from 'k6';

export default function () {
    const url ='https://test.k6.io';
    http.get(url);
    sleep(1);
}