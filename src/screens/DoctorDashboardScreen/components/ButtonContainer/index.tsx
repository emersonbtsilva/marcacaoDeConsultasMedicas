import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

interface ButtonContainerProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ onConfirm, onCancel }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
    <Button
      title="Confirmar"
      onPress={onConfirm}
      containerStyle={{ marginTop: 8, width: '48%' }}
      buttonStyle={{ backgroundColor: '#4CAF50', paddingVertical: 8 }}
    />
    <Button
      title="Cancelar"
      onPress={onCancel}
      containerStyle={{ marginTop: 8, width: '48%' }}
      buttonStyle={{ backgroundColor: '#F44336', paddingVertical: 8 }}
    />
  </View>
);

export default ButtonContainer;
