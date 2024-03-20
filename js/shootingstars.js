var colour="#AAC0AF"; //for sparkles I may one day add
var sparkles=4; 

var frequency=3000; //maximum wait between stars

/* Based on js by mf2fm web-design
 * Tinkerbell Magic Sparkle Script
 * http://www.mf2fm.com/rv
 * Ur so cool thank you
 */ 

var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600; 
var sleft=sdown=0;
var star=new Array(); 
var starv=new Array(); //lifespan (at 0 turns to tiny)
var starx=new Array();
var stary=new Array();
var randomwaits=new Array();
var starvelocity=new Array();
var count=0;
var nexttarget=0;
var next = 0;
var rwcount = 0;



window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    randomwaits[i] = Math.floor(Math.random()*frequency);
    starv[i]=0; 
    var rats=createDiv(7, 35); //div that holds the texture
    rats.style.backgroundImage="url(images/35x7-shootingstar.png)";
    rats.style.visibility="hidden";
    if(Math.random()>0.7){    // decides whether the star is on top or under main div
      rats.style.zIndex="999";
    }
    else{
      rats.style.zIndex="-999";
    }
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  count++;


  if (count%randomwaits[rwcount%sparkles]==0) { //if time until next star is made
    console.log("Star "+rwcount+" with wait "+randomwaits[rwcount%5]);
    rwcount++;
    count=0;
    if(Math.random()<0.2){
      x = Math.random()*400+sleft;
      y = 0+sdown;
    }
    else{
      x = 0+sleft;
      y = Math.random()*600+sdown;
    }
      
    star[rwcount%4].style.left=(starx[rwcount%4]=x)+"px";
    star[rwcount%4].style.top=(stary[rwcount%4]=y+1)+"px";
    //star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
    star[rwcount%4].style.visibility="visible";
    starvelocity[rwcount%4] = Math.floor(Math.random()*6)+1;
    starv[rwcount%4]=200; //lifespan?
  }

  for (c=0; c<sparkles; c++) { //update every star
    if (star[c]) update_star(c);
  }
  setTimeout("sparkle()", 10); //wait after function
}

function update_star(i) {
  if (star[i]) {
    stary[i]+=starvelocity[i]; //moves the stars
    starx[i]+=40;
    if (stary[i]<shigh+sdown) { //removes stars out of bounds
      star[i].style.top=stary[i]+"px";
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  return (div);
}

function newColour() {
  var c=new Array();
  c[0]=255;
  c[1]=Math.floor(Math.random()*256);
  c[2]=Math.floor(Math.random()*(256-c[1]/2));
  c.sort(function(){return (0.5 - Math.random());});
  return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}