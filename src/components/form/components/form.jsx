import styled from 'styled-components/macro';

import { Spacer } from '../../common/variables';

const Form = styled.form`
  width: 100%;
  border: 2px solid #ddd;
  border-radius: calc(${Spacer.small} / 2);
  padding: ${Spacer.big};
`;

export default Form;