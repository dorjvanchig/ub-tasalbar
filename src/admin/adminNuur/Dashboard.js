import React from 'react'
import dynamic from 'next/dynamic'
import { DursZuragch } from '@/src/components'
import admin from '../../../styles/Admin.module.css'
const randomizeArray = (arg) => {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Dashboard() {
  const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false});
  var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
  const config1 = {    
    series: [{
      data: randomizeArray(sparklineData)
    }],
    options: {
      chart: {
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
          autoSelected: 'pan'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
      title: {
        text: '424,652₮',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: 'Захиалга',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        show: false,
        type: 'datetime',
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        },
        type: 'datetime',
      },
    },
  }

  const barchart = {
    series: [{
      data: [400, 430, 448, 470, ]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Сүнс', 'Хошин шог', 'Кино', 'Концерт'],
      }
    },
  };

  return (
    <div className='flex flex-wrap gap-3'>
      <div className='w-full flex flex-row gap-3'>
        <div className='bg-white rounded-[3px] shadow-md w-1/4'>
          <ReactApexChart options={config1.options} series={config1.series} type='area' height={200}/>
        </div>
        <div className='bg-white rounded-[3px] shadow-md w-1/4'>
          <ReactApexChart options={config1.options} series={config1.series} type='area' height={200}/>
        </div>
        <div className='bg-white rounded-[3px] shadow-md w-1/4'>
          <ReactApexChart options={config1.options} series={config1.series} type='area' height={200}/>
        </div>
        <div className='bg-white rounded-[3px] shadow-md w-1/4'>
          <ReactApexChart options={config1.options} series={config1.series} type='area' height={200}/>
        </div>
      </div>
      <div className='w-full flex md:flex-row flex-col gap-3'>
        <div className='bg-white rounded-[3px] shadow-md md:w-2/4 w-full'>
          <ReactApexChart options={barchart.options} series={barchart.series} type='bar' height={400}/>
        </div>
        <div className='rounded-[3px] md:w-2/4 w-full p-2'>
        <table className={`${admin.table} table table-fixed w-full text-gray-900 border-separate space-y-6 text-sm`}>
                    <colgroup>
                        <col width={150}/>
                        <col width={250}/>
                        <col width={100}/>
                        <col width={100}/>
                        <col width={100}/>
                    </colgroup>
                    <thead className="bg-white text-gray-500">
                        <tr>
                            <th className="p-3">Нэр</th>
                            <th className="p-3 text-left">Тоглолт</th>
                            <th className="p-3 text-left">Суудал</th>
                            <th className="p-3 text-left">Статус</th>
                            <th className="p-3 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className={admin.tableBody}>
                        <tr className="bg-white hover:shadow-md">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">
                                        <div className="font-bold">Дондог</div>
                                        <div className="text-gray-500">dondog@gmail.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-3">
                                Улаанбаатар хотын хаа нэгэн газар байгаа олоод оч
                            </td>
                            <td className="p-3">
                                <span className="">3</span>
                            </td>
                            <td className="p-3">
                                <span className="bg-amber-400 text-gray-50 rounded-md px-2">waiting</span>
                            </td>
                            <td className="p-3 ">
                                <div className='flex flex-row gap-3'>
                                    <span className='text-sky-700'><DursZuragch icon='ic:outline-remove-red-eye' className='cursor-pointer'/></span>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white hover:shadow-md">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">
                                        <div className="font-bold">Дондог</div>
                                        <div className="text-gray-500">dondog@gmail.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-3">
                                Улаанбаатар хотын хаа нэгэн газар байгаа олоод оч
                            </td>
                            <td className="p-3">
                                <span className="">3</span>
                            </td>
                            <td className="p-3">
                                <span className="bg-amber-400 text-gray-50 rounded-md px-2">waiting</span>
                            </td>
                            <td className="p-3 ">
                                <div className='flex flex-row gap-3'>
                                    <span className='text-sky-700'><DursZuragch icon='ic:outline-remove-red-eye' className='cursor-pointer'/></span>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white hover:shadow-md">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">
                                        <div className="font-bold">Дондог</div>
                                        <div className="text-gray-500">dondog@gmail.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-3">
                                Улаанбаатар хотын хаа нэгэн газар байгаа олоод оч
                            </td>
                            <td className="p-3">
                                <span className="">3</span>
                            </td>
                            <td className="p-3">
                                <span className="bg-green-400 text-gray-50 rounded-md px-2">paid</span>
                            </td>
                            <td className="p-3 ">
                                <div className='flex flex-row gap-3'>
                                    <span className='text-sky-700'><DursZuragch icon='ic:outline-remove-red-eye' className='cursor-pointer'/></span>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white hover:shadow-md">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">
                                        <div className="font-bold">Дондог</div>
                                        <div className="text-gray-500">dondog@gmail.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-3">
                                Улаанбаатар хотын хаа нэгэн газар байгаа олоод оч
                            </td>
                            <td className="p-3">
                                <span className="">3</span>
                            </td>
                            <td className="p-3">
                                <span className="bg-green-400 text-gray-50 rounded-md px-2">paid</span>
                            </td>
                            <td className="p-3 ">
                                <div className='flex flex-row gap-3'>
                                    <span className='text-sky-700'><DursZuragch icon='ic:outline-remove-red-eye' className='cursor-pointer'/></span>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white hover:shadow-md">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">
                                        <div className="font-bold">Дондог</div>
                                        <div className="text-gray-500">dondog@gmail.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-3">
                                Улаанбаатар хотын хаа нэгэн газар байгаа олоод оч
                            </td>
                            <td className="p-3">
                                <span className="">3</span>
                            </td>
                            <td className="p-3">
                                <span className="bg-green-400 text-gray-50 rounded-md px-2">paid</span>
                            </td>
                            <td className="p-3 ">
                                <div className='flex flex-row gap-3'>
                                    <span className='text-sky-700'><DursZuragch icon='ic:outline-remove-red-eye' className='cursor-pointer'/></span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
        </div>
      </div>
    </div>
  )
}
