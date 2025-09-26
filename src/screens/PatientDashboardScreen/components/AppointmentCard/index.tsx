import React from 'react';
import { ListItem, Text } from 'react-native-elements';
import { Card } from './styles';
import StatusBadge from '../StatusBadge';

interface AppointmentCardProps {
  appointment: {
    id: string;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    specialty: string;
    status: string;
  };
  styles: any;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, styles }) => (
  <Card>
    <ListItem.Content>
      <ListItem.Title style={styles.patientName}>
        Paciente: {appointment.patientName}
      </ListItem.Title>
      <ListItem.Subtitle style={styles.dateTime}>
        {appointment.date} às {appointment.time}
      </ListItem.Subtitle>
      <Text style={styles.doctorName}>{appointment.doctorName}</Text>
      <Text style={styles.specialty}>{appointment.specialty}</Text>
      <StatusBadge status={appointment.status} />
    </ListItem.Content>
  </Card>
);

export default AppointmentCard;
