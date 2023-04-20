import React from 'react'
import { Dropdown, message, Avatar } from 'antd';
import { DursZuragch } from '@/src/components';
import { useRouter } from 'next/router';
import Link from 'next/link';


const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: 'Тохиргоо',
    key: '1',
  },
  {
    label: 'Гарах',
    key: '2',
  },
];

export default function Navbar() {
  const router = useRouter()
  return (
    <section className='w-full border-b h-[50px] flex items-center justify-between p-4 bg-white drop-shadow-none'>
        <div className='w-[300px] text-center font-bold cursor-pointer'  onClick = {() => {
          router.push('/')
        }} >
            <Link href='/'>UB Tasalbar</Link>
        </div>
        <nav>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <button onClick={(e) => e.preventDefault()} className='flex flex-row items-center justify-center [&_.ant-avatar]:flex [&_.ant-avatar]:items-center [&_.ant-avatar]:justify-center gap-3'>
              <Avatar icon={<DursZuragch icon='fa-solid:user-secret' className='text-[1.15rem]'/>} />
              <span>Admin</span>
              <DursZuragch icon='material-symbols:keyboard-arrow-down-rounded'/>
            </button>
          </Dropdown>
        </nav>
    </section>
  )
}
