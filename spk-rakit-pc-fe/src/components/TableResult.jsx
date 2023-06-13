import React, { useState, useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
// import komponen from '../database/ComponentData';
// import { NumberInput } from '@chakra-ui/react';
import { } from '@chakra-ui/react';
import { fetcher } from '../helpers/fetcher';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useToast, Button
} from '@chakra-ui/react'


const TableResult = ({ jenisPenggunaan, totalBudget, cpu, gpu, monitor, peripheral }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [data, setData] = useState(null);
    const toast = useToast();

    const formattedBudget = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(totalBudget);


    const RakitHandler = async () => {
        if (!jenisPenggunaan || !totalBudget) {
            toast({
                title: 'Isi Jenis pengunaan dan Budget',
                status: 'error',
                isClosable: true,
                position: 'top',
                duration: 5000,
            });
        }
        else {
            try {
                const res = await fetcher.post('/recommendation', {
                    "budget": totalBudget,
                    "jenis_penggunaan": jenisPenggunaan,
                    "cpu_brand": cpu,
                    "monitor": monitor,
                    "peripheral": peripheral,
                    "gpu_brand": gpu
                });
                const resData = res.data.used_component
                setData(resData)

                const totalPriceTemp = resData.reduce((sum, item) => sum + item.price, 0);
                const formattedPrice = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(totalPriceTemp);
                setTotalPrice(formattedPrice)

                toast({
                    title: 'Berhasil',
                    status: 'success',
                    isClosable: true,
                    position: 'top',
                    duration: 5000,
                });

            } catch (error) {
                console.log(error)
                toast({
                    title: 'Gagal - Ulangi Kembali',
                    status: 'error',
                    isClosable: true,
                    position: 'top',
                    duration: 5000,
                });
            }
        }

    };

    return (
        <div>
            <div className='h-full flex flex-col justify-center items-center mt-[30px] pb-[50px]'>
                <Button bg='#B8D0DB' onClick={RakitHandler} className='mb-[20px]'>Rakit</Button>
                <div>
                    {data ?
                        (<div className='w-[800px]  mb-[30px]'>
                            <h3 className='my-[20px]'>Tabel rekomendasi komponen komputer untuk jenis pengunaan: {jenisPenggunaan} dengan budget: {formattedBudget}</h3>
                            <div className='bg-white rounded-xl'>
                                <TableContainer>
                                    <Table variant='striped' colorScheme='teal' w={250}>
                                        <Thead >
                                            <Tr>
                                                <Th>Component</Th>
                                                <Th>Price</Th>
                                                <Th>Display Name</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {data.map((item, index) => (
                                                <Tr key={index}>
                                                    <Td>{item.component}</Td>
                                                    <Td>{item.price}</Td>
                                                    <Td>{item.display_name}</Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <div className='my-[20px] text-md font-semi'>
                                <p>
                                    Total harga = {totalPrice}
                                </p>
                            </div>
                        </div>
                        )

                        : (<div >
                            <p >
                                silahkan masukan input yang sesuai
                            </p>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default TableResult;