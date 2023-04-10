import { Button } from 'antd'
export default function SButton(props) {
    return(<Button   
                 {...props}
                className={`${props.className} btn btn-block`}  
            >
        {props.children}
    </Button>)
}