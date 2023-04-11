import axios from "axios";
import axiosCancel from "axios-cancel";
import Router from "next/router";   
import { objectEsekh, isNullOrUndefined } from "../components";

var serveriinMedeelel = "localhost:8000";
var chiglel = "localhost";
var khandakhErkh;

axiosCancel(axios);

export const uilchilgeeDuudagch = (serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa) => {
    return new Promise(function (resolve, reject) {
        kholbogch(serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa, resolve);
    });
};

const kholbogch = (serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa, resolve) => {
    let serviceURI ="api"
    let baseURL = `http://${serveriinMedeelel}${serviceURI}/${serviceName}`;

    let isString = (typeof param) === 'string';
    let contentType = isString ? 'text/plain; charset=utf-8' : (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';

    let option = {
        headers: {
            "Cache-Control": "no-cache",
            "Accept": "application/json",
            "Content-Type": `${contentType}`,
            "Authorization": `Bearer`,
            "tulkhuur": khandakhErkh?.tulkhuur,
            "chiglel": `${chiglel}`,
        },
        timeout: fileTokhirgoo ? 3000000 : isNullOrUndefined(khuleekhKhugatsaa) ? 30000 : khuleekhKhugatsaa,
    };

    if (objectEsekh(fileTokhirgoo)) option = { ...option, ...fileTokhirgoo };
    
    if (param === null || param === undefined || param === "") param = " ";
//   console.log('callService isString', isString)
//     console.log('callService option', option)
//     console.log('callService param', param)
//     console.log('callService baseURL', baseURL)
    axios
        .post(baseURL, isString || fileTokhirgoo == true ? param : JSON.stringify(param), option)
        .then((response) => {
            resolve(response.data); 
        })
        .catch((error) => { resolve("aldaa"); console.log(error) });
}; 