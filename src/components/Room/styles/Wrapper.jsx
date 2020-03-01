import styled from 'styled-components';

const Wrapper = styled.div`

  flex: 1 0 auto;
  width: 100%;
  background: url(${({ coverUrl }) => coverUrl}) center no-repeat;
  background-size: 150%;

`;

export default Wrapper;