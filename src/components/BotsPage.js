import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [selectedBots, setSelectedBots] = useState([]);

  
  function addToArmy(bot) {
    if (!selectedBots.some((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  }
  function releaseFromArmy(bot) {
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
    );
  }
  function dischargeFromService(id) {
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== id)
    );
    fetch(`https://bot-code-challenge-0anr.onrender.com/bots/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <YourBotArmy
        onDelete={dischargeFromService}
        bots={selectedBots}
        releaseFromArmy={releaseFromArmy}
      />
      <BotCollection addToArmy={addToArmy} onDelete={dischargeFromService} />
    </div>
  );
}

export default BotsPage;
