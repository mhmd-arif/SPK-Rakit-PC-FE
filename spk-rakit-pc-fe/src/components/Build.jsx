import { useState } from "react";
import { bgBuild } from "../assets";
import { Select, Checkbox, Input, Button } from '@chakra-ui/react'

const Build = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleCheckboxChange = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="Build w-full min-h-screen font-poppins text-black bg-[#F4F4F9] bg-no-repeat bg-contain bg-fixed" style={{ backgroundImage: `url(${bgBuild})` }} >
      <div className="flex flex-col items-center h-full pt-[120px] ">
        <div className="grid grid-cols-2 gap-x-[100px] gap-y-[20px] mb-[20px]">
          <div className="Select">
            <p>Jenis Penggunaan</p>
            <Select placeholder='Select option' w={256} >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="Select">
            <p>Budget</p>
            <Select placeholder='Select option' w={256} >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="">
            <Checkbox checked={showDiv} onChange={handleCheckboxChange} >Spesifikasi tambahan</Checkbox>
          </div>
        </div>

        {showDiv && <div className="grid grid-cols-2 gap-x-[100px] gap-y-[20px] mb-[20px]">
          <div className="Select">
            <p>CPU</p>
            <Select placeholder='Select option' w={256} >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="Select">
            <p>RAM</p>
            <Select placeholder='Select option' w={256} >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="Select">
            <p>Storage</p>
            <Select placeholder='Select option' w={256} >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
          <div className="Select">
            <p>Monitor</p>
            <Select placeholder='Select option' w={256} >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>
        </div>}

        <Button bg='#B8D0DB'>Rakit</Button>

      </div>




    </div>
  );
};

export default Build;
