import React from 'react';
import { Image } from 'react-native';
import { Card, Avatar, Name, Email, SpecialtyText } from './styles';
import RoleBadge from '../RoleBadge';
import PatientImage from "../../../../../assets/patient.png";

interface ProfileCardProps {
    user: {
        name: string;
        email: string;
        image?: string;
        role: string;
        specialty?: string;
    };
}

const getRoleText = (role: string) => {
    switch (role) {
        case 'admin':
            return 'Administrador';
        case 'doctor':
            return 'Médico';
        case 'patient':
            return 'Paciente';
        default:
            return role;
    }
};

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
    // Define a imagem do usuário ou o fallback do paciente
    const avatarSource = user?.image
        ? { uri: user.image }
        : PatientImage;

    // @ts-ignore
    return (
        <Card>
            <Avatar source={avatarSource} />
            <Name>{user?.name}</Name>
            <Email>{user?.email}</Email>
            <RoleBadge role={user?.role || ''} text={getRoleText(user?.role || '')} />
            {user?.role === 'doctor' && user?.specialty && (
                <SpecialtyText>Especialidade: {user.specialty}</SpecialtyText>
            )}
        </Card>
    );
};

export default ProfileCard;
