import styled from 'styled-components/native';
// Update the import path below to the correct location of your theme file
import theme from '../../../../styles/theme';

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;
