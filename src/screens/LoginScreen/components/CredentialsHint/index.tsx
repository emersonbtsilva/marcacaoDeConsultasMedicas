import React from 'react';
import { HintText, CredentialsText } from './styles';

const CredentialsHint: React.FC = () => (
  <>
    <HintText>
      Use as credenciais de exemplo:
    </HintText>
    <CredentialsText>
      Admin: admin@example.com / 123456{"\n"}
      Médicos: joao@example.com, maria@example.com, pedro@example.com / 123456
    </CredentialsText>
  </>
);

export default CredentialsHint;
