function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WuEcCadAPb":
        Script1();
        break;
      case "5mEN7zvP8zf":
        Script2();
        break;
      case "6IVypTay5A2":
        Script3();
        break;
      case "6PdYVDQEH4l":
        Script4();
        break;
      case "5WkWkahwufC":
        Script5();
        break;
      case "6oeMF8TLIBB":
        Script6();
        break;
      case "629dsobUUYa":
        Script7();
        break;
      case "61dYzA6OvCW":
        Script8();
        break;
      case "65bT5rYTgAy":
        Script9();
        break;
      case "65r27IyI5hK":
        Script10();
        break;
      case "6WHR9PXB3bX":
        Script11();
        break;
      case "6B2yczfQdEz":
        Script12();
        break;
      case "6cKCEFdkOgf":
        Script13();
        break;
      case "6nWh58D2cY5":
        Script14();
        break;
      case "5j6fiBNcL6a":
        Script15();
        break;
      case "6bGpzOoyhcY":
        Script16();
        break;
      case "6Di3t1z40Gv":
        Script17();
        break;
      case "6RW8qBWELxt":
        Script18();
        break;
      case "6OeNZyaS5Sm":
        Script19();
        break;
      case "5yRYnp1K3vM":
        Script20();
        break;
      case "6hSicnEQmGR":
        Script21();
        break;
      case "6O0CRF4l68S":
        Script22();
        break;
      case "5YkJKwKuJUu":
        Script23();
        break;
      case "6UZvHKwhZin":
        Script24();
        break;
      case "6SHmi3nw4fr":
        Script25();
        break;
      case "6bArmJF11J8":
        Script26();
        break;
      case "6VJeYVux6VK":
        Script27();
        break;
      case "5oAF1h2LVgs":
        Script28();
        break;
      case "5vwwyW3heR6":
        Script29();
        break;
      case "6k1BPp7kfpf":
        Script30();
        break;
      case "6IBXJKSmMPK":
        Script31();
        break;
      case "6BAHo3rfQaB":
        Script32();
        break;
      case "6asnJ7xhPjl":
        Script33();
        break;
      case "5kr49sXVmRI":
        Script34();
        break;
      case "5iUV5WNBGwB":
        Script35();
        break;
      case "6mt7QFw11eR":
        Script36();
        break;
      case "6U6Tm5IhkvF":
        Script37();
        break;
      case "6UL4NysnF9Q":
        Script38();
        break;
      case "5c10gzz05MF":
        Script39();
        break;
      case "6DpDw1lYxlW":
        Script40();
        break;
      case "6TWbZbvmCzO":
        Script41();
        break;
      case "6E9FF8cvPL0":
        Script42();
        break;
      case "6A8zCPLkyOt":
        Script43();
        break;
      case "6PNtl5lr4M9":
        Script44();
        break;
      case "69N8GaWk1cE":
        Script45();
        break;
      case "5aaXydNVp6n":
        Script46();
        break;
      case "6B8FRY66lJ0":
        Script47();
        break;
      case "5wmO87lFuIQ":
        Script48();
        break;
      case "6qrKApElAGH":
        Script49();
        break;
      case "6PnasV5Pn0W":
        Script50();
        break;
      case "6JUezxFdSXS":
        Script51();
        break;
      case "6PaM3PRPWy7":
        Script52();
        break;
      case "6HqbSAMVbcH":
        Script53();
        break;
      case "5jc6aPTeOT4":
        Script54();
        break;
      case "6lPbdq9qJJH":
        Script55();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5Vx9Xj8dyM8');
const duration = 1000;
const easing = 'ease-out';
const id = '6ESL64NDp5K';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5Vx9Xj8dyM8');
const duration = 1000;
const easing = 'ease-out';
const id = '6ESL64NDp5K';
const pulseAmount = 0.03;
const delay = 2500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5Vx9Xj8dyM8');
const duration = 2000;
const easing = 'ease-out';
const id = '6MjnXslfiHV';
const teeterAmount = 10;
const delay = 2500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5Vx9Xj8dyM8');
const duration = 2000;
const easing = 'ease-out';
const id = '6MjnXslfiHV';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6Vdettx3gWJ');
const duration = 750;
const easing = 'ease-out';
const id = '6BTczAazIXV';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6Vdettx3gWJ');
const duration = 750;
const easing = 'ease-out';
const id = '6BTczAazIXV';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6EA3sdJnGf9');
const duration = 750;
const easing = 'ease-out';
const id = '6p1wtuD5WK9';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6EA3sdJnGf9');
const duration = 750;
const easing = 'ease-out';
const id = '6p1wtuD5WK9';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('69mUn2t4fAr');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5el0jCJ5D5S');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5el0jCJ5D5S');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6oJHcSlIdpd');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('5h0o88OXVvQ');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6bgVuazm0FX');
const duration = 1000;
const easing = 'ease-out';
const id = '63xCk5EnCeU';
const teeterAmount = 2;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6PLYoBjZ1M5');
const duration = 1000;
const easing = 'ease-out';
const id = '6pIJiQ25ewf';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('6HdULvxELsr');
const duration = 1000;
const easing = 'ease-out';
const id = '5X9OUAH6WS1';
const teeterAmount = 2;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('63VAChd13nh');
const duration = 1000;
const easing = 'ease-out';
const id = '5V412ZHRMDT';
const teeterAmount = 4;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('6J6fghjSoqM');
const duration = 1000;
const easing = 'ease-out';
const id = '5g3or9YL6nf';
const teeterAmount = 2;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('6IfmKvAShZk');
const duration = 1000;
const easing = 'ease-out';
const id = '5msOw2m6xzk';
const teeterAmount = 4;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6cTTyXFMMlk');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  player.once(() => {
const target = object('5k28ONDf0sH');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  const target = object('60wVwnsNrAm');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6YsAY9SptFD';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6HnBJtVT7Hp');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6HnBJtVT7Hp');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('6TRIoGdX2qL');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  player.once(() => {
const target = object('5l0nJTVNjEj');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script27 = function()
{
  player.once(() => {
const target = object('6eU0u09g4nW');
const duration = 1000;
const easing = 'ease-out';
const id = '63xCk5EnCeU';
const teeterAmount = 2;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6lMqe9VqDvG');
const duration = 1000;
const easing = 'ease-out';
const id = '6pIJiQ25ewf';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  player.once(() => {
const target = object('5b7NtHfBWyq');
const duration = 1000;
const easing = 'ease-out';
const id = '5X9OUAH6WS1';
const teeterAmount = 2;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  player.once(() => {
const target = object('5avU6lhI8cL');
const duration = 1000;
const easing = 'ease-out';
const id = '5V412ZHRMDT';
const teeterAmount = 4;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script31 = function()
{
  player.once(() => {
const target = object('6SE3kg92syl');
const duration = 1000;
const easing = 'ease-out';
const id = '5g3or9YL6nf';
const teeterAmount = 2;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  player.once(() => {
const target = object('5WvmgF4CgcY');
const duration = 1000;
const easing = 'ease-out';
const id = '5msOw2m6xzk';
const teeterAmount = 4;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script33 = function()
{
  player.once(() => {
const target = object('65KFmkyGn8N');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
const delay = 500;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  player.once(() => {
const target = object('6P775xO1hJ4');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
const delay = 1000;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  player.once(() => {
const target = object('6HGZMuIeHV7');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
const delay = 1500;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  const target = object('6TScxgA92FR');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '5z0MPjGQP45';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6jR615nf4XR');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6jR615nf4XR');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  player.once(() => {
const target = object('5XYlO4V2mER');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script40 = function()
{
  player.once(() => {
const target = object('5ZTvp8FRnqC');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script41 = function()
{
  player.once(() => {
const target = object('6gh7CpgEve5');
const duration = 1000;
const easing = 'ease-out';
const id = '63xCk5EnCeU';
const teeterAmount = 2;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  player.once(() => {
const target = object('6eRIFUUWg1g');
const duration = 1000;
const easing = 'ease-out';
const id = '6pIJiQ25ewf';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script43 = function()
{
  player.once(() => {
const target = object('6K1Edh9maTx');
const duration = 1000;
const easing = 'ease-out';
const id = '5X9OUAH6WS1';
const teeterAmount = 2;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script44 = function()
{
  player.once(() => {
const target = object('6oSvcFWg179');
const duration = 1000;
const easing = 'ease-out';
const id = '5V412ZHRMDT';
const teeterAmount = 4;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script45 = function()
{
  player.once(() => {
const target = object('6qxmn4FNa4x');
const duration = 1000;
const easing = 'ease-out';
const id = '5g3or9YL6nf';
const teeterAmount = 2;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script46 = function()
{
  player.once(() => {
const target = object('60zwDl6Ue4W');
const duration = 1000;
const easing = 'ease-out';
const id = '5msOw2m6xzk';
const teeterAmount = 4;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script47 = function()
{
  const target = object('5sw0fDfYKkj');
const duration = 750;
const easing = 'ease-out';
const id = '5vr9jRaaMXk';
const tiltAmount = 6;
player.addForTriggers(
id,
target.animate(
[ {rotate: `${tiltAmount}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6ghsSC7H7ZV');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('6ghsSC7H7ZV');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  player.once(() => {
const target = object('6nN0Av9Eum5');
const duration = 500;
const easing = 'ease-out';
const id = '6mpla33PlKl';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script51 = function()
{
  player.once(() => {
const target = object('5jr29Wf0DD6');
const duration = 500;
const easing = 'ease-out';
const id = '6Q6Va4zjy5V';
const teeterAmount = 4;
const delay = 1125;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script52 = function()
{
  player.once(() => {
const target = object('6CHGsIuL2nM');
const duration = 500;
const easing = 'ease-out';
const id = '6Ap77HTRShQ';
const teeterAmount = 4;
const delay = 1750;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  player.once(() => {
const target = object('5foZ37kgkF1');
const duration = 500;
const easing = 'ease-out';
const id = '6TDtgUbZWLS';
const teeterAmount = 4;
const delay = 2375;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script54 = function()
{
  player.once(() => {
const target = object('6CSc24dTFSh');
const duration = 500;
const easing = 'ease-out';
const id = '6jpRTw6MS4j';
const teeterAmount = 4;
const delay = 3000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script55 = function()
{
  player.once(() => {
const target = object('5pEFKc3PJ74');
const duration = 500;
const easing = 'ease-out';
const id = '60o87jabgzF';
const teeterAmount = 4;
const delay = 3625;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
