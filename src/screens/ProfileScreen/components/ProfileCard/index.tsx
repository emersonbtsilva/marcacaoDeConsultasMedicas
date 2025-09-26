import React from 'react';
import { Card, Avatar, Name, Email, SpecialtyText } from './styles';
import RoleBadge from '../RoleBadge';

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

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => (
  <Card>
    <Avatar source={{ uri: user?.image || 'https://via.placeholder.com/150' }} />
    <Name>{user?.name}</Name>
    <Email>{user?.email}</Email>
    <RoleBadge role={user?.role || ''} />
    {user?.role === 'doctor' && (
      <SpecialtyText>Especialidade: {user?.specialty}</SpecialtyText>
    )}
  </Card>
);

export default ProfileCard;
