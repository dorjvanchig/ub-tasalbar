import { SInput, DursZuragch } from "../components";

export default function UndsenKhailt(props) {
    return (<div className="main-search-form transition-02s bg-[#f4f5f9]">
        <div className="container mx-auto p-8">
            <SInput prefix={<DursZuragch icon = "ic:outline-search" className = "text-slate-400"/>} className = {"focus:!border-[#dfe0e6] hover:border-[#dfe0e6] border text-[22px] border-[#dfe0e6] bg-white shadow-[0px_0px_40px_0px_#0000000d] rounded-[99px] text-left truncate font-semibold p-[9px_0px_9px_50px]"} size = {"middle"} placeholder = "Хайх үгээ бичнэ үү"/>
      </div>
</div>)
}