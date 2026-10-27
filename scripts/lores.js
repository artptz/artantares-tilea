Hooks.once("init", () => {

  const config = {
    magicLores: {},
    loreWind: {},
    magicWind: {},
    loreEffectDescriptions: {},
    loreEffects: {},
    windIcons: {}
  };

  config.magicLores = {
    "body": "Way of the Body",
    "mind": "Way of the Mind",
  };

  config.loreWind = {
    "body": "magick",
    "mind": "magick",
  };

  config.magicWind = {
    "body": "Magick",
    "mins": "Magick",
  };

  config.windIcons = {
    "body": "modules/wfrp4e-core/art/magic/winds.webp",
    "mind": "modules/wfrp4e-core/art/magic/winds.webp",
  };

  config.loreEffectDescriptions = {
    "body": `When they successfully cast a spell from this Lore, wizards of the 
      Way of the Body can remove 1 Condition from themselves or their Target.`,
    "mind": `When they successfully cast a spell from this Lore, wizards of the 
      Way of the Mind can can add +1 SL to any I or Int Test for the next 1d10 Rounds.`,
  };

  
  // -- Merge nel config di sistema --------------------------------------

  foundry.utils.mergeObject(game.wfrp4e.config, config);
  console.log("antares-tilea | Tilea's lores registered");
});