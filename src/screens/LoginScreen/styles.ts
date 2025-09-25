import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

export const HintText = styled.Text`
  margin-top: 20px;
  text-align: center;
  color: ${theme.colors.text};
`;

export const CredentialsText = styled.Text`
  margin-top: 10px;
  text-align: center;
  color: ${theme.colors.text};
  font-size: 12px;
`;

export const styles = {
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  registerButton: {
    marginTop: 10,
    width: '100%',
  },
  registerButtonStyle: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
  hint: {
    marginTop: 20,
    textAlign: 'center' as const,
    color: theme.colors.text,
  },
  credentials: {
    marginTop: 10,
    textAlign: 'center' as const,
    color: theme.colors.text,
    fontSize: 12,
  },
};
