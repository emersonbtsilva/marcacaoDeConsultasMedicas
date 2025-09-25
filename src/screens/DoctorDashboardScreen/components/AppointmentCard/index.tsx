import React from 'react';
import { ListItem } from 'react-native-elements';
import { View, Text, TextStyle, ViewStyle } from 'react-native';
import StatusBadge from '../StatusBadge';
import ButtonContainer from '../ButtonContainer';
import { Appointment } from '../../hooks/useDoctorDashboard';

interface AppointmentCardProps {
  appointment: Appointment;
  onConfirm: () => void;
  onCancel: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onConfirm,
  onCancel,
}) => (
  <ListItem containerStyle={{ borderRadius: 8, marginBottom: 10, padding: 15 }}>
    <ListItem.Content>
      <ListItem.Title style={{ fontSize: 16, fontWeight: '700', color: '#222' }}>
        Paciente: {appointment.patientName || 'Nome não disponível'}
      </ListItem.Title>
      <ListItem.Subtitle style={{ fontSize: 16, fontWeight: '700', color: '#222' }}>
        {appointment.date} às {appointment.time}
      </ListItem.Subtitle>
      <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>{appointment.specialty}</Text>
      <StatusBadge status={appointment.status} />
      {appointment.status === 'pending' && (
        <ButtonContainer
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </ListItem.Content>
  </ListItem>
);

export default AppointmentCard;
