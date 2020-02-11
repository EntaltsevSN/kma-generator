import styled from 'styled-components';

const OrderFormLabel = styled.label`
  ${props => props.styles.map(el => (el.class === Object.keys(props)[0] && el.style))}
`;

export default OrderFormLabel;