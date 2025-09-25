import React from 'react';
import { ScrollView } from 'react-native';

import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import AppointmentCard from './components/AppointmentCard';
import { Container, Title, LoadingText, EmptyText, styles } from './styles';
import { useDoctorDashboard } from './hooks/useDoctorDashboard';
import { RootStackParamList } from '../../types/navigation';

const DoctorDashboardScreen: React.FC = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { appointments, loading, handleUpdateStatus } = useDoctorDashboard();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Minhas Consultas</Title>
        <Button
          title="Meu Perfil"
          onPress={() => navigation.navigate('Profile')}
          containerStyle={{ marginBottom: 20, width: '100%' }}
          buttonStyle={styles.buttonStyle}
        />
        {loading ? (
          <LoadingText>Carregando consultas...</LoadingText>
        ) : appointments.length === 0 ? (
          <EmptyText>Nenhuma consulta agendada</EmptyText>
        ) : (
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onConfirm={() => handleUpdateStatus(appointment.id, 'confirmed')}
              onCancel={() => handleUpdateStatus(appointment.id, 'cancelled')}
            />
          ))
        )}
        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={{ marginBottom: 20, width: '100%' }}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default DoctorDashboardScreen;
