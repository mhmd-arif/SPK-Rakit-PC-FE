import { useState, useMemo } from "react";
// import { BgBuild } from "../asset";
import BgBuild from "../../public/bgBuild.svg";
import { Select, Checkbox, Input, Button } from '@chakra-ui/react'
import TableResult from "./TableResult";

const Build = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [jenisPenggunaan, setJenisPenggunaan] = useState('');
  const [totalBudget, setTotalBudget] = useState();
  const [cpu, setCpu] = useState();
  const [gpu, setGpu] = useState();
  const [monitor, setMonitor] = useState();
  const [peripheral, setperiPheral] = useState();

  const handleCheckboxChange = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="Build w-full min-h-screen font-poppins text-black bg-[#F4F4F9] bg-no-repeat bg-contain bg-fixed" style={{ backgroundImage: `url(${BgBuild})` }} >
      <div className="flex flex-col items-center h-full pt-[120px] ">
        <div className="grid grid-cols-2 gap-x-[100px] gap-y-[20px] mb-[20px]">
          <div className="Select">
            <p>Jenis Penggunaan</p>
            <Select isRequired={true} placeholder='Pilih opsi' w={256} borderColor='#002e39' value={jenisPenggunaan} onChange={e => setJenisPenggunaan(e.target.value)} >
              <option value='gaming'>Gaming</option>
              <option value='editing'>Editing</option>
              <option value='casual'>Casual</option>
            </Select>
          </div>
          <div className="Select">
            <p>Budget</p>
            <Input variant='outline' placeholder='Masukan total budget' borderColor='#002e39' type="number" value={totalBudget} onChange={e => setTotalBudget(parseInt(e.target.value))} />
          </div>
          <div className="">
            <Checkbox checked={showDiv} onChange={handleCheckboxChange} >Spesifikasi tambahan</Checkbox>
          </div>
        </div>

        {showDiv && <div className="grid grid-cols-2 gap-x-[100px] gap-y-[20px] mb-[20px]">
          <div className="Select">
            <p>CPU</p>
            <Select placeholder='Pilih opsi' w={256} borderColor='#002e39' value={cpu} onChange={e => setCpu(e.target.value)}>
              <option value='intel'>Intel</option>
              <option value='amd'>AMD</option>
              <option value='any'>Bebas</option>
            </Select>
          </div>
          <div className="Select">
            <p>GPU</p>
            <Select placeholder='Pilih opsi' w={256} borderColor='#002e39' value={gpu} onChange={e => setGpu(e.target.value)}>
              <option value='nvidia'>Nvidia</option>
              <option value='amd'>AMD</option>
              <option value='any'>Bebas</option>
            </Select>
          </div>
          {/* <div className="">
            <Checkbox onChange={e => setMonitor(e.target.value)} >Dengan monitor?</Checkbox>
          </div>
          <div className="">
            <Checkbox onChange={e => setperiPheral(e.target.value)} >Dengan peripheral</Checkbox>
          </div> */}
          <div className="Select">
            <p>Peripheral</p>
            <Select placeholder='Pilih opsi' w={256} borderColor='#002e39' value={monitor} onChange={e => setMonitor(parseInt(e.target.value))} >
              <option value={1} >Ya</option>
              <option value={0}>Tidak</option>
            </Select>
          </div>
          <div className="Select">
            <p>Peripheral</p>
            <Select placeholder='Pilih opsi' w={256} borderColor='#002e39' value={peripheral} onChange={e => setperiPheral(parseInt(e.target.value))} >
              <option value={1} >Ya</option>
              <option value={0}>Tidak</option>
            </Select>
          </div>
        </div>}


      </div>
      <div className="">
        <TableResult totalBudget={totalBudget} jenisPenggunaan={jenisPenggunaan} cpu={cpu} gpu={gpu} monitor={monitor} peripheral={peripheral} />
      </div>


    </div>
  );
};

export default Build;
