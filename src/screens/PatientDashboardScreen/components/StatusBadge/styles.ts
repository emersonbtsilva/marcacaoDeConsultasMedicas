import styled from 'styled-components/native';
// Adjust the import path below if your theme file is located elsewhere
import theme from '../../../../styles/theme';

export const Badge = styled.View<{ status: string }>`
  background-color: ${({ status }: { status: string }) => {
    switch (status) {
      case 'confirmed':
        return theme.colors.success + '20';
      case 'cancelled':
        return theme.colors.error + '20';
      default:
        return theme.colors.warning + '20';
    }
  }};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const StatusText = styled.Text<{ status: string }>`
  color: ${({ status }: { status: string }) => {
    switch (status) {
      case 'confirmed':
        return theme.colors.success;
      case 'cancelled':
        return theme.colors.error;
      default:
        return theme.colors.warning;
    }
  }};
  font-size: 12px;
  font-weight: 500;
`;
