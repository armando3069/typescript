"use strict";
const player = {
    id: 200,
    name: "Legendary",
    level: 51,
    behavior: "good",
};
const logPlayer = (player) => {
    player.level > 10
        ? console.log("Player still increase")
        : console.log("Player need to play");
};
logPlayer(player);
//# sourceMappingURL=type.js.map