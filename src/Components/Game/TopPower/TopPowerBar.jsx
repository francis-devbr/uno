import styled from "styled-components";


const Root = styled.div`
  position: fixed;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  --cardWidth: var(--cardWidthBigger);
`;

export default function TopPowerBar() {
  return <Root></Root>;
}
