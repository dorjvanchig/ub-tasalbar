import React, { useEffect } from 'react'
import { isNullOrUndefined, uilchilgeeDuudagch } from './index';
import * as dayjs from 'dayjs' 

export function useBodyUndurOlyo(hasahUndur) {
    const [bodyHeight, setBodyHeight] = React.useState(0)
    useEffect(() => {
        const undurOorchlogdohod = () => setBodyHeight(window.innerHeight - hasahUndur)
        window.addEventListener('resize', undurOorchlogdohod);
        return () => {
            console.log('removeEventListener 7')
            window.removeEventListener('resize', undurOorchlogdohod);
        };
    }, []);
    useEffect(() => {
        setBodyHeight(window.innerHeight - hasahUndur)
    }, [hasahUndur])

    return bodyHeight
}

export function useBodyUrgunOlyo(hasahUrgun) {
    const [bodyHeight, setBodyWidth] = React.useState(0)
    useEffect(() => {
        const urgunOorchlogdohod = () => setBodyWidth(window.innerWidth - hasahUrgun)
        window.addEventListener('resize', urgunOorchlogdohod);
        return () => {
            window.removeEventListener('resize', urgunOorchlogdohod);
        };
    }, []);
    useEffect(() => {
        setBodyWidth(window.innerWidth - hasahUrgun)
    }, [hasahUrgun])

    return bodyHeight
}

export function formatOgnoo(ognoo, format) {
    return dayjs(ognoo).format(format)
} 

export function formatNumber(num, fixed = 2) {
    if ( num === undefined || num === null || num === '') return '0.00';
    var fixedNum = parseFloat(num).toFixed(fixed).toString();
    var numSplit = fixedNum.split(".");
    if (numSplit === null || numSplit.length === 0) {
        return "0.00";
    }
    var firstFormatNum = numSplit[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    if (fixed === 0)
        return firstFormatNum
    return firstFormatNum + '.' + numSplit[1]
}

export function ognooJson(ognoo) {
    var date =
        ognoo.getFullYear() + "-" +
        ("00" + (ognoo.getMonth() + 1)).slice(-2) + "-" +
        ("00" + ognoo.getDate()).slice(-2) + " " +
        ("00" + ognoo.getHours()).slice(-2) + ":" +
        ("00" + ognoo.getMinutes()).slice(-2) + ":" +
        ("00" + ognoo.getSeconds()).slice(-2)
    return date
}

export function clone(value) {
    if (isNullOrUndefined(value))
        return value
    if (Array.isArray(value)) {
        let array = []
        value.forEach(x => {
            array.push(Object.assign({}, x))
        })
        return array
    }
    else
        return Object.assign({}, value);
}

export function sanamsarguiUnguUgugch() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 4; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color + '00';
}

const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0, n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f(g(x));
const not = x => !x;
const chunk = n => xs =>
    isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
let numToWords = (n) => {
    let a = [
        '', "нэгэн", "хоёр", "гурван", "дөрвөн", "таван", "зургаан", "долоон", "найман", "есөн",
        'арван', 'арван нэгэн', 'арван хоёр', 'арван гурван', 'арван дөрвөн',
        'арван таван', 'арван зургаан', 'арван долоон', 'арван найман', 'арван есөн'
    ];

    let b = [
        '', '', 'хорин', 'гучин', 'дөчин',
        'тавин', 'жаран', 'далан', 'наян', 'ерөн'
    ];

    let g = [
        '', 'мянга', 'сая', 'тэрбум', 'их наяд', 'живаа',
        'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
    ];
    // this part is really nasty still
    // it might edit this again later to show how Monoids could fix this up
    let makeGroup = ([ones, tens, huns], i) => {
        return [
            num(huns) === 0 ? '' : (num(huns) === 1 ? 'нэг' : a[huns]) + ' зуун ',
            num(ones) === 0 ? b[tens] : b[tens] && b[tens] + ' ' || '',
            a[tens + ones] || (num(ones) === 1 ? 'нэг' + `${i === 0 && (huns > 0 || tens > 0) ? 'эн' : ''}` : a[ones])
        ].join('');
    };
    // "thousands" constructor; no real good names for this, i guess
    let thousand = (group, i, array) => {
        return group === '' ? group : `${group} ${g[i]}${i === 1 && array[0] === '' ? 'н' : ''}`
    };
    // execute !
    if (typeof n === 'number') return numToWords(String(n));
    if (n === '0') return 'тэг';
    return comp(chunk(3))(reverse)(arr(n))
        .map(makeGroup)
        .map(thousand)
        .filter(comp(not)(isEmpty))
        .reverse()
        .join(' ');
};

const mungunDungiinUsegAvya = (valyut) => new Promise((resolve, reject) => {
    uilchilgeeDuudagch('yej_valyutiinBukhelZadgaiAvya', valyut).then(khariu => {
        resolve(khariu)
    })
});

const ekhniiUsegTomsgogch = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

//['төгрөг','мөнгө']
export async function dungUguulberluuKhurvuulegch(too, valyut = 'MNT') {
    let zalgakhUguud = await mungunDungiinUsegAvya(valyut);
    let dun = String(too)
    let butsaakhString = ''
    if (dun.includes('.')) {
        let toonuud = dun.split('.')
        butsaakhString = `${numToWords(toonuud[0])} ${zalgakhUguud.valyutBukhel} ${num(toonuud[1]) !== 0 ? `${numToWords(toonuud[1])} ${zalgakhUguud.valyutZadgai}` : ''}`
    }
    else
        butsaakhString = `${numToWords(too)} ${zalgakhUguud.valyutBukhel}`

    return ekhniiUsegTomsgogch(butsaakhString)
}