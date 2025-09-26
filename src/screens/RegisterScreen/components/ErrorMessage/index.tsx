import React from 'react';
import { ErrorText } from './styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <ErrorText>{message}</ErrorText>;
};

export default ErrorMessage;
