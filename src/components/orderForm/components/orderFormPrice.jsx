import styled from 'styled-components/macro';

const OrderFormPrice = styled.span`
  ${props => props.styles.map(el => (el.class === Object.keys(props)[0] && el.style))}
`;

export default OrderFormPrice;