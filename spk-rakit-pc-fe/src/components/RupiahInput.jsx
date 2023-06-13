import React from 'react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import numeral from 'numeral';

function RupiahInput({ value, onChange }) {
    const formatValue = (val) => {
        const numeralValue = numeral(val).format('Rp0,0');
        return numeralValue;
    };

    const parseValue = (formattedVal) => {
        const numeralValue = numeral(formattedVal.replace(/[Rp,.]/g, '')).value();
        return numeralValue || 0;
    };

    const handleChange = (e) => {
        const { value } = e.target;
        const parsedValue = parseValue(value);
        onChange(parsedValue);
    };

    return (
        <InputGroup>
            <InputLeftAddon children="Rp" />
            <Input type="text" value={formatValue(value)} onChange={handleChange} />
        </InputGroup>
    );
}

export default RupiahInput;
