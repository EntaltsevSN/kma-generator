import styled from 'styled-components';

import { Spacer } from '../../common/variables';

const FormText = styled.input`
  border: 2px solid #ddd;
  border-radius: calc(${Spacer.small} / 2);
  padding: ${Spacer.small};
  outline: none;
`;

export default FormText;