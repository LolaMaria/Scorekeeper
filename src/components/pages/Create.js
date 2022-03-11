import Player from "../Player";
import ButtonCreate from "../ButtonCreate";

export default function CreatePlay() {
  return (
    <>
      <Player name="Jane Doe" score="0" />
      <ButtonCreate name="End Game" to="/" />
    </>
  );
}
