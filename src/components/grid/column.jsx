import styled from 'styled-components/macro';

import { Spacer } from '../common/variables';

const Column = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 0 ${Spacer.medium};

  ${props => (props.sm && `
    @media screen and (min-width: 768px) {
      width: ${100 / 12 * props.sm}%;
    }
    `)
  }
`;

export default Column;