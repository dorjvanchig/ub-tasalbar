import axios from "axios";
import axiosCancel from "axios-cancel";
import Router from "next/router";   
import { objectEsekh, isNullOrUndefined } from "../components";

var serveriinMedeelel = "localhost:8000";
// var serveriinMedeelel = "192.168.100.47:8000";
axiosCancel(axios);

export const uilchilgeeDuudagch = (uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa) => {
    return new Promise(function (resolve, reject) {
        kholbogch(uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa, resolve);
    });
};

const kholbogch = (uilchilgeeniiNer, damjuulakhUtga = "", fileTokhirgoo, khuleekhKhugatsaa, resolve) => {
    let serviceURI ="api"
    let baseURL = `http://${serveriinMedeelel}/${serviceURI}/${uilchilgeeniiNer}`;

    let isString = (typeof damjuulakhUtga) === 'string';
    let contentType = isString ? 'text/plain; charset=utf-8' : (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';
    let object = khereglegchMedeelel()
    let option = {
        headers: {
            "Cache-Control": "no-cache",
            "Accept": "application/json",
            'Access-Control-Allow-Origin':'*',
            "Authorization": `Bearer ${object?.token}`,
            "Content-Type": `${contentType}`,
        },
        timeout: fileTokhirgoo ? 3000000 : isNullOrUndefined(khuleekhKhugatsaa) ? 30000 : khuleekhKhugatsaa,
    };

    if (objectEsekh(fileTokhirgoo)) option = { ...option, ...fileTokhirgoo }; 
    if (damjuulakhUtga === null || damjuulakhUtga === undefined || damjuulakhUtga === "") damjuulakhUtga = " "; 
    console.log('damjuulakhUtga',damjuulakhUtga)
    axios
        .post(baseURL, isString || fileTokhirgoo == true ? damjuulakhUtga : JSON.stringify(damjuulakhUtga), option)
        .then((response) => {
            console.log('response',response)
            resolve(response.data); 
        })
        .catch((error) => { 
            console.log('error',error)
            resolve({aldaataiEsekh:true, error}) 
        });
}; 
export const khereglegchMedeelelKhadgalakh = (medeelel) => {
    localStorage.setItem("SKHM", JSON.stringify(medeelel));
};

export const khereglegchMedeelel = () => {
    let snkhm = localStorage.getItem("SKHM");
    return !isNullOrUndefined(snkhm) ? JSON.parse(snkhm) : undefined;
};

export const khereglegchUstgakh = () => {
    localStorage.removeItem("SKHM");
};