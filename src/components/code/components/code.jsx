import styled from 'styled-components';

import { Spacer, Font } from '../../common/variables';

const CodeBlock = styled.code`
  width: 100%;
  border: 2px solid #ddd;
  background-color: #f4f5f6;
  padding: ${Spacer.medium};
  border-radius: calc(${Spacer.small} / 2);
  font-size: calc(${Font.sizeSmall} + 1px);
  line-height: 1.5;
  margin-top: calc(${Spacer.medium} * 2);
`;

export default CodeBlock;