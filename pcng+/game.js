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
if (localStorage.getItem("points+")){
  points=parse(localStorage.getItem("points+"));
}
if (localStorage.getItem("metapoints+")){
  metapoints=parse(localStorage.getItem("metapoints+"));
}
if (localStorage.getItem("metametapoints+")){
  metametapoints=parse(localStorage.getItem("metametapoints+"));
}
if (localStorage.getItem("infinitypoints+")){
  infinitypoints=Number(localStorage.getItem("infinitypoints+"));
}
if (localStorage.getItem("breakinf+")){
  breakinf=Number(localStorage.getItem("breakinf+"));
}
if (localStorage.getItem("u1+")){
  u1=Number(localStorage.getItem("u1+"));
}
if (localStorage.getItem("u2+")){
  u2=Number(localStorage.getItem("u2+"));
}
if (localStorage.getItem("u3+")){
  u3=Number(localStorage.getItem("u3+"));
}
if (localStorage.getItem("u4+")){
  u4=Number(localStorage.getItem("u4+"));
}
if (localStorage.getItem("u5+")){
  u5=Number(localStorage.getItem("u5+"));
}
if (localStorage.getItem("u6+")){
  u6=Number(localStorage.getItem("u6+"));
}
if (localStorage.getItem("u7+")){
  u7=Number(localStorage.getItem("u7+"));
}
if (localStorage.getItem("ach1+")){
  ach1=Number(localStorage.getItem("ach1+"));
}
if (localStorage.getItem("ach2+")){
  ach2=Number(localStorage.getItem("ach2+"));
}
if (localStorage.getItem("ach3+")){
  ach3=Number(localStorage.getItem("ach3+"));
}
if (localStorage.getItem("ach4+")){
  ach4=Number(localStorage.getItem("ach4+"));
}
if (localStorage.getItem("ach5+")){
  ach5=Number(localStorage.getItem("ach5+"));
}
if (localStorage.getItem("ach6+")){
  ach6=Number(localStorage.getItem("ach6+"));
}
if (localStorage.getItem("eternitypoints+")){
  eternitypoints=Number(localStorage.getItem("eternitypoints+"));
}
if (localStorage.getItem("luckypoints+")){
  luckypoints=Number(localStorage.getItem("luckypoints+"));
}
function IPmult(){
  if (infinitypoints>=3**u5 && u5<647){
    infinitypoints-=3**u5;
    u5+=1;
    IPmult()
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
  if ((!points.gte(new bigNum(1,0)) && lastpoints.gte(new bigNum(1,0)))||(!points.gte(new bigNum(1,0)) && screennum==0 && lastscreennum!=0)){
    document.getElementById("getmeta").innerHTML="<button onclick='getmeta()'>Get 1 point to reset</button><br>";
  } else if ((points.gte(new bigNum(1,0)) && !lastpoints.gte(new bigNum(1,0)))||(points.gte(new bigNum(1,0)) && screennum==0 && lastscreennum!=0)){
    document.getElementById("getmeta").innerHTML="<button onclick='getmeta()'>Reset for metapoints</button><br>";
  }
  if (screennum!=0){
    document.getElementById("getmeta").innerHTML="";
  }
  if ((!metapoints.gte(new bigNum(1,0)) && lastmetapoints.gte(new bigNum(1,0)))||(metapoints.lte(new bigNum(1,0)) && screennum==0 && lastscreennum!=0)){
    document.getElementById("getmetameta").innerHTML="<button onclick='getmetameta()'>Get 1 metapoint to reset</button><br>";
  } else if ((metapoints.gte(new bigNum(1,0)) && !lastmetapoints.gte(new bigNum(1,0)))||(metapoints.gte(new bigNum(1,0)) && screennum==0 && lastscreennum!=0)){
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
  if (screennum==1){
    document.getElementById("IP").innerHTML="Infinity Points: "+stround(infinitypoints)+"<br>";
    document.getElementById("EP").innerHTML="Eternity Points: "+stround(eternitypoints)+"<br>";
    document.getElementById("LP").innerHTML="Lucky Points: "+stround(luckypoints)+"<br>";
    if ((lastscreennum!=1 || lastu1) && !u1){
      document.getElementById("u1").innerHTML="<button onclick='if (infinitypoints>=1){u1=1;infinitypoints-=1;u1l=setInterval(addpoint,100);}'>Get point autoclicker, 1 IP</button><br>";
    } else if ((lastscreennum!=1 || !lastu1) && u1){
      document.getElementById("u1").innerHTML="<button>Already bought</button><br>";
    }
    if ((lastscreennum!=1 || lastu2) && !u2){
      document.getElementById("u2").innerHTML="<button onclick='if (infinitypoints>=1){u2=1;infinitypoints-=1;u2l=setInterval(autometa,100);}'>Get metapoint autoclicker, 1 IP</button><br>";
    } else if ((lastscreennum!=1 || !lastu2) && u2){
      document.getElementById("u2").innerHTML="<button>Already bought</button><br>";
    }
    if ((lastscreennum!=1 || lastu3) && !u3){
      document.getElementById("u3").innerHTML="<button onclick='if (infinitypoints>=1){u3=1;infinitypoints-=1;u3l=setInterval(autometameta,100);}'>Get metametapoint autoclicker, 1 IP</button><br>";
    } else if ((lastscreennum!=1 || !lastu3) && u3){
      document.getElementById("u3").innerHTML="<button>Already bought</button><br>";
    }
    if ((lastscreennum!=1 || lastu4) && !u4){
      document.getElementById("u4").innerHTML="<button onclick='if (infinitypoints>=1){u4=1;infinitypoints-=1;u4l=setInterval(autoIP,100);}'>Get Infinity autoclicker, 1 IP</button><br>";
    } else if ((lastscreennum!=1 || !lastu4) && u4){
      document.getElementById("u4").innerHTML="<button>Already bought</button><br>";
    }
    if (lastscreennum!=1 || lastu5!=u5){
      document.getElementById("u5").innerHTML="<button onclick='IPmult()'>Get x2 IP mult, "+stround(3**u5)+" IP</button><br>";
    }
    if ((lastscreennum!=1 || lastu6) && !u6){
      document.getElementById("u6").innerHTML="<button onclick='if (infinitypoints>=1){u6=1;infinitypoints-=1;}'>IP boost all point gain, 1 IP</button><br>";
    } else if ((lastscreennum!=1 || !lastu6) && u6){
      document.getElementById("u6").innerHTML="<button>Already bought</button><br>";
    }
    if ((lastscreennum!=1 || lastu7) && !u7){
      document.getElementById("u7").innerHTML="<button onclick='if (infinitypoints>=1){u7=1;infinitypoints-=1;}'>IP gain squared, 1 IP</button><br>";
    } else if ((lastscreennum!=1 || !lastu7) && u7){
      document.getElementById("u7").innerHTML="<button>Already bought</button><br>";
    }
    if ((lastscreennum!=1 || lastbreakinf) && !breakinf){
      document.getElementById("breakinf").innerHTML="<button onclick='if (infinitypoints>=1){breakinf=1;infinitypoints-=1;}'>Break Infinity, 1 IP</button><br>";
    } else if ((lastscreennum!=1 || !lastbreakinf) && breakinf){
      document.getElementById("breakinf").innerHTML="<button>Infinity broken</button><br>";
    }
    if (lastscreennum!=1 || infinitypoints!=lastinfinitypoints || luckypoints!=lastlucky){
      if (infinitypoints==Infinity){
        document.getElementById("eternity").innerHTML="<button onclick='if (u1l){clearInterval(u1l);};if (u2l){clearInterval(u2l);};if (u3l){clearInterval(u3l);};if (u4l){clearInterval(u4l);};eternitypoints+=Math.pow(10,luckypoints);infinitypoints=0;metametapoints=zero;metapoints=zero;points=zero;u1=0;u2=0;u3=0;u4=0;u5=0;u6=0;u7=0;breakinf=0;'>Eternity for "+stround(Math.pow(10,luckypoints))+" Eternity Point</button>";
      } else {
        document.getElementById("eternity").innerHTML="<button>Get Infinity IP to Eternity</button>";
      }
    }
  } else if (screennum!=1 && lastscreennum!=screennum){
    document.getElementById("IP").innerHTML="";
    document.getElementById("EP").innerHTML="";
    document.getElementById("LP").innerHTML="";
    document.getElementById("u1").innerHTML="";
    document.getElementById("u2").innerHTML="";
    document.getElementById("u3").innerHTML="";
    document.getElementById("u4").innerHTML="";
    document.getElementById("u5").innerHTML="";
    document.getElementById("u6").innerHTML="";
    document.getElementById("u7").innerHTML="";
    document.getElementById("breakinf").innerHTML="";
    document.getElementById("eternity").innerHTML="";
  }
  if (screennum==2 && lastscreennum!=2){
    document.getElementById("import").innerHTML="<button onclick='importt()'>Import</button><br>";
    document.getElementById("export").innerHTML="<button onclick='exportt()'>Export</button><br>";
    document.getElementById("reset").innerHTML="<button onclick='reset()'>Reset</button><br><br><br><br>";
    document.getElementById("info").innerHTML="1,2,3,4,5 for change screen, 7,8,9 for points, metapoints, metametapoints, i and e for Infinity and Eternity, shift 1-8 for upgrades, left for import, right for export, c for clicking clover. On Autoclicker tab, you need to hold down Control and Alt for it to work.";
  } else if (screennum!=2 && lastscreennum!=screennum){
    document.getElementById("import").innerHTML="";
    document.getElementById("export").innerHTML="";
    document.getElementById("reset").innerHTML="";
    document.getElementById("info").innerHTML="";
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
  if ((!u1 && infinitypoints>=1) || (!u2 && infinitypoints>=1) || (!u3 && infinitypoints>=1) || (!u4 && infinitypoints>=1) || (infinitypoints>=3**u5 && u5<647) || (!u6 && infinitypoints>=1) || (!u7 && infinitypoints>=1) || (!breakinf && infinitypoints>=1)){
    document.getElementById("screen2").style.background="black";
    document.getElementById("screen2").style.color="white";
  } else if (!screen2.matches(':hover')) {
    document.getElementById("screen2").style.background="#f0f0f0";
    document.getElementById("screen2").style.color="black";
  } else {
    document.getElementById("screen2").style.background="#d0d0d0";
    document.getElementById("screen2").style.color="black";
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
  if (document.getElementById("lucky").style.display=="none" && Math.random()*300/(Math.log10(eternitypoints)+1)<=1 && eternitypoints>=1){
    var luckypic=Math.random()*10;
    if (luckypic<=1){
      document.getElementById("lucky").src="../golden.png";
    } else {
      document.getElementById("lucky").src="../clover.png";
    }
    //no wrath
    //no wrath
    //no wrath
    document.getElementById("lucky").style.top=Math.floor(Math.random()*(window.innerHeight-100))+"px";
    document.getElementById("lucky").style.left=Math.floor(Math.random()*(window.innerWidth-100))+"px";
    document.getElementById("lucky").style.display="inline";
  }
  document.getElementById("ticker").style.left=Number(document.getElementById("ticker").style.left.slice(0,-1))-0.1+"%";
  if (Number(document.getElementById("ticker").style.left.slice(0,-1))<=-100-(parseFloat(window.getComputedStyle(document.getElementById("ticker")).getPropertyValue('width'))-parseFloat(window.getComputedStyle(document.getElementById("ticker")).getPropertyValue('padding-left'))-parseFloat(window.getComputedStyle(document.getElementById("ticker")).getPropertyValue('padding-right')))/window.innerWidth*100){
    document.getElementById("ticker").style.left="0%";
    document.getElementById("ticker").innerHTML=ticker();
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
  lastbreakinf=breakinf;
}
function addpoint(){
  if (!points.gte(bigInf) || breakinf){
    points=new bigNum(points.add(new bigNum(1,0).add(metapoints.div(new bigNum(2,0)))).round().m,points.add(new bigNum(1,0).add(metapoints.div(new bigNum(2,0)))).round().e+Math.round(Math.log10(infinitypoints+1))*u6+eternitypoints*10);
  }
}
function getmeta(){
  if (points.gte(new bigNum(1,0)) && (!metapoints.gte(bigInf) || breakinf)){
    metapoints=new bigNum(metapoints.add(points).mult(metametapoints.div(new bigNum(2,0)).add(new bigNum(1,0))).round().m,metapoints.add(points).mult(metametapoints.div(new bigNum(2,0)).add(new bigNum(1,0))).round().e+Math.round(Math.log10(infinitypoints+1)*u6)+eternitypoints*10);
    points=zero;
  }
}
function autometa(){
  if (document.getElementById("metaclicker").value && document.getElementById("metaclickerenabled").checked){
    if (new bigNum(metapoints.add(points).mult(metametapoints.div(new bigNum(2,0)).add(new bigNum(1,0))).round().m,metapoints.add(points).mult(metametapoints.div(new bigNum(2,0)).add(new bigNum(1,0))).round().e+Math.round(Math.log10(infinitypoints+1)*u6)+eternitypoints*10).gte(parse(eval(document.getElementById("metaclicker").value).toString()).add(metapoints))){
      getmeta();
    }
  }
}
function getmetameta(){
  if (metapoints.gte(new bigNum(1,0)) && (!metametapoints.gte(bigInf) || breakinf)){
    metametapoints=new bigNum(metametapoints.add(metapoints).round().m,metametapoints.add(metapoints).round().e+Math.round(Math.log10(infinitypoints+1))*u6+eternitypoints*10);
    points=zero;
    metapoints=zero;
  }
}
function autometameta(){
  if (document.getElementById("metaaclicker").value && document.getElementById("metaaclickerenabled").checked){
    if (new bigNum(metametapoints.add(metapoints).round().m,metametapoints.add(metapoints).round().e+Math.round(Math.log10(infinitypoints+1))*u6+eternitypoints*10).gte(parse(eval(document.getElementById("metaaclicker").value).toString()).add(metapoints))){
      getmetameta();
    }
  }
}
function reset(){
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
  eternitypoints=0;
  breakinf=0;
  u1=0;
  u2=0;
  u3=0;
  u4=0;
  u5=0;
  u6=0;
  u7=0;
  ach1=0;
  ach2=0;
  ach3=0;
  ach4=0;
  ach5=0;
  ach6=0;
  document.getElementById("ach1").classList.remove("gottenach");
  document.getElementById("ach2").classList.remove("gottenach");
  document.getElementById("ach3").classList.remove("gottenach");
  document.getElementById("ach4").classList.remove("gottenach");
  document.getElementById("ach5").classList.remove("gottenach");
  document.getElementById("ach6").classList.remove("gottenach");
}
function save(){
  localStorage.setItem("points+",points.toString());
  localStorage.setItem("metapoints+",metapoints.toString());
  localStorage.setItem("metametapoints+",metametapoints.toString());
  localStorage.setItem("infinitypoints+",infinitypoints.toString());
  localStorage.setItem("breakinf+",breakinf.toString());
  localStorage.setItem("u1+",u1.toString());
  localStorage.setItem("u2+",u2.toString());
  localStorage.setItem("u3+",u3.toString());
  localStorage.setItem("u4+",u4.toString());
  localStorage.setItem("u5+",u5.toString());
  localStorage.setItem("u6+",u6.toString());
  localStorage.setItem("u7+",u7.toString());
  localStorage.setItem("ach1+",ach1.toString());
  localStorage.setItem("ach2+",ach2.toString());
  localStorage.setItem("ach3+",ach3.toString());
  localStorage.setItem("ach4+",ach4.toString());
  localStorage.setItem("ach5+",ach5.toString());
  localStorage.setItem("ach6+",ach6.toString());
  localStorage.setItem("eternitypoints+",eternitypoints.toString());
  localStorage.setItem("luckypoints+",luckypoints.toString());
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
function stround(num){
  if (num>=1000000){
    return num.toExponential(2).replace("+","");
  } else {
    return num;
  }
}
function getlucky(){
  if (document.getElementById("lucky").src=="https://"+location.hostname+"/clover.png"){luckypoints+=10}
  if (document.getElementById("lucky").src=="https://"+location.hostname+"/golden.png"){luckypoints+=100}
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
  if (luckypoints>=10000){
    tickerlist=["ok gg u beat the game now beat <a href='../'>normal prestige clicker</a>"]
  }
  return tickerlist[Math.floor(Math.random()*tickerlist.length)]
}
document.getElementById('lucky').style.display="none";
document.getElementById("ticker").innerHTML=ticker();
setInterval(save,1000);
setInterval(check,20);
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
function importt(){
  var savestr=prompt("Input your save:");
  if (savestr!=null){
    savestr=savestr.replace(/b/g,"\.").replace(/d/g,"\|").replace(/e/g,"0").replace(/f/g,"1").replace(/g/g,"2").replace(/h/g,"3").replace(/i/g,"4").replace(/j/g,"5").replace(/k/g,"6").replace(/l/g,"7").replace(/m/g,"8").replace(/n/g,"9").replace(/c/g,"e").replace(/a/g,"Infinity");
    if (savestr.split("|").length==20){
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
  prompt("Here is your save:",(points+"|"+metapoints+"|"+metametapoints+"|"+infinitypoints+"|"+u1+"|"+u2+"|"+u3+"|"+u4+"|"+u5+"|"+u6+"|"+u7+"|"+breakinf+"|"+ach1+"|"+ach2+"|"+ach3+"|"+ach4+"|"+ach5+"|"+ach6+"|"+eternitypoints+"|"+luckypoints).replace(/Infinity/g,"a").replace(/\./g,"b").replace(/e/g,"c").replace(/\|/g,"d").replace(/0/g,"e").replace(/1/g,"f").replace(/2/g,"g").replace(/3/g,"h").replace(/4/g,"i").replace(/5/g,"j").replace(/6/g,"k").replace(/7/g,"l").replace(/8/g,"m").replace(/9/g,"n"));
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
      if (infinitypoints>=1){
        u2=1;
        infinitypoints-=1;
        u2l=setInterval(autometa,100);
      }
    }
    if (keypressed=="#" && !u3){
      if (infinitypoints>=1){
        u3=1;
        infinitypoints-=1;
        u3l=setInterval(autometameta,100);
      }
    }
    if (keypressed=="$" && !u4){
      if (infinitypoints>=1){
        u4=1;
        infinitypoints-=1;
        u4l=setInterval(autoIP,100);
      }
    }
    if (keypressed=="%" && !u6){
      if (infinitypoints>=1){
        u6=1;
        infinitypoints-=1;
      }
    }
    if (keypressed=="^" && !u7){
      if (infinitypoints>=1){
        u7=1;
        infinitypoints-=1;
      }
    }
    if (keypressed=="&"){
      IPmult();
    }
    if (keypressed=="*" && !breakinf){
      if (infinitypoints>=1){
        breakinf=1;
        infinitypoints-=1;
      }
    }
  }
  if (screennum==4){
    if (event.ctrlKey && event.altKey){
      detect();
    }
  } else {
    detect();
  }
}