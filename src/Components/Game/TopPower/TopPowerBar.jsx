import styled from "styled-components";


const Root = styled.div`
  margin-left: 85px;
  margin-top: 6vh;
  left: 10px;
  position: absolute;

  .power-value {
    height: 3em;
    // width: -0.5em;
    position: absolute;
    z-index: 2;
    top: 3px;
    left: 71px;
    font-size: 0.8em;

    &.power-value p {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 2em;
      color: white;
      -webkit-text-stroke: black 1.5px;
      font-family: sans-serif !important;
    }
  }

  .img-enemy-soulslife{
    width: 114px;
  }
  
`;

export default function TopPowerBar() {
  return <Root>
    <img src="assets/images/hud/enemyPower.svg" alt="" className="img-enemy-soulslife" />
    <div className="power-value">
      <p className="">52</p>
    </div>
  </Root>;
}
