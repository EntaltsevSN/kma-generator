import styled from 'styled-components/macro';

const OrderFormStar = styled.span`
  ${props => props.styles.map(el => (el.class === Object.keys(props)[0] && el.style))}
`;

export default OrderFormStar;