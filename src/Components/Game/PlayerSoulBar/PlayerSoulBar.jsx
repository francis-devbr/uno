import styled from "styled-components";


const Root = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
  right: 0;

.value-souls {
  height: 3em;
    width: 8.2em;
    position: absolute;
    z-index: 2;
    bottom: 10px;
    right: 88px;
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
    top: 1px;
    right: 6px;
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

export default function PlayerSoulBar() {
 
  return (
    <Root>
      <img src="assets/images/hud/PlayerSoulsLifeRIGHT.svg" alt="" className="img-enemy-soulslife" />

        <div className="souls-value"></div>
        <div className="value-souls">
          <p className="">500</p>
        </div>
    </Root>
  );
}
