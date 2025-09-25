
import React from 'react';
import { StyledError } from './styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <StyledError>{message}</StyledError>;
};

export default ErrorMessage;
