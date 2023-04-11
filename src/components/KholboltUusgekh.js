import base64 from "base-64";
import axios from "axios";
import axiosCancel from "axios-cancel";
import Router from "next/router";
import { medeeKharuulakh } from "../../antKheregluur/IBIMedee";
import { objectEsekh, isNullOrUndefined, nevtersenKhereglegchiinMedeelelAvya, nevtersenKhereglegchUstgaya } from "../../index";
import { Modal } from "antd";
import { KHOLBOKHZAM } from "KholbokhZamuud";

const { warning } = Modal;

var counter = 0;
var toolokhConRef = 0
var serveriinMedeelel = "localhost:9790";
var chiglel = "localhost";
var khandakhErkh;

export function khzama(nevrekhEsekh) {
    let baseURL = `http://${serveriinMedeelel}/osutg/tkhta`;
    let headers = {
        'Content-Type': 'text/plain; charset=utf-8',
        // "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + base64.encode("ibi-urtuu" + ":" + "4hnp(ftKk=3-2*ve"),
    };
    let data =
        "IW388lrS/spt8XevlpEq36Nuq5xh+W8o53L+k61UYz5IFa23LjhnhMGjG+X7xjuDAjMc9iR0NLz8=eDFAmYdz6JLEDME8BQa0Ynq9pX/W+nbbw6zvPTh6eds5PinEB0MseQTwjq2fSCs844JZbMi0S8qQ=";
    let body = nevrekhEsekh ? data : khandakhErkh && khandakhErkh.tasalbar;

    if (counter == 2) {
        headers.tseg = "dmstg";
        // body = "bXusMnmhteqvTIPS/7FJ0iwI0cxlzZYpdtB9oCDIXUMn/P3XdTsdq8i7+8jS9IekZICxYjJq8hZx7erUa7FtfLmjs/ewoS0uP4QkKUbq8+yzhbbeyJL9gkgikPLmNX1AmgFFaom8qYAPb6ulcz3CUoPV0wLha7rjr0yD0v+xSdLYTx05BKLy3oTxmWzgY9i5v6OMVhFXXFg="
        body =
            "bXusMnmhteqvTIPS/7FJ0lPhKiiUZBQjbXusMnmhteqvTIPS/7FJ0hRi//UJmcu8L3RduJXrw4Yy+UXNDMjXFZJrhO4kaao7s0Mv6MXVSUts9W/ehvQ85jATUzoWJ1WIW388lrS/spt8XevlpEq36Nuq5xh+W8o53L+k61UYz5IFa23LjhnhMGjG+X7xjuDAjMc9iR0NLz8=";
    } else if (counter == 3) {
        headers.tseg = "dustg";
        body =
            "bXusMnmhteqvTIPS/7FJ0okh4Kx0aQWUdtB9oCDIXUMn/P3XdTsdq8i7+8jS9IeknKaczi5qR5eu6BCg7Ow45KLjvXc5bGu0Fk95Gn2/zpKUc09Wo/h2NUgikPLmNX1AmgFFaom8qYCiaj5BUdzRU4PV0wLha7rjr0yD0v+xSdIqz347qKS7qeyofjHiQiNNtlfha7Pk5T0=";
    }

    let promise = new Promise(function (resolve, reject) {
        let options = {
            headers: headers,
            timeout: 2000,
        };

        console.log('khzama options', options)
        console.log('khzama body', body)
        console.log('khzama baseURL', baseURL)

        axios
            .post(baseURL, body, options)
            .then((response) => {
                console.log('khzama response', response)
                if (response.status === 200) resolve(response.data);
                else resolve(null);
            })
            .catch(function (error) {
                console.log('khzama error', error)
                resolve(null);
            });
    });
    return promise;
}

axiosCancel(axios);

export const callService = (serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa) => {
    return new Promise(function (resolve, reject) {
        callServiceAjiluulya(serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa, resolve);
    });
};

const callServiceAjiluulya = (serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa, resolve) => {
    serveriinMedeelelTokhiruulya(khandakhKhayag);

    
    let serviceURI =
        serviceName.includes("/")
            ? ""
            : "/sbstg";
    let baseURL = `http://${serveriinMedeelel}${serviceURI}/${serviceName}`;

    let isString = (typeof param) === 'string';
    let contentType = isString ? 'text/plain; charset=utf-8' : (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';
    // let contentType = (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';
    let nevtrekhEsekh = serviceName == KHOLBOKHZAM.UILDEL.UNDSEN.Nevtrekh || serviceName == "dmstg/snkhmshya";


    if(!nevtrekhEsekh && isNullOrUndefined(khandakhErkh)) {
        // medeeKharuulakh("warning", "Аль нэг цонхноос нэвтэрсэн хэрэглэгчээсээ гарсан байна.");
        resolve(null);
    }

    let option = {
        headers: {
            "Cache-Control": "no-cache",
            "Accept": "application/json",
            "Content-Type": `${contentType}`,
            "Authorization": `Bearer ${nevtrekhEsekh ? global.ibi_nevtrekhErkh_token : global.ibi_undsenErkh_token}`,
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
            //  console.log('callService response', response)
            resolve(response.data);
            counter = 0;
            toolokhConRef = 0
        })
        .catch((error) => {
            // console.log('callService error', error)
            let ankhaaruulgaDialogoorKharuulakhZamuud = serviceName == 'zmstg/och/tuoubkhiye'

            if ((error.response?.status === 401 || error.response?.status === 403) && counter <= 3) {
                khzama(nevtrekhEsekh).then(function (tkn) {
                    if (nevtrekhEsekh) global.ibi_nevtrekhErkh_token = tkn;
                    else global.ibi_undsenErkh_token = tkn;
                    callServiceAjiluulya(serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa, resolve);
                    counter = counter + 1;
                });
            } else {
                counter = 0;
                if (error.message.includes("Network") || error.response?.status === 503)
                    medeeKharuulakh("warning", "Сервертэй холбогдох боломжгүй байна!");
                else if (error.response?.status === 500) {
                    let aldaa = !isNullOrUndefined(error.response?.data?.aldaa) ? error.response?.data?.aldaa : error.response?.data?.error
                    if (!isNullOrUndefined(aldaa) && typeof aldaa == 'string' && aldaa.includes("finishConnect(..) failed: Connection refused:") && toolokhConRef <= 3) {
                        callServiceAjiluulya(serviceName, param, fileTokhirgoo, khandakhKhayag, khuleekhKhugatsaa, resolve);
                        toolokhConRef = toolokhConRef + 1 
                    } else {
                        toolokhConRef = 0
                        if(aldaa.includes('{SERGEEYE}')) {
                            aldaa = aldaa.split('{SERGEEYE}')[0]
                            medeeKharuulakh("warning", aldaa);
                            resolve('sergeekh');
                        }

                        if (!isNullOrUndefined(aldaa) && aldaa.includes("ALDAA_OKAY")) {
                            aldaa = aldaa.split("ALDAA_OKAY")[1] + "(trigger)";
                        }
                        if (!isNullOrUndefined(aldaa) && aldaa.includes("NUATUS_ALDAA")) {
                            resolve("NUATUS_ALDAA");
                        }
                        if (
                            !isNullOrUndefined(aldaa) &&
                            aldaa.includes("Системээ ашиглалгүй тодорхой хугацааг өнгөрүүлсэн тул системийг хаасан байна!")
                        ) {
                            if(ankhaaruulgaDialogoorKharuulakhZamuud) {
                                warning({
                                    title: "Анхаар",
                                    content: aldaa,
                                    okText:'Хаах'
                                })
                            } else {
                                medeeKharuulakh("warning", aldaa);
                            }
                            setTimeout(() => {
                                localStorage.removeItem("SNKHM");
                                Router.push("/");
                            }, 200);
                        } else {
                            if(ankhaaruulgaDialogoorKharuulakhZamuud) {
                                warning({
                                    title: "Анхаар",
                                    content: aldaa,
                                    okText:'Хаах'
                                })
                            } else {
                                medeeKharuulakh("warning", aldaa);
                            }
                            
                        }
                    }
                } else {
                    if(ankhaaruulgaDialogoorKharuulakhZamuud) {
                        warning({
                            title: "Анхаар",
                            content: error.message,
                            okText:'Хаах'
                        })
                    } else {
                        medeeKharuulakh("warning", error.message);
                    }
                }
                resolve(null);
            }
        });
};

function serveriinMedeelelTokhiruulya(khandakhKhayag) {
    let serverJson = JSON.parse(localStorage.getItem("och_app_serveriin_khayag"));
    if (isNullOrUndefined(khandakhKhayag)) {
        if (!serverJson) {
            medeeKharuulakh("warning", "Серверийн тохиргоо хийнэ үү!");
            return;
        }
        if (localStorage.getItem("och_gadnaasKhandakhEsekh") === "true") serveriinMedeelel = serverJson.serveriinKhayagGadaad;
        else serveriinMedeelel = serverJson.serveriinKhayag;
        chiglel = serverJson.chiglel;
    } else serveriinMedeelel = khandakhKhayag;
    khandakhErkh = JSON.parse(localStorage.getItem("SNKHM"));
}

export const uilchilgeeDuudya = (kholbokhZam, damjuulakhUtga, fileTokhirgoo, khandakhKhayag) => {
    return new Promise(function (resolve, reject) {
        uilchilgeeAjiluulya(kholbokhZam, damjuulakhUtga, fileTokhirgoo, khandakhKhayag, resolve);
    });
};

const uilchilgeeAjiluulya = (kholbokhZam, damjuulakhUtga, fileTokhirgoo, khandakhKhayag, resolve) => {
    serveriinMedeelelTokhiruulya(khandakhKhayag);
    let serviceURI =
        kholbokhZam.includes("/")
            ? ""
            : "/sbstg";
    let tovchilsonURI = ''
    if(kholbokhZam.includes('/')) tovchilsonURI = kholbokhZam.split('/')[0]
    else tovchilsonURI = 'sbstg'
    let baseURL = `http://${serveriinMedeelel}${serviceURI}/${kholbokhZam}`;

    

    let isString = (typeof damjuulakhUtga) === 'string';
   let contentType = isString ? 'text/plain; charset=utf-8' : (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';
//    let contentType = (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';
    let nevtrekhEsekh = kholbokhZam == KHOLBOKHZAM.UILDEL.UNDSEN.Nevtrekh || kholbokhZam == "dmstg/snkhmshya";

    if(!nevtrekhEsekh && isNullOrUndefined(khandakhErkh)) {
        // medeeKharuulakh("warning", "Аль нэг цонхноос нэвтэрсэн хэрэглэгчээсээ гарсан байна.");
        resolve(null);
    }

    let option = {
        headers: {
            "Cache-Control": "no-cache",
            'Accept': "application/json",
            "Content-Type": `${contentType}`,
            'Authorization': `Bearer ${nevtrekhEsekh ? global.ibi_nevtrekhErkh_token : global.ibi_undsenErkh_token}`,
            'tulkhuur': khandakhErkh?.tulkhuur,
            'chiglel': `${chiglel}`,
            'zmstg': !isNullOrUndefined(khandakhKhayag) ? "dmstg:dus" : null,
        },
        timeout: fileTokhirgoo ? 3000000 : 30000,
    };

    if (objectEsekh(fileTokhirgoo)) option = { ...option, ...fileTokhirgoo };


    if (damjuulakhUtga === null || damjuulakhUtga === undefined || damjuulakhUtga === "") damjuulakhUtga = " ";
    // console.log('uilchilgeeDuudya isString', isString)
    // console.log('uilchilgeeDuudya option', option)
    // console.log('uilchilgeeDuudya damjuulakhUtga', damjuulakhUtga)
    // console.log('uilchilgeeDuudya baseURL', baseURL)
    axios.post(baseURL, isString || fileTokhirgoo == true ? damjuulakhUtga : JSON.stringify(damjuulakhUtga), option)
        .then((response) => {
            // console.log('response', response)
            resolve(response.data);
            counter = 0;
            toolokhConRef = 0
        })
        .catch((error) => {
            // console.log('error', error)
            if(kholbokhZam == '') {
                resolve(error);
            } else if ((error.response?.status === 401 || error.response?.status === 403) && counter <= 3) {
                khzama(nevtrekhEsekh).then(function (tkn) {
                    if (nevtrekhEsekh) global.ibi_nevtrekhErkh_token = tkn;
                    else global.ibi_undsenErkh_token = tkn;
                    uilchilgeeAjiluulya(kholbokhZam, damjuulakhUtga, fileTokhirgoo, khandakhKhayag, resolve);
                    counter = counter + 1;
                });
            } else {
                counter = 0;
                if (error.message.includes("Network") || error.response?.status === 503)
                    medeeKharuulakh("warning", "Сервертэй холбогдох боломжгүй байна!");
                else if (error.response?.status === 500) {
                    let aldaa = error.response?.data?.error;
                    if (!isNullOrUndefined(aldaa) && typeof aldaa == 'string' && aldaa.includes("finishConnect(..) failed: Connection refused:") && toolokhConRef <= 3) {
                        uilchilgeeAjiluulya(kholbokhZam, damjuulakhUtga, fileTokhirgoo, khandakhKhayag, resolve);
                        toolokhConRef = toolokhConRef + 1
                    } else {
                        toolokhConRef = 0
                        if (!isNullOrUndefined(aldaa) && aldaa.includes("ALDAA_OKAY")) {
                            aldaa = aldaa.split("ALDAA_OKAY")[1] + "(trigger)";
                        }
                        if (!isNullOrUndefined(aldaa) && aldaa.includes("NUATUS_ALDAA")) {
                            resolve("NUATUS_ALDAA");
                        }
                        if (
                            !isNullOrUndefined(aldaa) &&
                            aldaa.includes("Системээ ашиглалгүй тодорхой хугацааг өнгөрүүлсэн тул системийг хаасан байна!")
                        ) {
                            let nevtersenKhereglegch = nevtersenKhereglegchiinMedeelelAvya()
                            medeeKharuulakh("warning", aldaa);
                            systemeesGarakh(nevtersenKhereglegch, Router)
                            // setTimeout(() => {
                            //     localStorage.removeItem("SNKHM");
                            //     Router.push("/");
                            // }, 200);
                        } else medeeKharuulakh("warning", aldaa);
                    }
                } else medeeKharuulakh("warning", error.message);
                resolve(null);
            }
        });
};

export const uilchilgeeDuudya_GET = (kholbokhZam, khandakhKhayag) => {
    return new Promise(function (resolve, reject) {
        uilchilgeeAjiluulya_GET(kholbokhZam, khandakhKhayag, resolve);
    });
};

const uilchilgeeAjiluulya_GET = (kholbokhZam, khandakhKhayag, resolve) => {
    serveriinMedeelelTokhiruulya(khandakhKhayag);
    let serviceURI =
        kholbokhZam.includes("/")
            ? ""
            : "/sbstg";
    let tovchilsonURI = ''
    if(kholbokhZam.includes('/')) tovchilsonURI = kholbokhZam.split('/')[0]
    else tovchilsonURI = 'sbstg'
    let baseURL = `http://${serveriinMedeelel}${serviceURI}/${kholbokhZam}`;

    let contentType = 'application/json; charset=utf-8';
    let nevtrekhEsekh = kholbokhZam == KHOLBOKHZAM.UILDEL.UNDSEN.Nevtrekh || kholbokhZam == "dmstg/snkhmshya";


    if(!nevtrekhEsekh && isNullOrUndefined(khandakhErkh)) {
        // medeeKharuulakh("warning", "Аль нэг цонхноос нэвтэрсэн хэрэглэгчээсээ гарсан байна.");
        resolve(null);
    }

    let option = {
        headers: {
            "Cache-Control": "no-cache",
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": `Bearer ${global.ibi_undsenErkh_token}`,
            "tulkhuur": khandakhErkh?.tulkhuur,
            "chiglel": `${chiglel}`
        },
        timeout: 30000,
    };

    // console.log('uilchilgeeAjiluulya_GET baseURL', baseURL)
    // console.log('uilchilgeeAjiluulya_GET option', option)

    axios.get(baseURL, option)
        .then((response) => {
            // console.log('uilchilgeeAjiluulya_GET response', response)
            resolve(response.data);
            counter = 0;
        })
        .catch((error) => {
            // console.log('uilchilgeeAjiluulya_GET error', error)
            if ((error.response?.status === 401 || error.response?.status === 403) && counter <= 3) {
                khzama(nevtrekhEsekh).then(function (tkn) {
                    // console.log({tkn})
                    if (nevtrekhEsekh) global.ibi_nevtrekhErkh_token = tkn;
                    else global.ibi_undsenErkh_token = tkn;
                    uilchilgeeAjiluulya_GET(kholbokhZam, khandakhKhayag, resolve);
                    counter = counter + 1;
                });
            } else {
                counter = 0;
                if (error.message.includes("Network") || error.response?.status === 503)
                    medeeKharuulakh("warning", "Сервертэй холбогдох боломжгүй байна!");
                else if (error.response?.status === 500) {
                    let aldaa = error.response?.data?.error;
                    if (!isNullOrUndefined(aldaa) && aldaa.includes("ALDAA_OKAY")) {
                        aldaa = aldaa.split("ALDAA_OKAY")[1] + "(trigger)";
                    }
                    if (!isNullOrUndefined(aldaa) && aldaa.includes("NUATUS_ALDAA")) {
                        resolve("NUATUS_ALDAA");
                    }
                    if (
                        !isNullOrUndefined(aldaa) &&
                        aldaa.includes("Системээ ашиглалгүй тодорхой хугацааг өнгөрүүлсэн тул системийг хаасан байна!")
                    ) {
                        let nevtersenKhereglegch = nevtersenKhereglegchiinMedeelelAvya()
                        medeeKharuulakh("warning", aldaa);
                        systemeesGarakh(nevtersenKhereglegch, Router)
                        // setTimeout(() => {
                        //     localStorage.removeItem("SNKHM");
                        //     Router.push("/");
                        // }, 200);
                    } else medeeKharuulakh("warning", aldaa);
                } else medeeKharuulakh("warning", error.message);
                resolve(null);
            }
        });
};


export const suljeeShalgakh = function(systemiinKhuvilbar){
    return new Promise(function (resolve, reject) {
    serveriinMedeelelTokhiruulya();
      let completed = false
      let baseURL = `http://${serveriinMedeelel}/zmstg/och/shlgltkhye?Khuvilbar=${systemiinKhuvilbar}`;
      let option = { 
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        timeout: 1000,
      } 
      axios.post(baseURL, null, option).then((response) => {
        resolve(false);
      }).catch((error) => { 
        completed = true
        // console.log('suljeeShalgakh catch error', error)
  
        if(error.response?.data?.aldaa?.includes("Хувилбар зөрүүтэй байгаа тул нэвтрэх боломжгүй!")) {
            medeeKharuulakh("warning", `Хувилбар зөрүүтэй байгаа тул нэвтрэх боломжгүй!`)
            resolve('KhuvilbarZuruutei');
        } else {
          if(error.response?.data?.message?.includes("instance not found")) {
            medeeKharuulakh("warning",  error.response?.data?.message)
          }
            resolve(true);
        }
      });
      return () => {
        if (completed === false) {
          // axios.cancel(requestId);
          completed = true;
        }
      }
    });
  }
  

  export function systemeesGarakh(nevtersenKhereglegch, router) {
    callService(KHOLBOKHZAM.UILDEL.UNDSEN.KholboltSalgakh, 'ipKhayag:'+nevtersenKhereglegch?.ipKhayag).then(function (result) {
        if(!isNullOrUndefined(result) && !isNullOrUndefined(result.aldaa) && result.aldaa != '')
            medeeKharuulakh('warning', result.aldaa)
        nevtersenKhereglegchUstgaya();
        router.push("/nevtrekh");
    }).catch(aldaa => {
        nevtersenKhereglegchUstgaya();
        router.push("/nevtrekh");
    })
}


export function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.focus();
    dummy.select();
    document.execCommand("selectall", null, false);
    document.execCommand("copy");
    document.body.removeChild(dummy);
}