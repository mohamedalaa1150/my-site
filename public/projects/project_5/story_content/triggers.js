function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5d36hLWpu7W":
        Script1();
        break;
      case "6nU74IMg1Ik":
        Script2();
        break;
      case "6RE7eTLi0LI":
        Script3();
        break;
      case "6P0aHdTT9C5":
        Script4();
        break;
      case "6pU3lW8zUJH":
        Script5();
        break;
      case "5loj7fXwXfO":
        Script6();
        break;
      case "5hKlaJktvo6":
        Script7();
        break;
      case "5cDNDz3ClQp":
        Script8();
        break;
      case "5iXE1g2pRvB":
        Script9();
        break;
      case "6qVqsfRf9s2":
        Script10();
        break;
      case "6Icz7U2NLu0":
        Script11();
        break;
      case "5qPp3lVsujP":
        Script12();
        break;
      case "6ON5kgaIZjI":
        Script13();
        break;
      case "5r3eRYSrOYP":
        Script14();
        break;
      case "67SDoB63g1x":
        Script15();
        break;
      case "6cWA94TbiCK":
        Script16();
        break;
      case "6g2gbEQONql":
        Script17();
        break;
      case "5wcr1xpC57Z":
        Script18();
        break;
      case "5uXzcaMSlET":
        Script19();
        break;
      case "6EuZb7xnuRb":
        Script20();
        break;
      case "5gua2DWMeGe":
        Script21();
        break;
      case "6b6EBGYQCxe":
        Script22();
        break;
      case "6BhO2VdGthA":
        Script23();
        break;
      case "6VGei5g8Kpo":
        Script24();
        break;
      case "5dDsvxok8J1":
        Script25();
        break;
      case "65yO5bliDcD":
        Script26();
        break;
      case "6D0pxXyqwgc":
        Script27();
        break;
      case "6XNd4s1RgaV":
        Script28();
        break;
      case "5jqk6S950fv":
        Script29();
        break;
      case "6hCuBl35CqN":
        Script30();
        break;
      case "5uUKAqL39fi":
        Script31();
        break;
      case "5lXeekS3bnH":
        Script32();
        break;
      case "6Io4PaOGpaa":
        Script33();
        break;
      case "5mzmMePXDDZ":
        Script34();
        break;
      case "5dhNDFVMeix":
        Script35();
        break;
      case "6mNcnK2VQ8E":
        Script36();
        break;
      case "5eV5OLF8zVy":
        Script37();
        break;
      case "6UcnJPMgDPV":
        Script38();
        break;
      case "6JZgcGov2qd":
        Script39();
        break;
      case "5cUl0tFfLrZ":
        Script40();
        break;
      case "6qgHnPm2MGs":
        Script41();
        break;
      case "6eVe5o1iFBy":
        Script42();
        break;
      case "6lNAIOl6mh5":
        Script43();
        break;
      case "62xK5WknqVm":
        Script44();
        break;
      case "6FjgohG1U0z":
        Script45();
        break;
      case "6AL6yKDal40":
        Script46();
        break;
      case "5WJ6SFO71na":
        Script47();
        break;
      case "5oS4EduIzpJ":
        Script48();
        break;
      case "5xAMQ2OoR7M":
        Script49();
        break;
      case "5Z5Aqm5ciLY":
        Script50();
        break;
      case "6nidU8bCex0":
        Script51();
        break;
      case "5i9ToNo72Yf":
        Script52();
        break;
      case "6Rh1gySuMPY":
        Script53();
        break;
      case "6ItvZRtb4td":
        Script54();
        break;
      case "6NUOcgHHB4F":
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
  player.once(() => {
const target = object('5Zjt86grqu6');
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

window.Script23 = function()
{
  player.once(() => {
const target = object('6fgOU0KeRf1');
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

window.Script24 = function()
{
  player.once(() => {
const target = object('6R0erAoxmsi');
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

window.Script25 = function()
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

window.Script26 = function()
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

window.Script27 = function()
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

window.Script28 = function()
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

window.Script29 = function()
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

window.Script30 = function()
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

window.Script31 = function()
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

window.Script32 = function()
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

window.Script33 = function()
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

window.Script34 = function()
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

window.Script35 = function()
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

window.Script36 = function()
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

window.Script37 = function()
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

window.Script38 = function()
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

window.Script39 = function()
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

window.Script40 = function()
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

window.Script41 = function()
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

window.Script42 = function()
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

window.Script43 = function()
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

window.Script44 = function()
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

window.Script45 = function()
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

window.Script46 = function()
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

window.Script47 = function()
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

window.Script48 = function()
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

window.Script49 = function()
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

window.Script50 = function()
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

window.Script51 = function()
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

window.Script52 = function()
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

window.Script53 = function()
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

window.Script54 = function()
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

window.Script55 = function()
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

};
