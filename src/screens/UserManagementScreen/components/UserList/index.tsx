import React from 'react';
import { ListItem, Button, Text } from 'react-native-elements';
import { Card, ButtonContainer } from './styles';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
}

interface UserListProps {
  users: User[];
  styles: any;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
  getRoleText: (role: string) => string;
}

const UserList: React.FC<UserListProps> = ({ users, styles, onEdit, onDelete, getRoleText }) => (
  <>
    {users.map((user) => (
      <Card key={user.id}>
        <ListItem.Content>
          <ListItem.Title style={styles.userName}>{user.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.userEmail}>{user.email}</ListItem.Subtitle>
          <Text>{getRoleText(user.role)}</Text>
          <ButtonContainer>
            <Button
              title="Editar"
              onPress={() => onEdit(user)}
              containerStyle={styles.actionButton}
              buttonStyle={styles.editButton}
            />
            <Button
              title="Excluir"
              onPress={() => onDelete(user.id)}
              containerStyle={styles.actionButton}
              buttonStyle={styles.deleteButton}
            />
          </ButtonContainer>
        </ListItem.Content>
      </Card>
    ))}
  </>
);

export default UserList;
