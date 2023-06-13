import { useState, useMemo } from "react";
import { BgBuild } from "../assets";
// import bgBuild from "../../public/bgBuild.svg";
import { Select, Checkbox, Input, Button } from '@chakra-ui/react'
import TableResult from "./TableResult";

const Build = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [jenisPenggunaan, setJenisPenggunaan] = useState('');
  const [totalBudget, setTotalBudget] = useState(0);
  const [data, setData] = useState([]);

  const handleCheckboxChange = () => {
    setShowDiv(!showDiv);
  };
  // div className="Build w-full min-h-screen font-poppins text-black bg-[#F4F4F9] bg-no-repeat bg-contain bg-fixed" style={{ backgroundImage: `url(${bgBuild})` }}

  return (
    <div className="Build w-full min-h-screen font-poppins text-black bg-[#F4F4F9] bg-no-repeat bg-contain bg-fixed" style={{ backgroundImage: `url(${BgBuild})` }} >
      <div className="flex flex-col items-center h-full pt-[120px] ">
        <div className="grid grid-cols-2 gap-x-[100px] gap-y-[20px] mb-[20px]">
          <div className="Select">
            <p>Jenis Penggunaan</p>
            <Select placeholder='Pilih opsi' w={256} borderColor='#002e39' value={jenisPenggunaan} onChange={e => setJenisPenggunaan(e.target.value)} >
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
            <Select placeholder='Select option' w={256} borderColor='#002e39' >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="Select">
            <p>RAM</p>
            <Select placeholder='Select option' w={256} borderColor='#002e39'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="Select">
            <p>Storage</p>
            <Select placeholder='Select option' w={256} borderColor='#002e39'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="Select">
            <p>Monitor</p>
            <Select placeholder='Select option' w={256} borderColor='#002e39' >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
        </div>}


      </div>
      <div className="">
        {/* <TableResult totalBudget={totalBudget} jenisPenggunaan={jenisPenggunaan} />  */}
        <TableResult totalBudget={totalBudget} jenisPenggunaan={jenisPenggunaan} />
      </div>


    </div>
  );
};

export default Build;
