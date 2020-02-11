import styled from 'styled-components';

import { Spacer } from '../common/variables';

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -${Spacer.medium} ${Spacer.big} -${Spacer.medium};
`;

export default Row;