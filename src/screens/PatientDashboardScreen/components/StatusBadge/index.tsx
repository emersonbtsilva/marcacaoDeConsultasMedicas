import React from 'react';
import { Badge, StatusText } from './styles';

interface StatusBadgeProps {
  status: string;
}

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

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
  <Badge status={status}>
    <StatusText status={status}>{getStatusText(status)}</StatusText>
  </Badge>
);

export default StatusBadge;
