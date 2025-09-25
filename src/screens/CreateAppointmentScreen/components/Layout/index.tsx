import React from 'react';
import { Container, Title, SectionTitle } from './styles';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export const Section: React.FC<{ children: React.ReactNode; label: string }> = ({ children, label }) => (
  <>
    <SectionTitle>{label}</SectionTitle>
    {children}
  </>
);

export default Layout;
