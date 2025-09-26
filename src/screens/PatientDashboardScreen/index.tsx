import React from 'react';
import { ScrollView, ViewStyle, TextStyle } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import theme from '../../styles/theme';
import Header from '../../components/Header';
import { Container, Title, LoadingText } from './styles';
import AppointmentCard from './components/AppointmentCard';
import EmptyState from './components/EmptyState';
import { usePatientAppointments } from './hooks/usePatientAppointments';

const styles = {
  scrollContent: {
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
  specialty: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  },
  dateTime: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
};

type PatientDashboardScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PatientDashboard'>;
};

const PatientDashboardScreen: React.FC = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation<PatientDashboardScreenProps['navigation']>();
  const { appointments, loading, loadAppointments } = usePatientAppointments();

  useFocusEffect(
    React.useCallback(() => {
      loadAppointments();
    }, [loadAppointments])
  );

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Minhas Consultas</Title>

        <Button
          title="Agendar Nova Consulta"
          onPress={() => navigation.navigate('CreateAppointment')}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.buttonStyle}
        />

        <Button
          title="Meu Perfil"
          onPress={() => navigation.navigate('Profile')}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.buttonStyle}
        />

        {loading ? (
          <LoadingText>Carregando consultas...</LoadingText>
        ) : appointments.length === 0 ? (
          <EmptyState />
        ) : (
          appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} styles={styles} />
          ))
        )}

        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default PatientDashboardScreen;
