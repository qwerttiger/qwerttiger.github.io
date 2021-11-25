var gdlvldata=[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[3,1,0,0,0,0,0],[3,2,0,0,0,0,0],[2,2,0,0,0,0,0],[4,4,0,0,0,0,0],[3,3,0,0,0,0,0],[8,4,0,0,0,0,0],[4,3,2,0,0,0,0],[4,3,2,0,0,0,0],[5,6,4,0,0,0,0],[4,3,3,2,0,0,0],[4,3,4,2,0,0,0],[5,8,3,4,0,0,0],[6,7,1,4,0,0,0],[5,3,5,3,0,0,0],[2,2,2,2,2,0,0],[2,10,2,3,4,0,0],[7,1,1,2,2,1,0],[4,5,2,2,8,4,0],[2,2,0,1,2,1,3]];
var bigInf=new bigNum(1.8,308);
var screennum=0;
var lastscreennum=1;
var points=new bigNum(0,0);
var lastpoints=new bigNum(1,1);
var metapoints=new bigNum(0,0);
var lastmetapoints=new bigNum(1,1);
var metametapoints=new bigNum(0,0);
var lastmetametapoints=bigInf;
var infinitypoints=0;
var lastinfinitypoints=Infinity;
var eternitypoints=0;
var luckypoints=0;
var lastlucky=0;
var isInf=false;
var lastisInf=true;
var u1=0;
var u2=0;
var u3=0;
var u4=0;
var u5=0;
var u6=0;
var u7=0;
var breakinf=0;
var lastbreakinf=1;
var lastu1=0;
var lastu2=0;
var lastu3=0;
var lastu4=0;
var lastu5=0;
var lastu6=0;
var lastu7=0;
var u1l=0;
var u2l=0;
var u3l=0;
var u4l=0;
var ten=new bigNum(1,1);
var zero=new bigNum(0,0);
var ach1=0;
var ach2=0;
var ach3=0;
var ach4=0;
var ach5=0;
var ach6=0;
var ach7=0;
var ach8=0;
var ach9=0;
var ach10=0;
var ach11=0;
var ach12=0;
var ach13=0;
var ach14=0;
var mc1=0;
var mc2=0;
var mc3=0;
var mc4=0;
var mc5=0;
var mc6=0;
var mc7=0;
var mc8=0;
var mc9=0;
var mc10=0;
var mc11=0;
var mc12=0;
var mc13=0;
var mc14=0;
var mc15=0;
var mc16=0;
var mc17=0;
var mc18=0;
var mc19=0;
var mc20=0;
var px1=0;
var px2=0;
var px3=0;
var px4=0;
var px5=0;
var px6=0;
var px7=0;
var px8=0;
var px9=0;
var px10=0;
var px11=0;
var px12=0;
var goldenapple=0;
var crafts=0;
var mines=0;
var metamultiplier=0;
var gdsk1=1;
var gdsk2=1;
var gdsk3=1;
var gdsk4=1;
var gdsk5=1;
var gdsk6=1;
var gdsk7=1;
var lastgdsk1=1;
var lastgdsk2=1;
var lastgdsk3=1;
var lastgdsk4=1;
var lastgdsk5=1;
var lastgdsk6=1;
var lastgdsk7=1;
var gdlvl1=0;
var gdlvl2=0;
var gdlvl3=0;
var gdlvl4=0;
var gdlvl5=0;
var gdlvl6=0;
var gdlvl7=0;
var gdlvl8=0;
var gdlvl9=0;
var gdlvl10=0;
var gdlvl11=0;
var gdlvl12=0;
var gdlvl13=0;
var gdlvl14=0;
var gdlvl15=0;
var gdlvl16=0;
var gdlvl17=0;
var gdlvl18=0;
var gdlvl19=0;
var gdlvl20=0;
var gdlvl21=0;
var energy=0;
var checkloop=0;
if (localStorage.getItem("points")){
  points=parse(localStorage.getItem("points"));
}
if (localStorage.getItem("metapoints")){
  metapoints=parse(localStorage.getItem("metapoints"));
}
if (localStorage.getItem("metametapoints")){
  metametapoints=parse(localStorage.getItem("metametapoints"));
}
if (localStorage.getItem("infinitypoints")){
  infinitypoints=Number(localStorage.getItem("infinitypoints"));
}
if (localStorage.getItem("breakinf")){
  breakinf=Number(localStorage.getItem("breakinf"));
}
if (localStorage.getItem("u1")){
  u1=Number(localStorage.getItem("u1"));
}
if (localStorage.getItem("u2")){
  u2=Number(localStorage.getItem("u2"));
}
if (localStorage.getItem("u3")){
  u3=Number(localStorage.getItem("u3"));
}
if (localStorage.getItem("u4")){
  u4=Number(localStorage.getItem("u4"));
}
if (localStorage.getItem("u5")){
  u5=Number(localStorage.getItem("u5"));
}
if (localStorage.getItem("u6")){
  u6=Number(localStorage.getItem("u6"));
}
if (localStorage.getItem("u7")){
  u7=Number(localStorage.getItem("u7"));
}
if (localStorage.getItem("ach1")){
  ach1=Number(localStorage.getItem("ach1"));
}
if (localStorage.getItem("ach2")){
  ach2=Number(localStorage.getItem("ach2"));
}
if (localStorage.getItem("ach3")){
  ach3=Number(localStorage.getItem("ach3"));
}
if (localStorage.getItem("ach4")){
  ach4=Number(localStorage.getItem("ach4"));
}
if (localStorage.getItem("ach5")){
  ach5=Number(localStorage.getItem("ach5"));
}
if (localStorage.getItem("ach6")){
  ach6=Number(localStorage.getItem("ach6"));
}
if (localStorage.getItem("ach7")){
  ach6=Number(localStorage.getItem("ach7"));
}
if (localStorage.getItem("ach8")){
  ach6=Number(localStorage.getItem("ach8"));
}
if (localStorage.getItem("ach9")){
  ach6=Number(localStorage.getItem("ach9"));
}
if (localStorage.getItem("ach10")){
  ach6=Number(localStorage.getItem("ach10"));
}
if (localStorage.getItem("ach11")){
  ach6=Number(localStorage.getItem("ach11"));
}
if (localStorage.getItem("ach12")){
  ach6=Number(localStorage.getItem("ach12"));
}
if (localStorage.getItem("ach13")){
  ach6=Number(localStorage.getItem("ach13"));
}
if (localStorage.getItem("ach14")){
  ach6=Number(localStorage.getItem("ach14"));
}
if (localStorage.getItem("eternitypoints")){
  eternitypoints=Number(localStorage.getItem("eternitypoints"));
}
if (localStorage.getItem("luckypoints")){
  luckypoints=Number(localStorage.getItem("luckypoints"));
}
if (localStorage.getItem("crafts")){
  crafts=Number(localStorage.getItem("crafts"));
}
if (localStorage.getItem("goldenapple")){
  goldenapple=Number(localStorage.getItem("goldenapple"));
}
if (localStorage.getItem("mines")){
  mines=Number(localStorage.getItem("mines"));
}
if (localStorage.getItem("metamultiplier")){
  metamultiplier=Number(localStorage.getItem("metamultiplier"));
}
for (i=1; i<=20; i++){
  eval("if (localStorage.getItem('mc"+i+"')){mc"+i+"=Number(localStorage.getItem('mc"+i+"'))}")
}
for (i=1; i<=12; i++){
  eval("if (localStorage.getItem('px"+i+"')){px"+i+"=Number(localStorage.getItem('px"+i+"'))}")
}
if (localStorage.getItem("bgcolor")){
  document.getElementById("bgcolor").value=localStorage.getItem("bgcolor");
}
if (localStorage.getItem("textcolor")){
  document.getElementById("textcolor").value=localStorage.getItem("textcolor");
}
if (localStorage.getItem("bbgcolor")){
  document.getElementById("bbgcolor").value=localStorage.getItem("bbgcolor");
}
if (localStorage.getItem("bhbgcolor")){
  document.getElementById("bhbgcolor").value=localStorage.getItem("bhbgcolor");
}
if (localStorage.getItem("achlbgcolor")){
  document.getElementById("achlbgcolor").value=localStorage.getItem("achlbgcolor");
}
if (localStorage.getItem("achubgcolor")){
  document.getElementById("achubgcolor").value=localStorage.getItem("achubgcolor");
}
if (localStorage.getItem("achutextcolor")){
  document.getElementById("achutextcolor").value=localStorage.getItem("achutextcolor");
}
if (localStorage.getItem("bbcolor")){
  document.getElementById("bbcolor").value=localStorage.getItem("bbcolor");
}
if (localStorage.getItem("tbcolor")){
  document.getElementById("tbcolor").value=localStorage.getItem("tbcolor");
}
for (i=1; i<=7; i++){
  eval("if (localStorage.getItem('gdsk"+i+"')){gdsk"+i+"=Number(localStorage.getItem('gdsk"+i+"'))}");
}
for (i=1; i<=21; i++){
  eval("if (localStorage.getItem('gdlvl"+i+"')){gdlvl"+i+"=Number(localStorage.getItem('gdlvl"+i+"'))}");
}
if (localStorage.getItem("energy")){
  energy=Number(localStorage.getItem("energy"));
}
function IPmult(){
  if (infinitypoints>=3**u5 && u5<647){
    infinitypoints-=3**u5;
    u5+=1;
    IPmult();
  }
}
function check(){
  points.finiter();
  metapoints.finiter();
  metametapoints.finiter();
  points.round();
  metapoints.round();
  metametapoints.round();
  points.fix();
  metapoints.fix();
  metametapoints.fix();
  if ((!points.gte(ten) && lastpoints.gte(ten))||(!points.gte(ten) && screennum==0 && lastscreennum!=0)){
    document.getElementById("getmeta").innerHTML="<button onclick='getmeta()'>Get 10 points to reset</button><br>";
  } else if ((points.gte(ten) && !lastpoints.gte(ten))||(points.gte(ten) && screennum==0 && lastscreennum!=0)){
    document.getElementById("getmeta").innerHTML="<button onclick='getmeta()'>Reset for metapoints</button><br>";
  }
  if (screennum!=0){
    document.getElementById("getmeta").innerHTML="";
  }
  if ((!metapoints.gte(ten) && lastmetapoints.gte(ten))||(metapoints.lte(ten) && screennum==0 && lastscreennum!=0)){
    document.getElementById("getmetameta").innerHTML="<button onclick='getmetameta()'>Get 10 metapoints to reset</button><br>";
  } else if ((metapoints.gte(ten) && !lastmetapoints.gte(ten))||(metapoints.gte(ten) && screennum==0 && lastscreennum!=0)){
    document.getElementById("getmetameta").innerHTML="<button onclick='getmetameta()'>Reset for metametapoints</button><br>";
  }
  if (screennum!=0){
    document.getElementById("getmetameta").innerHTML="";
  }
  if (screennum==0){
    document.getElementById("points").innerHTML="Points: "+points+"<br>";
    document.getElementById("metapoints").innerHTML="Metapoints: "+metapoints+"<br>";
    document.getElementById("metametapoints").innerHTML="Metametapoints: "+metametapoints+"<br><br>";
  }
  if (screennum==0 && lastscreennum!=0){
    document.getElementById("getpoint").innerHTML="<button onclick='addpoint()'>Get point</button><br>";
  } else if (screennum!=0 && lastscreennum!=screennum){
    document.getElementById("points").innerHTML="";
    document.getElementById("metapoints").innerHTML="";
    document.getElementById("metametapoints").innerHTML="";
    document.getElementById("getpoint").innerHTML="";
  }
  document.getElementById("IP").innerHTML="Infinity Points: "+stround(infinitypoints)+"<br>";
  document.getElementById("EP").innerHTML="Eternity Points: "+stround(eternitypoints)+"<br>";
  document.getElementById("LP").innerHTML="Lucky Points: "+stround(luckypoints)+"<br>";
  if ((lastscreennum!=1 || lastu1) && !u1){
    document.getElementById("u1").innerHTML="<button onclick='if (infinitypoints>=1){u1=1;infinitypoints-=1;u1l=setInterval(addpoint,100);}'>Get point autoclicker, 1 IP</button><br>";
  } else if ((lastscreennum!=1 || !lastu1) && u1){
    document.getElementById("u1").innerHTML="<button>Already bought</button><br>";
  }
  if ((lastscreennum!=1 || lastu2) && !u2){
    document.getElementById("u2").innerHTML="<button onclick='if (infinitypoints>=5){u2=1;infinitypoints-=5;u2l=setInterval(autometa,100);}'>Get metapoint autoclicker, 5 IP</button><br>";
  } else if ((lastscreennum!=1 || !lastu2) && u2){
    document.getElementById("u2").innerHTML="<button>Already bought</button><br>";
  }
  if ((lastscreennum!=1 || lastu3) && !u3){
    document.getElementById("u3").innerHTML="<button onclick='if (infinitypoints>=10){u3=1;infinitypoints-=10;u3l=setInterval(autometameta,100);}'>Get metametapoint autoclicker, 10 IP</button><br>";
  } else if ((lastscreennum!=1 || !lastu3) && u3){
    document.getElementById("u3").innerHTML="<button>Already bought</button><br>";
  }
  if ((lastscreennum!=1 || lastu4) && !u4){
    document.getElementById("u4").innerHTML="<button onclick='if (infinitypoints>=25){u4=1;infinitypoints-=25;u4l=setInterval(autoIP,100);}'>Get Infinity autoclicker, 25 IP</button><br>";
  } else if ((lastscreennum!=1 || !lastu4) && u4){
    document.getElementById("u4").innerHTML="<button>Already bought</button><br>";
  }
  if (lastscreennum!=1 || lastu5!=u5){
    document.getElementById("u5").innerHTML="<button onclick='IPmult()'>Get x2 IP mult, "+stround(3**u5)+" IP</button><br>";
  }
  if ((lastscreennum!=1 || lastu6) && !u6){
    document.getElementById("u6").innerHTML="<button onclick='if (infinitypoints>=15){u6=1;infinitypoints-=15;}'>IP boost all point gain, 15 IP</button><br>";
  } else if ((lastscreennum!=1 || !lastu6) && u6){
    document.getElementById("u6").innerHTML="<button>Already bought</button><br>";
  }
  if ((lastscreennum!=1 || lastu7) && !u7){
    document.getElementById("u7").innerHTML="<button onclick='if (infinitypoints>=1e10){u7=1;infinitypoints-=1e10;}'>IP gain squared, 1e10 IP</button><br>";
  } else if ((lastscreennum!=1 || !lastu7) && u7){
    document.getElementById("u7").innerHTML="<button>Already bought</button><br>";
  }
  if ((lastscreennum!=1 || lastbreakinf) && !breakinf){
    document.getElementById("breakinf").innerHTML="<button onclick='if (infinitypoints>=100){breakinf=1;infinitypoints-=100;}'>Break Infinity, 100 IP</button><br>";
  } else if ((lastscreennum!=1 || !lastbreakinf) && breakinf){
    document.getElementById("breakinf").innerHTML="<button>Infinity broken</button><br>";
  }
  if (lastscreennum!=1 || infinitypoints!=lastinfinitypoints || luckypoints!=lastlucky){
    if (infinitypoints==Infinity){
      document.getElementById("eternity").innerHTML="<button onclick='if (u1l){clearInterval(u1l);};if (u2l){clearInterval(u2l);};if (u3l){clearInterval(u3l);};if (u4l){clearInterval(u4l);};eternitypoints+=Math.pow(10,luckypoints);infinitypoints=0;metametapoints=zero;metapoints=zero;points=zero;u1=0;u2=0;u3=0;u4=0;u5=0;u6=0;u7=0;breakinf=0;'>Eternity for "+stround(Math.pow(10,luckypoints))+" Eternity Point</button><br>";
    } else {
      document.getElementById("eternity").innerHTML="<button>Get Infinity IP to Eternity</button><br>";
    }
  }
  if (eternitypoints==Infinity && (document.getElementById("minecraftify").innerHTML=="Get Infinity Eternity points to Minecraftify<br>" || lastscreennum!=1)){
    document.getElementById("minecraftify").innerHTML="Minecraftify for 1 fist and 5 craft";
    document.getElementById("minecraftify").setAttribute("onclick","minecraftify()")
    document.getElementById("geometrydashify").innerHTML="Geometrydashify for 100% energy";
    document.getElementById("geometrydashify").setAttribute("onclick","geometrydashify()")
  } else if (eternitypoints!=Infinity && (document.getElementById("minecraftify").innerHTML=="Minecraftify for 1 fist and 5 craft<br>" || lastscreennum!=1)){
    document.getElementById("minecraftify").innerHTML="Get Infinity Eternity points to Minecraftify";
    document.getElementById("minecraftify").removeAttribute("onclick");
    document.getElementById("geometrydashify").innerHTML="Get Infinity Eternity points to Geometrydashify";
    document.getElementById("geometrydashify").removeAttribute("onclick");
  }
  if (screennum==1){
    document.getElementById('infinityup').style.display='block';
  } else {
    document.getElementById('infinityup').style.display='none';
  }
  if (screennum==2){
    document.getElementById('options').style.display='block';
  } else {
    document.getElementById('options').style.display='none';
  }
  if (screennum==3){
    document.getElementById('achievements').style.display='block';
  } else {
    document.getElementById('achievements').style.display='none';
  }
  if (screennum==4){
    document.getElementById('autoclickers').style.display='block';
  } else {
    document.getElementById('autoclickers').style.display='none';
  }
  if (screennum==5){
    document.getElementById('minecraft').style.display='block';
  } else {
    document.getElementById('minecraft').style.display='none';
  }
  if (screennum==0){
    document.getElementById('footer').style.display='block';
  } else {
    document.getElementById('footer').style.display='none';
  }
  if (screennum==6){
    document.getElementById('geometrydash').style.display='block';
  } else {
    document.getElementById('geometrydash').style.display='none';
  }
  if (metametapoints.gte(bigInf)){
    isInf=true;
  } else if (lastisInf && !metametapoints.gte(bigInf)) {
    isInf=false;
  }
  if ((screennum==0 && lastscreennum!=0) || (metametapoints!=lastmetametapoints && screennum==0)){
    if (IPcalc()!=0){
      document.getElementById("infinity").innerHTML="<button onclick='getIP()'>Infinity for "+stround(IPcalc())+" Infinity Point</button>";
    } else {
      document.getElementById("infinity").innerHTML="<button>Get Infinity metametapoints to Infinity</button>";
    }
  } else if (screennum!=0 && lastscreennum==0){
    document.getElementById("infinity").innerHTML="";
  }
  if (points>=1 || ach1){
    ach1=1;
    document.getElementById("ach1").classList.add("gottenach");
  }
  if (metapoints>=1 || ach2){
    ach2=1;
    document.getElementById("ach2").classList.add("gottenach");
  }
  if (metametapoints>=1 || ach3){
    ach3=1;
    document.getElementById("ach3").classList.add("gottenach");
  }
  if (infinitypoints>=1 || ach4){
    ach4=1;
    document.getElementById("ach4").classList.add("gottenach");
  }
  if (infinitypoints>=1e10 || ach5){
    ach5=1;
    document.getElementById("ach5").classList.add("gottenach");
  }
  if (eternitypoints>=1 || ach6){
    ach6=1;
    document.getElementById("ach6").classList.add("gottenach");
  }
  if (luckypoints>=1 || ach7){
    ach7=1;
    document.getElementById("ach7").classList.add("gottenach");
  }
  if (luckypoints>=10 || ach8){
    ach8=1;
    document.getElementById("ach8").classList.add("gottenach");
  }
  if (eternitypoints==Infinity || ach9){
    ach9=1;
    document.getElementById("ach9").classList.add("gottenach");
  }
  if (px2>=1 || ach10){
    ach10=1;
    document.getElementById("ach10").classList.add("gottenach");
  }
  if (mc20>=1 || ach11){
    ach11=1;
    document.getElementById("ach11").classList.add("gottenach");
  }
  if (gdlvl1==1 || ach12){
    ach11=1;
    document.getElementById("ach12").classList.add("gottenach");
  }
  if (gdlvl1==1 && gdlvl2==1 && gdlvl3==1 && gdlvl4==1 && gdlvl5==1 && gdlvl6==1 && gdlvl7==1 && gdlvl8==1 && gdlvl9==1 && gdlvl10==1 && gdlvl11==1 && gdlvl12==1 && gdlvl13==1 && gdlvl14==1 && gdlvl15==1 && gdlvl16==1 && gdlvl17==1 && gdlvl18==1 && gdlvl19==1 && gdlvl20==1 && gdlvl21==1 || ach13){
    ach11=1;
    document.getElementById("ach13").classList.add("gottenach");
  }
  if (gdsk1==10 && gdsk2==10 && gdsk3==10 && gdsk4==10 && gdsk5==10 && gdsk6==10 && gdsk7==10 || ach14){
    ach11=1;
    document.getElementById("ach14").classList.add("gottenach");
  }
  if (!u2){
    for (element of document.getElementsByClassName("ac1")){
      element.style.display="none";
    }
  } else {
    for (element of document.getElementsByClassName("ac1")){
      element.style.display="table-cell";
    }
  }
  if (!u3){
    for (element of document.getElementsByClassName("ac2")){
      element.style.display="none";
    }
  } else {
    for (element of document.getElementsByClassName("ac2")){
      element.style.display="table-cell";
    }
  }
  if (!u4){
    for (element of document.getElementsByClassName("ac3")){
      element.style.display="none";
    }
  } else {
    for (element of document.getElementsByClassName("ac3")){
      element.style.display="table-cell";
    }
  }
  if (document.getElementById("lucky").style.display=="none" && Math.random()*30000/(Math.log10(eternitypoints)+1)<=1 && eternitypoints>=1){
    var luckypic=Math.random()*10;
    if (luckypic<=1){
      document.getElementById("lucky").src="golden.png";
    } else if (luckypic<=2){
      document.getElementById("lucky").src="wrath.png";
    } else {
      document.getElementById("lucky").src="clover.png";
    }
    document.getElementById("lucky").style.top=Math.floor(Math.random()*(window.innerHeight-100))+"px";
    document.getElementById("lucky").style.left=Math.floor(Math.random()*(window.innerWidth-100))+"px";
    document.getElementById("lucky").style.display="inline";
  }
  document.getElementById("ticker").style.left=Number(document.getElementById("ticker").style.left.slice(0,-1))-document.getElementById("mspf").value/200+"%";
  if (Number(document.getElementById("ticker").style.left.slice(0,-1))<=-100-(parseFloat(window.getComputedStyle(document.getElementById("ticker")).getPropertyValue('width'))-parseFloat(window.getComputedStyle(document.getElementById("ticker")).getPropertyValue('padding-left'))-parseFloat(window.getComputedStyle(document.getElementById("ticker")).getPropertyValue('padding-right')))/window.innerWidth*100){
    document.getElementById("ticker").style.left="0%";
    document.getElementById("ticker").innerHTML=ticker();
  }
  document.getElementById("crafts").innerHTML="Crafts: "+crafts;
  document.getElementById("goldenapple").innerHTML="Used golden apples: "+goldenapple;
  document.getElementById("mines").innerHTML="Mines: "+mines;
  document.getElementById("metamult").innerHTML="Metamultiplier: "+(metamultiplier+1);
  document.getElementById("mc1").innerHTML="Wood: "+mc1;
  document.getElementById("mc2").innerHTML="Sticks: "+mc2;
  document.getElementById("mc3").innerHTML="Apple: "+mc3;
  document.getElementById("mc4").innerHTML="Stone: "+mc4;
  document.getElementById("mc5").innerHTML="Iron: "+mc5;
  document.getElementById("mc6").innerHTML="Iron block: "+mc6;
  document.getElementById("mc7").innerHTML="Gold: "+mc7;
  document.getElementById("mc8").innerHTML="Diamond: "+mc8;
  document.getElementById("mc9").innerHTML="Golden apple: "+mc9;
  document.getElementById("mc10").innerHTML="Diamond block: "+mc10;
  document.getElementById("mc11").innerHTML="Obsidian: "+mc11;
  document.getElementById("mc12").innerHTML="Nether scrap: "+mc12;
  document.getElementById("mc13").innerHTML="Netherite: "+mc13;
  document.getElementById("mc14").innerHTML="Netherite block: "+mc14;
  document.getElementById("mc15").innerHTML="Blaze powder: "+mc15;
  document.getElementById("mc16").innerHTML="Ender pearls: "+mc16;
  document.getElementById("mc17").innerHTML="Eye of enders: "+mc17;
  document.getElementById("mc18").innerHTML="Enderite scrap: "+mc18;
  document.getElementById("mc19").innerHTML="Enderite: "+mc19;
  document.getElementById("mc20").innerHTML="Meta-portal: "+mc20;
  document.getElementById("px1").innerHTML="Fist: "+px1;
  document.getElementById("px2").innerHTML="Wood: "+px2;
  document.getElementById("px3").innerHTML="Stone: "+px3;
  document.getElementById("px4").innerHTML="Iron: "+px4;
  document.getElementById("px5").innerHTML="Iron block: "+px5;
  document.getElementById("px6").innerHTML="Diamond: "+px6;
  document.getElementById("px7").innerHTML="Diamond block: "+px7;
  document.getElementById("px8").innerHTML="Obsidian: "+px8;
  document.getElementById("px9").innerHTML="Netherite: "+px9;
  document.getElementById("px10").innerHTML="Netherite block: "+px10;
  document.getElementById("px11").innerHTML="Eye of ender: "+px11;
  document.getElementById("px12").innerHTML="Enderite: "+px12;
  document.getElementsByTagName("html")[0].style.backgroundColor=document.getElementById("bgcolor").value;
  document.getElementsByTagName("html")[0].style.color=document.getElementById("textcolor").value;
  for (i of document.getElementsByTagName("button")){i.style.color=document.getElementById("textcolor").value}
  for (i of document.getElementsByTagName("button")){if (!i.matches(":hover") && i.id!="ticker"){i.style.backgroundColor=document.getElementById("bbgcolor").value}}
  for (i of document.getElementsByTagName("button")){if (i.matches(":hover") && i.id!="ticker"){i.style.backgroundColor=document.getElementById("bhbgcolor").value}}
  for (i of document.getElementsByTagName("input")){if (i.matches("input[type=\"color\"]")){i.style.backgroundColor=document.getElementById("bbgcolor").value}}
  for (i of document.getElementsByTagName("button")){if (i.matches("#achievements :not(gottenach)")){i.style.backgroundColor=document.getElementById("achlbgcolor").value}};
  for (i of document.getElementsByTagName("button")){if (i.matches("#achievements .gottenach")){i.style.backgroundColor=document.getElementById("achubgcolor").value}};
  for (i of document.getElementsByTagName("button")){if (i.matches("#achievements .gottenach")){i.style.color=document.getElementById("achutextcolor").value}};
  for (i of document.getElementsByTagName("button")){i.style.borderColor=document.getElementById("bbcolor").value};
  document.getElementById("tickercontainer").style.borderTopColor=document.getElementById("tbcolor").value;
  document.getElementById("tickercontainer").style.borderBottomColor=document.getElementById("tbcolor").value;
  if (document.getElementById("mspfvalue").innerHTML!=document.getElementById("mspf").value){
    clearInterval(checkloop);
    checkloop=setInterval(check,document.getElementById("mspf").value)
  }
  document.getElementById("mspfvalue").innerHTML=document.getElementById("mspf").value+" milliseconds per frame, "+Math.round(1000/document.getElementById("mspf").value)+" fps";
  if ((!u1 && infinitypoints>=1) || (!u2 && infinitypoints>=5) || (!u3 && infinitypoints>=10) || (!u4 && infinitypoints>=25) || (infinitypoints>=3**u5 && u5<647) || (!u6 && infinitypoints>=15) || (!u7 && infinitypoints>=1e10) || (!breakinf && infinitypoints>=100)){
    document.getElementById("screen2").style.background="black";
    document.getElementById("screen2").style.color="white";
  }
  if (gdlvl1==0){
    document.getElementById("gdcomp1").innerHTML="❌"
  } else {
    document.getElementById("gdcomp1").innerHTML="✔️"
  }
  if (gdlvl2==0){
    document.getElementById("gdcomp2").innerHTML="❌"
  } else {
    document.getElementById("gdcomp2").innerHTML="✔️"
  }
  if (gdlvl3==0){
    document.getElementById("gdcomp3").innerHTML="❌"
  } else {
    document.getElementById("gdcomp3").innerHTML="✔️"
  }
  if (gdlvl4==0){
    document.getElementById("gdcomp4").innerHTML="❌"
  } else {
    document.getElementById("gdcomp4").innerHTML="✔️"
  }
  if (gdlvl5==0){
    document.getElementById("gdcomp5").innerHTML="❌"
  } else {
    document.getElementById("gdcomp5").innerHTML="✔️"
  }
  if (gdlvl6==0){
    document.getElementById("gdcomp6").innerHTML="❌"
  } else {
    document.getElementById("gdcomp6").innerHTML="✔️"
  }
  if (gdlvl7==0){
    document.getElementById("gdcomp7").innerHTML="❌"
  } else {
    document.getElementById("gdcomp7").innerHTML="✔️"
  }
  if (gdlvl8==0){
    document.getElementById("gdcomp8").innerHTML="❌"
  } else {
    document.getElementById("gdcomp8").innerHTML="✔️"
  }
  if (gdlvl9==0){
    document.getElementById("gdcomp9").innerHTML="❌"
  } else {
    document.getElementById("gdcomp9").innerHTML="✔️"
  }
  if (gdlvl10==0){
    document.getElementById("gdcomp10").innerHTML="❌"
  } else {
    document.getElementById("gdcomp10").innerHTML="✔️"
  }
  if (gdlvl11==0){
    document.getElementById("gdcomp11").innerHTML="❌"
  } else {
    document.getElementById("gdcomp11").innerHTML="✔️"
  }
  if (gdlvl12==0){
    document.getElementById("gdcomp12").innerHTML="❌"
  } else {
    document.getElementById("gdcomp12").innerHTML="✔️"
  }
  if (gdlvl13==0){
    document.getElementById("gdcomp13").innerHTML="❌"
  } else {
    document.getElementById("gdcomp13").innerHTML="✔️"
  }
  if (gdlvl14==0){
    document.getElementById("gdcomp14").innerHTML="❌"
  } else {
    document.getElementById("gdcomp14").innerHTML="✔️"
  }
  if (gdlvl15==0){
    document.getElementById("gdcomp15").innerHTML="❌"
  } else {
    document.getElementById("gdcomp15").innerHTML="✔️"
  }
  if (gdlvl16==0){
    document.getElementById("gdcomp16").innerHTML="❌"
  } else {
    document.getElementById("gdcomp16").innerHTML="✔️"
  }
  if (gdlvl17==0){
    document.getElementById("gdcomp17").innerHTML="❌"
  } else {
    document.getElementById("gdcomp17").innerHTML="✔️"
  }
  if (gdlvl18==0){
    document.getElementById("gdcomp18").innerHTML="❌"
  } else {
    document.getElementById("gdcomp18").innerHTML="✔️"
  }
  if (gdlvl19==0){
    document.getElementById("gdcomp19").innerHTML="❌"
  } else {
    document.getElementById("gdcomp19").innerHTML="✔️"
  }
  if (gdlvl20==0){
    document.getElementById("gdcomp20").innerHTML="❌"
  } else {
    document.getElementById("gdcomp20").innerHTML="✔️"
  }
  if (gdlvl21==0){
    document.getElementById("gdcomp21").innerHTML="❌"
  } else {
    document.getElementById("gdcomp21").innerHTML="✔️"
  }
  document.getElementById("gdskl1").innerHTML=gdsk1;
  document.getElementById("gdskl2").innerHTML=gdsk2;
  document.getElementById("gdskl3").innerHTML=gdsk3;
  document.getElementById("gdskl4").innerHTML=gdsk4;
  document.getElementById("gdskl5").innerHTML=gdsk5;
  document.getElementById("gdskl6").innerHTML=gdsk6;
  document.getElementById("gdskl7").innerHTML=gdsk7;
  document.getElementById("energyspace").style="position:absolute; height:"+2*energy+"px; width: 70px; bottom: 0px; background: green";
  document.getElementById("energynum").innerHTML=energy;
  if (gdsk1!=lastgdsk1 || gdsk2!=lastgdsk2 || gdsk3!=lastgdsk3 || gdsk4!=lastgdsk4 || gdsk5!=lastgdsk5 || gdsk6!=lastgdsk6 || gdsk7!=lastgdsk7){
    for (num=1; num<=21; num++){
      eval("document.getElementById('gdchance"+num+"').innerHTML=1");
      for (i=1; i<=7; i++){
        eval("document.getElementById('gdchance"+num+"').innerHTML*=(gdsk"+i+"/(5*gdlvldata[num-1][i-1]+1)>1)?1:gdsk"+i+"/(5*gdlvldata[num-1][i-1]+1)");
      }
      eval("document.getElementById('gdchance"+num+"').innerHTML=Math.round(document.getElementById('gdchance"+num+"').innerHTML*10000)/100+'%'");
    }
  }
  lastpoints=points;
  lastmetapoints=metapoints;
  lastmetametapoints=metametapoints;
  lastinfinitypoints=infinitypoints;
  lastlucky=luckypoints;
  lastscreennum=screennum;
  lastisInf=isInf;
  lastu1=u1;
  lastu2=u2;
  lastu3=u3;
  lastu4=u4;
  lastu5=u5;
  lastu6=u6;
  lastu7=u7;
  lastgdsk1=gdsk1;
  lastgdsk2=gdsk2;
  lastgdsk3=gdsk3;
  lastgdsk4=gdsk4;
  lastgdsk5=gdsk5;
  lastgdsk6=gdsk6;
  lastgdsk7=gdsk7;
  lastbreakinf=breakinf;
  for (x of document.querySelectorAll(":not(#loading")){
    x.style.visibility="visible";
  }
}
function addpoint(){
  if (!points.gte(bigInf) || breakinf){
    points=new bigNum(points.add(new bigNum(1,0).add(metapoints.div(new bigNum(2,0)))).round().m,points.add(new bigNum(1,0).add(metapoints.div(new bigNum(2,0)))).round().e+Math.round(Math.log10(infinitypoints+1))*u6+eternitypoints);
  }
}
function getmeta(){
  if (points.gte(ten) && (!metapoints.gte(bigInf) || breakinf)){
    metapoints=new bigNum(metapoints.add(points.div(ten).mult(metametapoints.div(new bigNum(2,0)).add(new bigNum(1,0)))).round().m,metapoints.add(points.div(ten).mult(metametapoints.div(new bigNum(2,0)).add(new bigNum(1,0)))).round().e+Math.round(Math.log10(infinitypoints+1)*u6)+eternitypoints);
    points=zero;
  }
}
function autometa(){
  if (document.getElementById("metaclicker").value && document.getElementById("metaclickerenabled").checked){
    if (new bigNum(metapoints.add(points.div(ten).mult(metametapoints.div(new bigNum(2,0)).add(ten))).round().m,metapoints.add(points.div(ten).mult(metametapoints.div(new bigNum(2,0)).add(ten))).round().e+Math.round(Math.log10(infinitypoints+1)*u6)+eternitypoints).gte(parse(eval(document.getElementById("metaclicker").value).toString()).add(metapoints))){
      getmeta();
    }
  }
}
function getmetameta(){
  if (metapoints.gte(ten) && (!metametapoints.gte(bigInf) || breakinf)){
    metametapoints=new bigNum(metametapoints.add(metapoints.div(ten)).round().m,metametapoints.add(metapoints.div(ten)).round().e+Math.round(Math.log10(infinitypoints+1))*u6+eternitypoints);
    points=zero;
    metapoints=zero;
  }
}
function autometameta(){
  if (document.getElementById("metaaclicker").value && document.getElementById("metaaclickerenabled").checked){
    if (new bigNum(metametapoints.add(metapoints.div(ten)).round().m,metametapoints.add(metapoints.div(ten)).round().e+Math.round(Math.log10(infinitypoints+1))*u6+eternitypoints).gte(parse(eval(document.getElementById("metaaclicker").value).toString()).add(metametapoints))){
      getmetameta();
    }
  }
}
function reset(){
  localStorage.clear();
  location.reload();
}
function resetcolour(){
  localStorage.setItem("bgcolor","#ffffff");
  localStorage.setItem("textcolor","#000000");
  localStorage.setItem("bbgcolor","#f0f0f0");
  localStorage.setItem("bhbgcolor","#d0d0d0");
  localStorage.setItem("achlbgcolor","#f0f0f0");
  localStorage.setItem("achubgcolor","#000000");
  localStorage.setItem("achutextcolor","#ffffff");
  localStorage.setItem("bbcolor","#808080");
  localStorage.setItem("tbcolor","#000000");
  location.reload();
}
function save(){
  localStorage.setItem("points",points.toString());
  localStorage.setItem("metapoints",metapoints.toString());
  localStorage.setItem("metametapoints",metametapoints.toString());
  localStorage.setItem("infinitypoints",infinitypoints.toString());
  localStorage.setItem("breakinf",breakinf.toString());
  localStorage.setItem("u1",u1.toString());
  localStorage.setItem("u2",u2.toString());
  localStorage.setItem("u3",u3.toString());
  localStorage.setItem("u4",u4.toString());
  localStorage.setItem("u5",u5.toString());
  localStorage.setItem("u6",u6.toString());
  localStorage.setItem("u7",u7.toString());
  localStorage.setItem("ach1",ach1.toString());
  localStorage.setItem("ach2",ach2.toString());
  localStorage.setItem("ach3",ach3.toString());
  localStorage.setItem("ach4",ach4.toString());
  localStorage.setItem("ach5",ach5.toString());
  localStorage.setItem("ach6",ach6.toString());
  localStorage.setItem("ach7",ach7.toString());
  localStorage.setItem("ach8",ach8.toString());
  localStorage.setItem("ach9",ach9.toString());
  localStorage.setItem("ach10",ach10.toString());
  localStorage.setItem("ach11",ach11.toString());
  localStorage.setItem("ach12",ach12.toString());
  localStorage.setItem("ach13",ach13.toString());
  localStorage.setItem("ach14",ach14.toString());
  localStorage.setItem("eternitypoints",eternitypoints.toString());
  localStorage.setItem("luckypoints",luckypoints.toString());
  localStorage.setItem("crafts",crafts.toString());
  localStorage.setItem("goldenapple",goldenapple.toString());
  localStorage.setItem("mines",mines.toString());
  localStorage.setItem("metamultiplier",metamultiplier.toString());
  for (i=1; i<=20; i++){
    eval("localStorage.setItem('mc"+i+"',mc"+i+".toString())")
  }
  for (i=1; i<=12; i++){
    eval("localStorage.setItem('px"+i+"',px"+i+".toString())")
  }
  localStorage.setItem("bgcolor",document.getElementById("bgcolor").value);
  localStorage.setItem("textcolor",document.getElementById("textcolor").value);
  localStorage.setItem("bbgcolor",document.getElementById("bbgcolor").value);
  localStorage.setItem("bhbgcolor",document.getElementById("bhbgcolor").value);
  localStorage.setItem("achlbgcolor",document.getElementById("achlbgcolor").value);
  localStorage.setItem("achubgcolor",document.getElementById("achubgcolor").value);
  localStorage.setItem("achutextcolor",document.getElementById("achutextcolor").value);
  localStorage.setItem("bbcolor",document.getElementById("bbcolor").value);
  localStorage.setItem("tbcolor",document.getElementById("tbcolor").value);
  for (i=1; i<=7; i++){
    eval("localStorage.setItem('gdsk"+i+"',gdsk"+i+".toString())")
  }
  for (i=1; i<=21; i++){
    eval("localStorage.setItem('gdlvl"+i+"',gdlvl"+i+".toString())")
  }
  localStorage.setItem("energy",energy.toString());
}
function getIP(){
  if (isInf){
    infinitypoints+=IPcalc();
    points=zero;
    metapoints=zero;
    metametapoints=zero;
  }
}
function autoIP(){
  if (document.getElementById("infclicker").value && document.getElementById("infclickerenabled").checked){
    if (IPcalc()>=eval(document.getElementById("infclicker").value)){
      getIP();
    }
  }
}
function IPcalc(){
  if (isInf && !breakinf){
    return 2**u5;
  } else if (isInf){
    return Math.round((2**u5)*metametapoints.e/308)**(u7+1);
  } else {
    return 0;
  }
}
function getlucky(){
  if (document.getElementById("lucky").src=="https://"+location.hostname+"/clover.png"){luckypoints+=1}
  if (document.getElementById("lucky").src=="https://"+location.hostname+"/golden.png"){luckypoints+=10}
  if (document.getElementById("lucky").src=="https://"+location.hostname+"/wrath.png" && luckypoints>=2){luckypoints-=2}
}
function stround(num){
  if (num>=1000000){
    return num.toExponential(2).replace("+","");
  } else {
    return num;
  }
}
function ticker(){
  var tickerlist=["you are a point", "click click click clickkkkkkkkkkkkkkkkk", "i cant speel -me", "i like coding -me", "i actually can't beat my own game -me", "Sponsored by <a href='https://ivark.github.io'>Antimatter Dimensions!</a>", "you know you can enter javascript in the autoclicker text boxes right?", "i need more quotes - me"];
  if (metametapoints>=10 && infinitypoints==0 && eternitypoints==0){
    tickerlist.push("wat about metametametapoints")
  }
  if (infinitypoints>=10 && eternitypoints==0){
    tickerlist.push("metainfinitypoints? please?")
  }
  if (luckypoints>=1 && luckypoints<10){
    tickerlist.push("WOW OMG U SO LUCKY U HAVE ONE LUCKY POINT!!!!!")
  }
  if (luckypoints>=10){
    tickerlist.push("how u get "+luckypoints+" lucky points?")
  }
  if (mc20>=1 && gdlvl1==1 && gdlvl2==1 && gdlvl3==1 && gdlvl4==1 && gdlvl5==1 && gdlvl6==1 && gdlvl7==1 && gdlvl8==1 && gdlvl9==1 && gdlvl10==1 && gdlvl11==1 && gdlvl12==1 && gdlvl13==1 && gdlvl14==1 && gdlvl15==1 && gdlvl16==1 && gdlvl17==1 && gdlvl18==1 && gdlvl19==1 && gdlvl20==1 && gdlvl21==1){
    tickerlist=["ok gg u beat the game now beat <a href='pcng-'>NG-</a>"]
  }
  return tickerlist[Math.floor(Math.random()*tickerlist.length)]
}
function make(num){
  for (i=0; i<Number(document.getElementById("craftnum").value); i++){
    makenomult(num);
  }
}
function makenomult(string){
  if (crafts>=1){
    switch (string){
      case "stick":
        if (mc1>=1){
          mc1-=1;
          mc2+=2;
          crafts-=1;
        }
        break;
      case "iron block":
        if (mc5>=9){
          mc5-=9;
          mc6+=1;
          crafts-=1;
        }
        break;
      case "golden apple":
        if (mc3>=1 && mc7>=9){
          mc3-=1;
          mc7-=9
          mc9+=1;
          crafts-=1;
        }
        break;
      case "diamond block":
        if (mc8>=9){
          mc8-=9;
          mc10+=1;
          crafts-=1;
        }
        break;
      case "netherite":
        if (mc7>=4 && mc12>=4){
          mc7-=4;
          mc12-=4;
          mc13+=2;
          crafts-=1;
        }
        break;
      case "netherite block":
        if (mc13>=9){
          mc13-=9;
          mc14+=1;
          crafts-=1;
        }
        break;
      case "eye of ender":
        if (mc15>=1 && mc16>=1){
          mc15-=1;
          mc16-=1;
          mc17+=1;
          crafts-=1;
        }
        break;
      case "enderite":
        if (mc10>=3 && mc12>=3 && mc18>=3){
          mc10-=3;
          mc12-=3;
          mc18-=3;
          mc19+=1;
          crafts-=1;
        }
        break;
    }
  }
}
function mine(num){
  if (mines>=1){
    mines-=1;
    for (i=0; i<Number(eval("px"+num))*(1+goldenapple)*(1+metamultiplier); i++){
      var randomnum=Math.floor(Math.random()*100)
      switch (num){
        case 1:
          if (randomnum<=50){
            mc1+=1;
          } else if (randomnum<=55){
            mc3+=1;
          }
          break;
        case 2:
          if (randomnum<=20){
            mc4+=1;
          } else if (randomnum<=30){
            mc1+=1;
          }
          break;
        case 3:
          if (randomnum<=10){
            mc5+=1;
          } else if (randomnum<=20){
            mc4+=1;
          } else if (randomnum<=25){
            mc1+=1
          }
          break;
        case 4:
          if (randomnum<=5){
            mc7+=1;
          } else if (randomnum<=7){
            mc8+=1;
          } else if (randomnum<=17){
            mc5+=1;
          } else if (randomnum<=22){
            mc1+=1;
          }
          break;
        case 5:
          if (randomnum<=30){
            mc7+=1;
          } else if (randomnum<=50){
            mc8+=1;
          } else if (randomnum<=90){
            mc5+=1;
          }
          break;
        case 6:
          if (randomnum<=10){
            mc8+=1;
          } else if (randomnum<=12){
            mc11+=1;
          } else if (randomnum<=32){
            mc5+=1;
          } else if (randomnum<=52){
            mc7+=1;
          }
          break;
        case 7:
          if (randomnum<=50){
            mc8+=1;
          } else if (randomnum<=80){
            mc11+=1;
          }
          break;
        case 8:
          if (randomnum<=10){
            mc11+=1;
          } else if (randomnum<=20){
            mc8+=1;
          } else if (randomnum<=25){
            mc12+=1;
          }
          break;
        case 9:
          if (randomnum<=20){
            mc12+=1;
          } else if (randomnum<=22){
            mc15+=1;
          } else if (randomnum<=24){
            mc16+=1;
          }
          break;
        case 10:
          if (randomnum<=50){
            mc15+=1;
          } else if (randomnum<=100){
            mc16+=1;
          }
          break;
        case 11:
          if (randomnum<=2){
            mc18+=1;
          } else if (randomnum<=22){
            mc16+=1;
          }
          break;
        case 12:
          if (randomnum<=1){
            mc20+=1;
          }
          break;
      }
    }
  }
}
function pmake(num){
  for (i=0; i<Number(document.getElementById("craftnum").value); i++){
    pmakenomult(num);
  }
}
function pmakenomult(num){
  if (crafts>=1){
    switch (num){
      case 2:
        if (mc1>=3 && mc2>=2){
          mc1-=3;
          mc2-=2;
          px2+=1;
          crafts-=1;
        }
        break;
      case 3:
        if (mc4>=3 && mc2>=2){
          mc4-=3;
          mc2-=2;
          px3+=1;
          crafts-=1;
        }
        break;
      case 4:
        if (mc5>=3 && mc2>=2){
          mc5-=3;
          mc2-=2;
          px4+=1;
          crafts-=1;
        }
        break;
      case 5:
        if (mc6>=3 && mc1>=2){
          mc6-=3;
          mc1-=2;
          px5+=1;
          crafts-=1;
        }
        break;
      case 6:
        if (mc8>=3 && mc2>=2){
          mc8-=3;
          mc2-=2;
          px6+=1;
          crafts-=1;
        }
        break;
      case 7:
        if (mc10>=3 && mc1>=2){
          mc10-=3;
          mc1-=2;
          px7+=1;
          crafts-=1;
        }
        break;
      case 8:
        if (mc11>=10){
          mc11-=10;
          px8+=1;
          crafts-=1;
        }
        break;
      case 9:
        if (mc13>=3 && mc2>=2){
          mc13-=3;
          mc2-=2;
          px9+=1;
          crafts-=1;
        }
        break;
      case 10:
        if (mc14>=3 && mc1>=2){
          mc14-=3;
          mc1-=2;
          px10+=1;
          crafts-=1;
        }
        break;
      case 11:
        if (mc17>=3 && mc2>=2){
          mc17-=3;
          mc2-=2;
          px11+=1;
          crafts-=1;
        }
        break;
      case 12:
        if (mc19>=3 && mc2>=2){
          mc19-=3;
          mc2-=2;
          px12+=1;
          crafts-=1;
        }
        break;
    }
  }
}
function train(num){
  level=eval("gdsk"+num);
  if (energy>=10 && level<10){
    energy-=10;
    if (Math.random()<=level/15){
      eval("gdsk"+num+"+=0.5");
      eval("if(gdsk"+num+">10){gdsk"+num+"=10}");
    }
  }
}
function play(num){
  if (energy>=5 && eval("gdlvl"+num)==0){
    energy-=5;
    var chance=1;
    for (i=1; i<=7; i++){
      trychance=eval("gdsk"+i)/(5*gdlvldata[num-1][i-1]+1)
      if (trychance<1){
        chance*=trychance;
      }
    }
    if (Math.random()<=chance){
      eval("gdlvl"+num+"=1");
      for (i=1; i<=7; i++){
        eval("gdsk"+i+"+=gdlvldata[num-1][i-1]/10");
        eval("if(gdsk"+i+">10){gdsk"+i+"=10}");
      }
    }
  }
}
function minecraftify(){
  if (u1l){
    clearInterval(u1l);
  } 
  if (u2l){
    clearInterval(u2l);
  }
  if (u3l){
    clearInterval(u3l);
  }
  if (u4l){
    clearInterval(u4l);
  }
  points=zero;
  metapoints=zero;
  metametapoints=zero;
  infinitypoints=0;
  breakinf=0;
  u1=0;
  u2=0;
  u3=0;
  u4=0;
  u5=0;
  u6=0;
  u7=0;
  crafts+=5;
  mines+=20;
  luckypoints=crafts;
  eternitypoints=10**crafts;
  px1+=1;
}
function metaminecraftify(){
  if (u1l){
    clearInterval(u1l);
  }
  if (u2l){
    clearInterval(u2l);
  }
  if (u3l){
    clearInterval(u3l);
  }
  if (u4l){
    clearInterval(u4l);
  }
  points=zero;
  metapoints=zero;
  metametapoints=zero;
  infinitypoints=0;
  breakinf=0;
  u1=0;
  u2=0;
  u3=0;
  u4=0;
  u5=0;
  u6=0;
  u7=0;
  crafts=0;
  mines=0;
  luckypoints=0;
  eternitypoints=0;
  metamultiplier+=Math.round(Math.log(mc20+1)/Math.log(1.5)-metamultiplier);
  for (i=1; i<=20; i++){
    eval("mc"+i+"=0");
  }
  for (i=1; i<=12; i++){
    eval("px"+i+"=0")
  }
}
function geometrydashify(){
  if (u1l){
    clearInterval(u1l);
  } 
  if (u2l){
    clearInterval(u2l);
  }
  if (u3l){
    clearInterval(u3l);
  }
  if (u4l){
    clearInterval(u4l);
  }
  points=zero;
  metapoints=zero;
  metametapoints=zero;
  infinitypoints=0;
  breakinf=0;
  u1=0;
  u2=0;
  u3=0;
  u4=0;
  u5=0;
  u6=0;
  u7=0;
  energy=100;
  eternitypoints=10000**(gdsk1+gdsk2+gdsk3+gdsk4+gdsk5+gdsk6+gdsk7);
  luckypoints=4*(gdsk1+gdsk2+gdsk3+gdsk4+gdsk5+gdsk6+gdsk7-6);
}
document.getElementById('lucky').style.display="none";
document.getElementById("ticker").innerHTML=ticker();
setInterval(save,1000);
checkloop=setInterval(check,20);
if (u1){
  u1l=setInterval(addpoint,100);
}
if (u2){
  u2l=setInterval(autometa,100);
}
if (u3){
  u3l=setInterval(autometameta,100);
}
if (u4){
  u4l=setInterval(autoIP,100);
}
check();
document.getElementById("loading").style.display="none";
for (num=1; num<=21; num++){
  eval("document.getElementById('gdchance"+num+"').innerHTML=1");
  for (i=1; i<=7; i++){
    eval("document.getElementById('gdchance"+num+"').innerHTML*=(gdsk"+i+"/(5*gdlvldata[num-1][i-1]+1)>1)?1:gdsk"+i+"/(5*gdlvldata[num-1][i-1]+1)");
  }
  eval("document.getElementById('gdchance"+num+"').innerHTML=Math.round(document.getElementById('gdchance"+num+"').innerHTML*10000)/100+'%'");
}
function importt(){
  var savestr=prompt("Input your save:");
  if (savestr!=null){
    savestr=savestr.replace(/b/g,"\.").replace(/d/g,"\|").replace(/e/g,"0").replace(/f/g,"1").replace(/g/g,"2").replace(/h/g,"3").replace(/i/g,"4").replace(/j/g,"5").replace(/k/g,"6").replace(/l/g,"7").replace(/m/g,"8").replace(/n/g,"9").replace(/c/g,"e").replace(/a/g,"Infinity");
    if (savestr.split("|").length==93){
      reset();
      var savelist=savestr.split("|");
      points=parse(savelist[0]);
      metapoints=parse(savelist[1]);
      metametapoints=parse(savelist[2]);
      infinitypoints=Number(savelist[3]);
      u1=Number(savelist[4]);
      u2=Number(savelist[5]);
      u3=Number(savelist[6]);
      u4=Number(savelist[7]);
      u5=Number(savelist[8]);
      u6=Number(savelist[9]);
      u7=Number(savelist[10]);
      breakinf=Number(savelist[11]);
      ach1=Number(savelist[12]);
      ach2=Number(savelist[13]);
      ach3=Number(savelist[14]);
      ach4=Number(savelist[15]);
      ach5=Number(savelist[16]);
      ach6=Number(savelist[17]);
      eternitypoints=Number(savelist[18]);
      luckypoints=Number(savelist[19]);
      mc1=Number(savelist[20]);
      mc2=Number(savelist[21]);
      mc3=Number(savelist[22]);
      mc4=Number(savelist[23]);
      mc5=Number(savelist[24]);
      mc6=Number(savelist[25]);
      mc7=Number(savelist[26]);
      mc8=Number(savelist[27]);
      mc9=Number(savelist[28]);
      mc10=Number(savelist[29]);
      mc11=Number(savelist[30]);
      mc12=Number(savelist[31]);
      mc13=Number(savelist[32]);
      mc14=Number(savelist[33]);
      mc15=Number(savelist[34]);
      mc16=Number(savelist[35]);
      mc17=Number(savelist[36]);
      mc18=Number(savelist[37]);
      mc19=Number(savelist[38]);
      mc20=Number(savelist[39])
      px1=Number(savelist[40]);
      px2=Number(savelist[41]);
      px3=Number(savelist[42]);
      px4=Number(savelist[43]);
      px5=Number(savelist[44]);
      px6=Number(savelist[45]);
      px7=Number(savelist[46]);
      px8=Number(savelist[47]);
      px9=Number(savelist[48]);
      px10=Number(savelist[49]);
      px11=Number(savelist[50]);
      px12=Number(savelist[51]);
      crafts=Number(savelist[52]);
      goldenapple=Number(savelist[53]);
      mines=Number(savelist[54]);
      ach7=Number(savelist[55]);
      ach8=Number(savelist[56]);
      ach9=Number(savelist[57]);
      ach10=Number(savelist[58]);
      ach11=Number(savelist[59]);
      metamultiplier=Number(savelist[60]);
      gdlvl1=Number(savelist[61]);
      gdlvl2=Number(savelist[62]);
      gdlvl3=Number(savelist[63]);
      gdlvl4=Number(savelist[64]);
      gdlvl5=Number(savelist[65]);
      gdlvl6=Number(savelist[66]);
      gdlvl7=Number(savelist[67]);
      gdlvl8=Number(savelist[68]);
      gdlvl9=Number(savelist[69]);
      gdlvl10=Number(savelist[70]);
      gdlvl11=Number(savelist[71]);
      gdlvl12=Number(savelist[72]);
      gdlvl13=Number(savelist[73]);
      gdlvl14=Number(savelist[74]);
      gdlvl15=Number(savelist[75]);
      gdlvl16=Number(savelist[76]);
      gdlvl17=Number(savelist[77]);
      gdlvl18=Number(savelist[78]);
      gdlvl19=Number(savelist[79]);
      gdlvl20=Number(savelist[80]);
      gdlvl21=Number(savelist[81]);
      gdsk1=Number(savelist[82]);
      gdsk2=Number(savelist[83]);
      gdsk3=Number(savelist[84]);
      gdsk4=Number(savelist[85]);
      gdsk5=Number(savelist[86]);
      gdsk6=Number(savelist[87]);
      gdsk7=Number(savelist[88]);
      energy=Number(savelist[89]);
      ach12=Number(savelist[90]);
      ach13=Number(savelist[91]);
      ach14=Number(savelist[92]);
      if (u1){
        u1l=setInterval(addpoint,100);
      }
      if (u2){
        u2l=setInterval(autometa,100);
      }
      if (u3){
        u3l=setInterval(autometameta,100);
      }
      if (u4){
        u4l=setInterval(autoIP,100);
      }
    }
  }
}
function exportt(){
  prompt("Here is your save:",(points+"|"+metapoints+"|"+metametapoints+"|"+infinitypoints+"|"+u1+"|"+u2+"|"+u3+"|"+u4+"|"+u5+"|"+u6+"|"+u7+"|"+breakinf+"|"+ach1+"|"+ach2+"|"+ach3+"|"+ach4+"|"+ach5+"|"+ach6+"|"+eternitypoints+"|"+luckypoints+"|"+mc1+"|"+mc2+"|"+mc3+"|"+mc4+"|"+mc5+"|"+mc6+"|"+mc7+"|"+mc8+"|"+mc9+"|"+mc10+"|"+mc11+"|"+mc12+"|"+mc13+"|"+mc14+"|"+mc15+"|"+mc16+"|"+mc17+"|"+mc18+"|"+mc19+"|"+mc20+"|"+px1+"|"+px2+"|"+px3+"|"+px4+"|"+px5+"|"+px6+"|"+px7+"|"+px8+"|"+px9+"|"+px10+"|"+px11+"|"+px12+"|"+crafts+"|"+goldenapple+"|"+mines+"|"+ach7+"|"+ach8+"|"+ach9+"|"+ach10+"|"+ach11+"|"+metamultiplier+"|"+gdlvl1+"|"+gdlvl2+"|"+gdlvl3+"|"+gdlvl4+"|"+gdlvl5+"|"+gdlvl6+"|"+gdlvl7+"|"+gdlvl8+"|"+gdlvl9+"|"+gdlvl10+"|"+gdlvl11+"|"+gdlvl12+"|"+gdlvl13+"|"+gdlvl14+"|"+gdlvl15+"|"+gdlvl16+"|"+gdlvl17+"|"+gdlvl18+"|"+gdlvl19+"|"+gdlvl20+"|"+gdlvl21+"|"+gdsk1+"|"+gdsk2+"|"+gdsk3+"|"+gdsk4+"|"+gdsk5+"|"+gdsk6+"|"+gdsk7+"|"+energy+"|"+ach12+"|"+ach13+"|"+ach14).replace(/Infinity/g,"a").replace(/\./g,"b").replace(/e/g,"c").replace(/\|/g,"d").replace(/0/g,"e").replace(/1/g,"f").replace(/2/g,"g").replace(/3/g,"h").replace(/4/g,"i").replace(/5/g,"j").replace(/6/g,"k").replace(/7/g,"l").replace(/8/g,"m").replace(/9/g,"n"));
}
function keydown(event){
  keypressed=event.key;
  function detect(event){
    if (keypressed=="7"){
      addpoint()
    }
    if (keypressed=="8"){
      getmeta()
    }
    if (keypressed=="9"){
      getmetameta()
    }
    if (keypressed=="i"){
      getIP()
    }
    if (keypressed=="e" && infinitypoints==Infinity){
      if (u1l){
        clearInterval(u1l);
      }
      if (u2l){
        clearInterval(u2l);
      }
      if (u3l){
        clearInterval(u3l);
      }
      if (u4l){
        clearInterval(u4l);
      }
      eternitypoints+=Math.pow(10,luckypoints);
      infinitypoints=0;
      metametapoints=zero;
      metapoints=zero;
      points=zero;
      u1=0;
      u2=0;
      u3=0;
      u4=0;
      u5=0;
      u6=0;
      u7=0;
      breakinf=0;
    }
    if (keypressed=="c" && document.getElementById("lucky").style.display=="inline"){
      document.getElementById("lucky").click();
    }
    if (keypressed=="m" && eternitypoints==Infinity){
      minecraftify();
    }
    if (keypressed=="n" && mc20>=1){
      metaminecraftify();
    }
    if (keypressed=="g" && eternitypoints==Infinity){
      geometrydashify();
    }
    if (keypressed=="1"){
      screennum=0;
    }
    if (keypressed=="2"){
      screennum=1;
    }
    if (keypressed=="3"){
      screennum=2;
    }
    if (keypressed=="4"){
      screennum=3;
    }
    if (keypressed=="5"){
      screennum=4;
    }
    if (keypressed=="6"){
      screennum=5;
    }
    if (keypressed=="0"){
      screennum=6;
    }
    if (keypressed=="ArrowRight"){
      exportt()
    }
    if (keypressed=="ArrowLeft"){
      importt()
    }
    if (keypressed=="!" && !u1){
      if (infinitypoints>=1){
        u1=1;
        infinitypoints-=1;
        u1l=setInterval(addpoint,100);
      }
    }
    if (keypressed=="@" && !u2){
      if (infinitypoints>=5){
        u2=1;
        infinitypoints-=5;
        u2l=setInterval(autometa,100);
      }
    }
    if (keypressed=="#" && !u3){
      if (infinitypoints>=10){
        u3=1;
        infinitypoints-=10;
        u3l=setInterval(autometameta,100);
      }
    }
    if (keypressed=="$" && !u4){
      if (infinitypoints>=25){
        u4=1;
        infinitypoints-=25;
        u4l=setInterval(autoIP,100);
      }
    }
    if (keypressed=="%" && !u6){
      if (infinitypoints>=15){
        u6=1;
        infinitypoints-=15;
      }
    }
    if (keypressed=="^" && !u7){
      if (infinitypoints>=1e10){
        u7=1;
        infinitypoints-=1e10;
      }
    }
    if (keypressed=="&"){
      IPmult();
    }
    if (keypressed=="*" && !breakinf){
      if (infinitypoints>=100){
        breakinf=1;
        infinitypoints-=100;
      }
    }
    if (keypressed=="R"){
      reset()
    }
  }
  if (screennum==4 || screennum==5){
    if (event.ctrlKey && event.altKey){
      detect();
    }
  } else {
    detect();
  }
}