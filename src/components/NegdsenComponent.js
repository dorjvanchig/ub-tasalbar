import { notification } from "antd";
import { DursZuragch } from '../components' 
export function medeeKharuulakh(turul, text, delgerengui) {
    notification.warning({
        message: text,
        description: delgerengui,
        placement: "topRight",
        style: { zIndex: 1304 },
    });
}


export function tsesnuud(){
    return [ 
        {
            label: 'Бүжиг',
            key: 'bujig'
        }, 
        {
            label: 'Жүжиг',
            key: 'jujig'
        }, 
        {
            label: 'Дуулалт жүжиг',
            key: 'duulalt',
            icon: <DursZuragch icon = "ic:round-keyboard-arrow-down" />,
        }, 
        {
            label: 'Концерт',
            key: 'concert',
            icon: <DursZuragch icon = "ic:round-keyboard-arrow-down" />,
        }, 
        {
            label: 'Дуурь',
            key: 'duuri',
            icon: <DursZuragch icon = "ic:round-keyboard-arrow-down" />
        },  
    ]
}