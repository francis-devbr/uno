import styled from "styled-components";


const Root = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    position: absolute;

    .value-souls {
      height: 3em;
      width: 8.5em;
      position: absolute;
      z-index: 2;
      top: 3px;
      left: 88px;
      font-size: 0.8em;

      &.value-souls p {
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
    
      
  .souls-value {
    height: 10em;
    width: 5em;
    position: absolute;
    z-index: 2;
    bottom: 9px;
    left: 3px;
    // background-color: #00F;

    &.souls-value p {
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
    width: 200px;
  }
`;

export default function TopSoulBar() {
 
  return (
    <Root>
      <img src="assets/images/hud/EnemySoulsLife.svg" alt="" className="img-enemy-soulslife" />
      <div className="souls-value"></div>
      <div className="value-souls">
        <p className="">500</p>
      </div>
    </Root>
  );
}
