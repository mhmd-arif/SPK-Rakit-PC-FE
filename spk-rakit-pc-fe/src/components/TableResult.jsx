import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import komponen from '../database/ComponentData';
import { useToast, Button } from '@chakra-ui/react';
import { fetcher } from '../helpers/fetcher';


const TableResult = ({ jenisPenggunaan, totalBudget, cpu, gpu, monitor, peripheral }) => {
    const [rekomendasi, setRekomendasi] = useState([]);
    const [totalHarga, setTotalHarga] = useState(0);
    const toast = useToast();

    const signInHandler = async () => {
        try {
            const res = await fetcher.post('/recommendation', {
                "budget": totalBudget,
                "jenis_penggunaan": jenisPenggunaan,
                "cpu_brand": cpu,
                "monitor": monitor,
                "peripheral": peripheral,
                "gpu_brand": gpu
            });
            console.log(res.data.used_component)

            toast({
                title: 'Berhasil Masuk',
                status: 'success',
                isClosable: true,
                position: 'top',
                duration: 5000,
            });

        } catch (error) {
            console.log(error)
            // toast({
            //     title: 'Email atau Password Salah',
            //     status: 'error',
            //     isClosable: true,
            //     position: 'top',
            //     duration: 5000,
            // });
        }
    };

    // const calculateRekomendasi = () => {
    //     const cpuAlokasi = {
    //         gaming: 0.8,
    //         editing: 0.7,
    //         casual: 0.5
    //     };

    //     const gpuAlokasi = {
    //         gaming: 0.7,
    //         editing: 0.8,
    //         casual: 0.5
    //     };

    //     const ramAlokasi = {
    //         gaming: 0.7,
    //         editing: 0.7,
    //         casual: 0.5
    //     };

    //     const cpuWeight = cpuAlokasi[jenisPenggunaan];
    //     const gpuWeight = gpuAlokasi[jenisPenggunaan];
    //     const ramWeight = ramAlokasi[jenisPenggunaan];

    //     let maxPerforma = 0;
    //     let finalRekomendasi = [];

    //     komponen.cpu.forEach(cpu => {
    //         komponen.gpu.forEach(gpu => {
    //             komponen.ram.forEach(ram => {
    //                 const totalHarga = cpu.price + gpu.price + ram.price;
    //                 const totalPerforma = (cpu.performa * cpuWeight) + (gpu.performa * gpuWeight) + (ram.performa * ramWeight);
    //                 const maxValueP = Math.max(cpu.performa, gpu.performa, ram.performa);
    //                 const minValueP = Math.min(cpu.performa, gpu.performa, ram.performa);
    //                 const diffValueP = maxValueP - minValueP <= 3;
    //                 if (totalHarga <= totalBudget && diffValueP) {
    //                     if (totalPerforma > maxPerforma) {
    //                         maxPerforma = totalPerforma;
    //                         finalRekomendasi = [cpu, gpu, ram];
    //                     }
    //                 }
    //             });
    //         });
    //     });

    //     setRekomendasi(finalRekomendasi);
    //     setTotalHarga(finalRekomendasi.reduce((total, komponen) => total + komponen.price, 0));
    // };

    // const data = rekomendasi.map((komponen, index) => {
    //     return {
    //         no: index + 1,
    //         type: komponen.type,
    //         name: komponen.name,
    //         performance: komponen.performa,
    //         price: komponen.price
    //     };
    // });

    // function rpFormatter(num) {
    //     return 'Rp' + Intl.NumberFormat('en-DE').format(num)
    // }
    // const columns = useMemo(
    //     () => [
    //         {
    //             Header: 'No',
    //             accessor: "no",
    //             width: 30,
    //         },
    //         {
    //             Header: "Komponen",
    //             accessor: "type",
    //             width: 80,
    //         },
    //         {
    //             Header: "Nama komponen",
    //             accessor: "name",
    //             width: 100,
    //         },
    //         {
    //             Header: "Spesifikasi",
    //             accessor: "spesification",
    //             width: 80,
    //         },
    //         {
    //             Header: "Performa",
    //             accessor: "performance",
    //             width: 80,
    //         },
    //         {
    //             Header: "Harga",
    //             accessor: "price",
    //             Cell: ({ value }) => {
    //                 return rpFormatter(value);
    //             },
    //             width: 100,
    //         },
    //     ], []
    // );

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow
    // } = useTable({
    //     columns,
    //     data
    // });

    return (
        <div>
            <p>halo</p>
            <Button bg='#B8D0DB' onClick={signInHandler}>Rakit</Button>
            {/* <div className='h-full flex flex-col justify-center items-center'>
                <Button bg='#B8D0DB' onClick={calculateRekomendasi}>Rakit</Button>
                <h3 className='mt-[50px] mb-[20px]'>Rekomendasi Komponen:</h3>
                {rekomendasi.length > 0 ? (
                    <div className='flex flex-col gap-4'>
                        <table {...getTableProps()} style={{ borderCollapse: 'collapse' }}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th
                                                {...column.getHeaderProps()}
                                                style={{ border: '1px solid black', padding: '8px' }}
                                            >
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td
                                                    {...cell.getCellProps()}
                                                    style={{ border: '1px solid black', padding: '8px' }}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <p>Total harga = {totalHarga}</p>
                    </div>
                ) : (
                    <p>masukan input atau bugdet tidak mencukupi.</p>
                )}
            </div> */}
        </div>
    );
};

export default TableResult;