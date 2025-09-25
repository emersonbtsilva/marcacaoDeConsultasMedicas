
import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { Button } from 'react-native-elements';
import DateInput from './components/DateInput';
import ErrorMessage from './components/ErrorMessage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import Header from '../../components/Header';
import DoctorList from '../../components/DoctorList';
import TimeSlotList from '../../components/TimeSlotList';
import { Container, Title, SectionTitle, ErrorText, styles } from './styles';
import { useCreateAppointment } from './hooks/useCreateAppointment';

const CreateAppointmentScreen: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const {
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
	} = useCreateAppointment(navigation);

	return (
		<Container>
			<Header />
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<Title>Agendar Consulta</Title>
						<DateInput
							value={date}
							onChangeText={setDate}
						/>
				<SectionTitle>Selecione um Horário</SectionTitle>
				<TimeSlotList
					onSelectTime={setSelectedTime}
					selectedTime={selectedTime}
				/>
				<SectionTitle>Selecione um Médico</SectionTitle>
						{loadingDoctors ? (
							<ErrorMessage message="Carregando médicos..." />
						) : (
							<DoctorList
								doctors={convertUsersToDoctors(doctors)}
								onSelectDoctor={setSelectedDoctor}
								selectedDoctorId={selectedDoctor?.id}
							/>
						)}
						<ErrorMessage message={error} />
				<Button
					title="Agendar"
					onPress={handleCreateAppointment}
					loading={loading}
					containerStyle={styles.button as ViewStyle}
					buttonStyle={styles.buttonStyle}
				/>
				<Button
					title="Cancelar"
					onPress={() => navigation.goBack()}
					containerStyle={styles.button as ViewStyle}
					buttonStyle={styles.cancelButton}
				/>
			</ScrollView>
		</Container>
	);
};
export default CreateAppointmentScreen;
