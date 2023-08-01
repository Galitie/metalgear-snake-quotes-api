const express = require("express");
const app = express();
const PORT = "https://galitie.github.io/metalgear-snake-quotes-api/";
const cors = require("cors");

app.use(cors());

const characters = {
  "Naked Snake": {
    1: "The nightmares? They never go away, Snake.",
    2: "This is good, isn’t it…?",
    3: "Time for you to put aside the gun, and live.",
    4: "To do the right thing, you sometimes have to leave the things you love behind",
  },
  "Venom Snake": {
    1: "I won't scatter your sorrow to the heartless sea. I will always be with you. Plant your roots in me. I won't see you end as ashes. You're all diamonds. We'll make diamonds from their ashes, take them into battle with us. We are Diamond Dogs.",
    2: "Skullface...",
    3: "Welcome to Outer Haven.",
    4: "I like working solo anyway.",
    5: "We don't draw weapons on comrades. Look around you, this is your family.",
    6: "Sorry, guess I've been away awhile.",
    7: "Kaz...",
    8: "What should I do? Tell me. Tell me like you used to.",
    9: "He's right! I killed him with my own hands.",
    10: "Anyone still alive is at their breaking point.",
    11: "So what, we're running a daycare now?",
    12: "Kept you waiting, huh?",
    13: "Kaz... I'm already a demon.",
    14: "When the times comes, I'll pull the trigger.",
    15: "We are not responisble to judge an enemy.",
    16: "A chance at a real life, which is not from behind a gun.",
    17: "This isn't about the past, we're fighting for the future.",
    18: "Bipedal?",
    29: "Your CQC is sloppy. Come see me later for a lesson you won't forget.",
  },
  "Solid Snake": {
    1: "War has changed.",
    2: "The very first thing I did after I was born was...punch the nurse in the face.",
    3: "A nuclear weapon?",
    4: "A female analyst?",
    5: "Liquid Snake?",
    6: "Nanomachines?",
    7: "Metal Gear...",
    8: "Psycho Mantis?",
    9: "2nd floor basement?",
    10: "Deepthroat?",
    11: "...Sniperwolf?",
    12: "FoxDie?",
    13: "Virtual mission?",
    14: "Virtuous mission?",
    15: "Sokolov",
    16: "Para...medic?",
    17: "CQC...close quarters combat, huh?",
    18: "Metal...Gear?!",
    19: "You're that Ninja...",
    20: "Big Boss is...alive?",
    21: "LIQUIIIIIIIIIIID",
    22: "David, my name is David.",
    23: "Kept you waiting, huh?",
    24: "But the engraving gives you no tactical advantage whatsoever",
    25: "You tend to twist your elbow to absorb the recoil. That's more of revolver technique.",
    26: "But, that was some fancy shooting.",
    27: "You're pretty good!",
    28: "You're crocked, aren't ya?",
    29: "Hey! You're gonna get wet again!",
    30: "Nice shoes!",
    31: "A surveillance camera?!",
    32: "Gotcha this time!",
    33: "You haven't even taken the safety off, rookie.",
    34: "Nothing to be ashamed of. Pain gets the better of us all.",
    35: "Mr. Kojima!",
    36: "Unfortunately, killing is one of those things that get easier the more you do it.",
  },
  "Liquid Snake": {
    1: "I've been inside this arm all along, waiting for the right time to awaken.",
    2: "Brother!!!",
    3: "The system is mine! Your guns and your weapons are no longer your own!",
    4: "Bang! Bang!",
    5: "I'm going to swat down a couple of bothersome flies.",
    6: "The man who stole the light from my life.",
    7: "The brother of light and the brother of dark.",
    8: "He's some kind of lunatic!",
    9: "SNAKE! I'm afraid I can't let you get past here! You're not going any farther! Die!",
    10: "So! The snake has finally come out of his hole!",
    11: "I'm your shadow!",
    12: "I'll send you to hell to meet him!",
    13: "SNAAAAAAAAAAAAAAAAAKE!",
    14: "Fox...",
    15: "",
  },
  "Solidus Snake": {
    1: "Jack, those days during the civil war were as real as they come… Every day was absolute, split between life and death. You ran from it, and now, you’ve been lead back to war by something less than real.",
    2: "We’re all born with an expiration date. No one lasts forever. Life is nothing but a grace period for turning our genetic material into the next generation. The data of life is transferred from parent to child. That’s how it works. But we have no heirs, no legacy. Cloned from our father with the ability to reproduce conveniently engineered out. What is our legacy if we cannot pass the torch? Proof of our existence – a mark of some sort.",
    3: "Damn the Patriots…!",
    4: "Unless you kill me and face your past, Jack, you will never escape. You’ll stay in the endless loop — your own double helix.",
    5: "All I want is to be remembered. By other people, by history. The Patriots are trying to protect their power, their own interests, by controlling the digital flow of information. I want my memory, my existence to remain. Unlike an intron of history, I will be remembered as an exon.",
  },
  unknown: {
    1: "Character not found.",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const characterName = req.params.name.toLowerCase();
  if (characters[characterName]) {
    res.json(characters[characterName]);
  } else {
    res.json(characters["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}`);
});
