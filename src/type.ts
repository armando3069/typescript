type PlayerDetails = {
  id: number;
  name: string;
};

type PlayerLevel = {
  level: number;
  behavior: "bad" | "good";
};

type Player = PlayerDetails & PlayerLevel;

const player: Player = {
  id: 200,
  name: "Legendary",
  level: 51,
  behavior: "good",
};

const logPlayer = (player: Player) => {
  player.level > 10
    ? console.log("Player still increase")
    : console.log("Player need to play");
};

logPlayer(player);
