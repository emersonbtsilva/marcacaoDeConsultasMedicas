import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authApiService } from '../../../services/authApi';
import { User } from '../../../types/auth';
import { useAuth } from '../../../contexts/AuthContext';

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  specialty: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export function useCreateAppointment(navigation: any) {
  const { user } = useAuth();
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [doctors, setDoctors] = useState<User[]>([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);

  useEffect(() => {
    loadDoctors();
    // eslint-disable-next-line
  }, []);

  const loadDoctors = async () => {
    try {
      setLoadingDoctors(true);
      setError('');
      const doctorsData = await authApiService.getAllDoctors();
      setDoctors(doctorsData);
    } catch (error) {
      setError('Carregando médicos com dados locais...');
      setTimeout(async () => {
        try {
          const doctorsData = await authApiService.getAllDoctors();
          setDoctors(doctorsData);
          setError('');
        } catch (retryError) {
          setError('Médicos carregados com dados locais (API indisponível)');
        }
      }, 1000);
    } finally {
      setLoadingDoctors(false);
    }
  };

  const convertUsersToDoctors = (users: User[]): Doctor[] => {
    return users.map(user => ({
      id: user.id,
      name: user.name,
      specialty: user.role === 'doctor' && 'specialty' in user ? user.specialty : 'Especialidade não informada',
      image: user.image
    }));
  };

  const handleCreateAppointment = async () => {
    try {
      setLoading(true);
      setError('');
      if (!date || !selectedTime || !selectedDoctor) {
        setError('Por favor, preencha a data e selecione um médico e horário');
        return;
      }
      const storedAppointments = await AsyncStorage.getItem('@MedicalApp:appointments');
      const appointments: Appointment[] = storedAppointments ? JSON.parse(storedAppointments) : [];
      const newAppointment: Appointment = {
        id: Date.now().toString(),
        patientId: user?.id || '',
        patientName: user?.name || '',
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        date,
        time: selectedTime,
        specialty: selectedDoctor.specialty,
        status: 'pending',
      };
      appointments.push(newAppointment);
      await AsyncStorage.setItem('@MedicalApp:appointments', JSON.stringify(appointments));
      alert('Consulta agendada com sucesso!');
      navigation.goBack();
    } catch (err) {
      setError('Erro ao agendar consulta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    date,
    setDate,
    selectedTime,
    setSelectedTime,
    selectedDoctor,
    setSelectedDoctor,
    loading,
    error,
    doctors,
    loadingDoctors,
    convertUsersToDoctors,
    handleCreateAppointment,
  };
}
