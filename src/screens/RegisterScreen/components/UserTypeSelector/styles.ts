import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 12px;
  margin-top: 8px;
`;

export const UserTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const UserTypeButton = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  padding: 12px;
  margin: 0 4px;
  border-radius: 8px;
  border: 2px solid ${(props: { selected: boolean }) => props.selected ? theme.colors.primary : theme.colors.border};
  background-color: ${(props: { selected: boolean }) => props.selected ? theme.colors.primary + '20' : theme.colors.background};
  align-items: center;
`;

export const UserTypeText = styled.Text<{ selected: boolean }>`
  color: ${(props: { selected: boolean }) => props.selected ? theme.colors.primary : theme.colors.text};
  font-weight: ${(props: { selected: boolean }) => props.selected ? 'bold' : 'normal'};
  font-size: 14px;
`;
