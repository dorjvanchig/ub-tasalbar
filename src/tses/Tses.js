import React from 'react'
import Link from 'next/link'

const Tses = () => {
    const jagsaalt = [
        {ner: 'Нүүр хуудас', slug: '/'},
        {ner: 'Бидний тухай', slug: '/about'},
        {ner: 'Эвэнт', slug: '/event'},
    ]
    return <nav className='bg-white justify-start items-center flex flex-row px-10 sticky top-0 border-b h-[40px] border-b-[1px] gap-3'>
        {
            jagsaalt.map((x, i)=>{
                return <menu key={i} className='cursor-pointer text-slate-600 hover:text-slate-900'><Link href={x.slug}>{x.ner}</Link></menu>
            })
        }
    </nav>
}

export default Tses