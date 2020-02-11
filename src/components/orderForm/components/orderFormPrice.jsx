import styled from 'styled-components';

const OrderFormPrice = styled.span`
  ${props => props.styles.map(el => (el.class === Object.keys(props)[0] && el.style))}
`;

export default OrderFormPrice;