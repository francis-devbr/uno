import styled from "styled-components";


const Root = styled.div`
    margin-left: 0px;
    margin-top: 0px;
    position: absolute;
    top: 16vh;

    .player-battle-field {
      height: 35vh;
      width: 168vh;
      z-index: 2;
      top: 3px;
      left: 88px;
      background-color: #00F8;
      margin-left: 60px;
    }

  
`;

export default function EnemyBattleField() {
 
  return (
    <Root>
      <div className="player-battle-field"></div>
     
    </Root>
  );
}
