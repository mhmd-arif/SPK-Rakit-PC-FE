import React, { useState } from 'react';
import { useTable } from 'react-table';

const Cek = () => {
    const [jenisPenggunaan, setJenisPenggunaan] = useState('');
    const [totalBudget, setTotalBudget] = useState(0);
    const [rekomendasi, setRekomendasi] = useState([]);
    const [totalHarga, setTotalHarga] = useState(0);

    const komponen = {
        cpu: [
            { type: 'CPU', name: 'intel i5', price: 1000, performa: 9 },
            { type: 'CPU', name: 'AMD R5', price: 900, performa: 8 },
            { type: 'CPU', name: 'AMD R2', price: 500, performa: 5 }
        ],
        gpu: [
            { type: 'GPU', name: 'GPU A', price: 800, performa: 9 },
            { type: 'GPU', name: 'GPU B', price: 700, performa: 8 },
            { type: 'GPU', name: 'GPU C', price: 500, performa: 5 }
        ],
        ram: [
            { type: 'RAM', name: 'samsung', price: 200, performa: 9 },
            { type: 'RAM', name: 'kingston', price: 100, performa: 8 },
            { type: 'RAM', name: 'kingston2', price: 50, performa: 5 }
        ]
    };

    const calculateRekomendasi = () => {
        const cpuAlokasi = {
            gaming: 0.8,
            editing: 0.7,
            casual: 0.5
        };

        const gpuAlokasi = {
            gaming: 0.7,
            editing: 0.8,
            casual: 0.5
        };

        const ramAlokasi = {
            gaming: 0.7,
            editing: 0.7,
            casual: 0.5
        };

        const cpuWeight = cpuAlokasi[jenisPenggunaan];
        const gpuWeight = gpuAlokasi[jenisPenggunaan];
        const ramWeight = ramAlokasi[jenisPenggunaan];

        let maxPerforma = 0;
        let finalRekomendasi = [];

        komponen.cpu.forEach(cpu => {
            komponen.gpu.forEach(gpu => {
                komponen.ram.forEach(ram => {
                    const totalHarga = cpu.price + gpu.price + ram.price;
                    const totalPerforma = (cpu.performa * cpuWeight) + (gpu.performa * gpuWeight) + (ram.performa * ramWeight);
                    const maxValueP = Math.max(cpu.performa, gpu.performa, ram.performa);
                    const minValueP = Math.min(cpu.performa, gpu.performa, ram.performa);
                    const diffValueP = maxValueP - minValueP <= 3;
                    if (totalHarga <= totalBudget && diffValueP) {
                        if (totalPerforma > maxPerforma) {
                            maxPerforma = totalPerforma;
                            finalRekomendasi = [cpu, gpu, ram];
                        }
                    }
                });
            });
        });

        setRekomendasi(finalRekomendasi);
        setTotalHarga(finalRekomendasi.reduce((total, komponen) => total + komponen.price, 0));
    };

    const data = rekomendasi.map((komponen, index) => {
        return {
            no: index + 1,
            komponen: komponen.type,
            nama: komponen.name,
            performa: komponen.performa,
            harga: komponen.price
        };
    });

    const columns = React.useMemo(
        () => [
            { Header: 'No', accessor: 'no' },
            { Header: 'Komponen', accessor: 'komponen' },
            { Header: 'Nama Komponen', accessor: 'nama' },
            { Header: 'Performa', accessor: 'performa' },
            { Header: 'Harga', accessor: 'harga' }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <div>
            <h2>Sistem Pendukung Keputusan SAW</h2>
            <div>
                <label>Jenis Penggunaan:</label>
                <select value={jenisPenggunaan} onChange={e => setJenisPenggunaan(e.target.value)}>
                    <option value="">Pilih jenis penggunaan</option>
                    <option value="gaming">Gaming</option>
                    <option value="editing">Editing</option>
                    <option value="casual">Casual</option>
                </select>
            </div>
            <div>
                <label>Total Budget:</label>
                <input type="number" value={totalBudget} onChange={e => setTotalBudget(parseInt(e.target.value))} />
            </div>
            <button onClick={calculateRekomendasi}>Hitung Rekomendasi</button>
            <h3>Rekomendasi Komponen:</h3>
            {rekomendasi.length > 0 ? (
                <div>
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
                <p>Tidak ada rekomendasi komponen yang sesuai.</p>
            )}
        </div>
    );
};

export default Cek;