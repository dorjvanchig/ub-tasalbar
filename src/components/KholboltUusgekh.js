import axios from "axios";
import axiosCancel from "axios-cancel";
import Router from "next/router";   
import { objectEsekh, isNullOrUndefined } from "../components";

var serveriinMedeelel = "localhost:8000";
axiosCancel(axios);

export const uilchilgeeDuudagch = (uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa) => {
    return new Promise(function (resolve, reject) {
        kholbogch(uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa, resolve);
    });
};

const kholbogch = (uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa, resolve) => {
    let serviceURI ="api"
    let baseURL = `http://${serveriinMedeelel}/${serviceURI}/${uilchilgeeniiNer}`;

    let isString = (typeof damjuulakhUtga) === 'string';
    let contentType = isString ? 'text/plain; charset=utf-8' : (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';

    let option = {
        headers: {
            "Cache-Control": "no-cache",
            "Accept": "application/json",
            "Content-Type": `${contentType}`,
        },
        timeout: fileTokhirgoo ? 3000000 : isNullOrUndefined(khuleekhKhugatsaa) ? 30000 : khuleekhKhugatsaa,
    };

    if (objectEsekh(fileTokhirgoo)) option = { ...option, ...fileTokhirgoo };
    console.log('baseURL',baseURL, 'damjuulakhUtga', damjuulakhUtga)
    if (damjuulakhUtga === null || damjuulakhUtga === undefined || damjuulakhUtga === "") damjuulakhUtga = " "; 
    axios
        .post(baseURL, isString || fileTokhirgoo == true ? damjuulakhUtga : JSON.stringify(damjuulakhUtga), option)
        .then((response) => {
            resolve(response.data); 
        })
        .catch((error) => { 
            let aldaa = !isNullOrUndefined(error.response?.data?.aldaa) ? error.response?.data?.aldaa : error.response?.data?.error
            resolve(aldaa) 
        });
}; 

export const khereglegchMedeelel = () => {
    let snkhm = localStorage.getItem("SKHM");
    return !isNullOrUndefined(snkhm) ? JSON.parse(snkhm) : undefined;
};

export const khereglegchUstgakh = () => {
    localStorage.removeItem("SKHM");
};