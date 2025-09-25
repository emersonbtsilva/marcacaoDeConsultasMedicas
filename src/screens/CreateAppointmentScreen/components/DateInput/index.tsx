import React from 'react';
import { Input } from 'react-native-elements';
import { StyledInput } from './styles';

interface DateInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChangeText }) => (
  <Input
    placeholder="Data (DD/MM/AAAA)"
    value={value}
    onChangeText={onChangeText}
    containerStyle={StyledInput.container}
    keyboardType="numeric"
  />
);

export default DateInput;
