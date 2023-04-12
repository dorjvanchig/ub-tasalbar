import { Input } from 'antd'
export default function SInput(props) {
    return (<Input 
                {...props}
                className={`${props.className}border w-full hover:outline-none outline-none border-[#f0e9ff] rounded-[5px] h-[48px] pl-[18px] text-sm bg-transparent focus:text-[#495057] focus:bg-white focus:border focus:border-[#80bdff] focus:outline-none focus:shadow-none`}
            />)
}