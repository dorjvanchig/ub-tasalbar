import React from 'react'
import KhajuuTses from './dedKheseg/KhajuuTses'
import UndsenTalbar from './dedKheseg/UndsenTalbar'
import Navbar from './dedKheseg/Navbar'
import '../../../styles/Admin.module.css'
export default function UndsenZagvar(props) {
    const {tsonkh} = props

    return (
        <main className='w-full h-fit flex flex-col bg-gray-100 drop-shadow-none'>
            <Navbar/>
            <section className='w-full flex flex-row p-4 h-[calc(100vh-50px)] gap-4 drop-shadow-none'>
                <KhajuuTses {...props}/>
                <UndsenTalbar {...props}/>
            </section>
        </main>
    )
}
