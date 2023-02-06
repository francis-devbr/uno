import { AnimateSharedLayout } from "framer-motion";
import TableStack from "./TableStack/TableStack.jsx";
import PlayerStack from "./PlayerStack/PlayerStack.jsx";
import { useEffect, useState } from "react";
import TopStack from "./TopStack/TopStack.jsx";
import DrawingStack from "./DrawingStack/DrawingStack.jsx";
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  moveCard,
  movePlayer,
  stopGame,
} from "../../stores/features/gameSlice";
import Scoreboard from "./Scoreboard/Scoreboard.jsx";
import { Player } from "../../utils/interfaces.js";
import API from "../../api/API";
import { Navigate } from "react-router";
import GameAudio from "../../utils/audio.js";
import TopSoulBar from "./TopSoulBar/TopSoulBar.jsx";
import TopPowerBar from "./TopPower/TopPowerBar.jsx";
import PlayerSoulBar from "./PlayerSoulBar/PlayerSoulBar.jsx";
import PlayerPowerBar from "./PlayerPower/PlayerPowerBar.jsx";

export default function Game() {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(false);
  const [playersOrder, setPlayersOrder] = useState<Player[]>([]);
  const inGame = useSelector((state) => state.game.inGame);

  useEffect(() => {
    const timeoutReady = setTimeout(() => {
      API.emitReady();
    }, 2000);
    API.onMove(({ card, draw, cardsToDraw, nxtPlayer }) => {
      dispatch(
        moveCard({
          nextPlayer: nxtPlayer,
          card,
          draw,
          cardsToDraw,
        })
      );
      if (draw) {
        GameAudio.playAudio("draw", draw);
      } else GameAudio.playAudio("play");
      setTimeout(() => dispatch(movePlayer()), 500);
    });

    API.onFinishGame((players: Player[]) => {
      setFinished(true);
      setPlayersOrder(players);
    });

    return () => {
      API.leaveServer();
      dispatch(stopGame());
      clearTimeout(timeoutReady);
    };
  }, [dispatch]);

  if (!inGame) return <Navigate replace to="/main-menu" />;

  return (
    <div
      style={{
        backgroundImage: "url(assets/images/board-arena.png)",
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AnimateSharedLayout>
        <TableStack />
        <TopSoulBar/>
        <TopPowerBar/>
        <TopStack />
        <PlayerStack />
        <PlayerSoulBar/>
        <PlayerPowerBar/>
        <DrawingStack />
      </AnimateSharedLayout>

      {finished && <Scoreboard players={playersOrder} />}
    </div>
  );
}
