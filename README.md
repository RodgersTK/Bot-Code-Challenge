# The Bot Battler
#### *Rodgers Kariuki*

Welcome to **Bot Battlr**, the one and only spot in the known universe where you
can custom build your own Bot Army! This is our app:

![checkpoint demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-hooks-code-challenge-bot-battlr/checkpoint_demo.gif)

## Project Description
    This is a simple website that:
    A user can:
        - See profiles of all bots rendered in `BotCollection`
        - Add an individual bot to my army by clicking on it.
        - Release a bot from my army by clicking on it.
        - Discharge a bot from their service forever,


## Setup/Installation Requirements
    1. Download zip in the code section of github to your desired folder
    2. Extract the files
    3. Open the folder with vs code.
    4. Then run node server.js to run our server. 

## Live link
Deployed Frontend can be accessed here [Front End](https://663d240b13e932409b7cd4bb--precious-clafoutis-c07d0e.netlify.app/)  
Deployed Backend can be accessed here [backend End](https://bot-code-challenge-0anr.onrender.com/)

## Technologies used
    - REACT
    - JSON SERVER

#### GET /transactions (How json-server looks like)
Example Response:

```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
```

#### DELETE /bots/:id

Example Response:

```json
{}
```

## Support and contact details
     email : rodgerstkm@gmail.com
     phone : +254702365400

### License
*Licenced under the MIT Licence
Copyright (c) 2024 **Rodgers Kariuki