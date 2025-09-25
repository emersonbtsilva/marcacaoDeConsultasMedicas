import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

interface StatusBadgeProps {
  status: 'pending' | 'confirmed' | 'cancelled';
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return theme.colors.success;
    case 'cancelled':
      return theme.colors.error;
    default:
      return theme.colors.warning;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'Confirmada';
    case 'cancelled':
      return 'Cancelada';
    default:
      return 'Pendente';
  }
};

const Badge = styled.View<StatusBadgeProps>`
  background-color: ${(props: { status: string; }) => getStatusColor(props.status) + '20'};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-top: 8px;
`;

const BadgeText = styled.Text<StatusBadgeProps>`
  color: ${(props: { status: string; }) => getStatusColor(props.status)};
  font-size: 12px;
  font-weight: 500;
`;

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
  <Badge status={status}>
    <BadgeText status={status}>{getStatusText(status)}</BadgeText>
  </Badge>
);

export default StatusBadge;
