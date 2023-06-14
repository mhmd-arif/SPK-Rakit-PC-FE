import React, { useState, useMemo, useEffect } from 'react';
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

function title(str) {
    return str.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase() });
}

const TableResult = ({ jenisPenggunaan, totalBudget, cpu, gpu, monitor, peripheral }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [data, setData] = useState(null);
    const toast = useToast();

    function parseToIdr(number) {
        const formatedNumber = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
        return formatedNumber;
    }

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
                setTotalPrice(parseToIdr(totalPriceTemp))

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
                            <h3 className='my-[20px]'>Tabel rekomendasi komponen komputer untuk jenis pengunaan: {jenisPenggunaan} dengan budget: {parseToIdr(totalBudget)}</h3>
                            <div className='bg-white rounded-xl'>
                                <TableContainer>
                                    <Table variant='striped' colorScheme='teal' w={250}>
                                        <Thead >
                                            <Tr>
                                                <Th>Gambar</Th>
                                                <Th>Jenis Komponen</Th>
                                                <Th>Harga</Th>
                                                <Th>Nama Komponen</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {data.map((item, index) => (
                                                <Tr key={index}>
                                                    <Td><img src={item.image ?? "https://cdn.icon-icons.com/icons2/2838/PNG/512/action_unavailable_icon_180783.png"} alt={item.display_name} width='250px' /></Td>
                                                    <Td>{item.component.toUpperCase()}</Td>
                                                    <Td>{parseToIdr(item.price)}</Td>
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