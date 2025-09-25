import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Badge = styled.View<{ status: string }>`
  background-color: ${(props: { status: string; }) => props.status === 'confirmed' ? theme.colors.success + '20' : props.status === 'cancelled' ? theme.colors.error + '20' : theme.colors.warning + '20'};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const BadgeText = styled.Text<{ status: string }>`
  color: ${(props: { status: string; }) => props.status === 'confirmed' ? theme.colors.success : props.status === 'cancelled' ? theme.colors.error : theme.colors.warning};
  font-size: 12px;
  font-weight: 500;
`;
