import React from 'react'
import KhajuuTses from './dedKheseg/KhajuuTses'
import UndsenTalbar from './dedKheseg/UndsenTalbar'
import Navbar from './dedKheseg/Navbar'
import '../../../styles/Admin.module.css'
export default function UndsenZagvar(props) {
    const {tsonkh} = props
    const ankhniiUtga = {
        kharakhEsekh: false,
        component:undefined,
        componentProps: {},
    }
    const [talbarSolbigch, setTalbarSolbigch] = React.useState(ankhniiUtga);

    const talbarButsaakh = () => {
        setTalbarSolbigch(ankhniiUtga)
    }

    const talbarSolbiyo = (utga) => {
        setTalbarSolbigch(utga)
    }

    return (
        <main className='w-full h-fit flex flex-col bg-gray-100 drop-shadow-none'>
            <Navbar/>
            <section className='w-full flex flex-row p-4 h-[calc(100vh-50px)] gap-4 drop-shadow-none'>
                {
                    talbarSolbigch.kharakhEsekh ? <talbarSolbigch.component {...talbarSolbigch.componentProps} talbarButsaakh={talbarButsaakh} talbarSolbiyo={talbarSolbiyo}/> :
                    <>
                        <KhajuuTses {...props}/>
                        <UndsenTalbar {...props} talbarSolbiyo={talbarSolbiyo} talbarButsaakh={talbarButsaakh}/>
                    </>
                }
            </section>
        </main>
    )
}
