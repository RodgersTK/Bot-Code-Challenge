import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ addToArmy }) {
  // Your code here
  // fetches bots from api
    const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch("https://bot-code-challenge-0anr.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} action={addToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;