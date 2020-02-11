import styled from "styled-components";

import { Font, Spacer } from '../../common/variables';

const HeaderTitle = styled.h1`
  font-size: calc(${Font.sizeH4});
  margin: 0 ${Spacer.big} 0 ${Spacer.small};
`;

export default HeaderTitle;