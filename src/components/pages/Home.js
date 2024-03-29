import InputGame from "../Input";
import ButtonCreate from "../ButtonCreate";
import Navigation from "../Navigation";

export default function Home() {
  return (
    <>
      <InputGame id="game" name="Name of game" placeholder="e.g. Carcassonne" />
      <InputGame
        id="player"
        name="Player names"
        placeholder="e.g. John Doe, Jane Doe"
      />
      <ButtonCreate name="Create Game" to="Create" />
      <Navigation />
    </>
  );
}
