import { isArray, isObject } from 'lodash'
import dayjs from 'dayjs'
export const isNullOrUndefined = (x) => {
    return (x == undefined || x == null)
}

export function objectEsekh(utga) {
    return isObject(utga)
}

export function khoosonObjectEsekh(obj) {
    return Object.keys(obj).length === 0
}

export function khoosonJagsaaltEsekh(jagsaalt) {
    return  isArray(jagsaalt) && jagsaalt.length === 0
} 

export function formatOgnoo(ognoo, format) {
    return  dayjs(ognoo).format(format)
} 
