import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { Container, Title, LoadingText, EmptyText } from './styles';
import UserList from './components/UserList';
import ErrorMessage from './components/ErrorMessage';
import { useUserManagement } from './hooks/useUserManagement';

const styles = {
  scrollContent: {
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
  },
  backButton: {
    backgroundColor: '#1976d2',
    opacity: 0.7,
    paddingVertical: 12,
  },
  actionButton: {
    marginTop: 8,
    width: '48%',
  },
  editButton: {
    backgroundColor: '#1976d2',
    paddingVertical: 8,
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  userEmail: {
    fontSize: 14,
    color: '#222',
    marginTop: 4,
  },
};

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

const UserManagementScreen: React.FC = () => {
  const navigation = useNavigation();
  const { users, loading, error, loadUsers, handleDeleteUser } = useUserManagement();

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Gerenciar Usuários</Title>
        <Button
          title="Adicionar Novo Usuário"
          onPress={() => {}}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.buttonStyle}
        />
        <ErrorMessage message={error} />
        {loading ? (
          <LoadingText>Carregando usuários...</LoadingText>
        ) : users.length === 0 ? (
          <EmptyText>Nenhum usuário cadastrado</EmptyText>
        ) : (
          <UserList
            users={users}
            styles={styles}
            onEdit={() => {}}
            onDelete={handleDeleteUser}
            getRoleText={getRoleText}
          />
        )}
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.backButton}
        />
      </ScrollView>
    </Container>
  );
};

export default UserManagementScreen;
