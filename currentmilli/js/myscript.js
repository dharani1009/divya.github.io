function copyText(htmlElement){
    if(!htmlElement)
    {
        return;
    }
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value',elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}
document.querySelector('#copy-text-btn').onclick=
function (){
    copyText(document.querySelector('#dynamicmillisec'));
}
//Static UTC Date
const statmonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
//add Zero function
function addZero(i) {
if (i < 10) {i = "0" + i}
return i; }
var d = new Date();
var staticmillisecid=d.getTime();
//Static Milli second
document.getElementById("staticmillisec").innerHTML = staticmillisecid;
//static local date
let saticlocaldt=d.getDate()
let staticlocalmonth=statmonths[d.getMonth()];
let staticlocalyear=d.getFullYear();
let presentlocaldtformate=saticlocaldt+' '+staticlocalmonth+' '+staticlocalyear;
document.getElementById('localdate').innerHTML = presentlocaldtformate;
//dynamiclocal time
function dynamicgetlocaltime(){
var d=new Date();
var h=addZero(d.getHours());
var m=addZero(d.getMinutes());
var s=addZero(d.getSeconds());
var presentutctime=h+":"+m+":"+s;
document.getElementById('hrstime').innerHTML = presentutctime;
}
setInterval(dynamicgetlocaltime, 1000)
//convert date time to millisecond
function convert(){
var y,m,dt;
y=(document.getElementById('yearbox').value);
m=(document.getElementById('monthbox').value);
dd=(document.getElementById('datebox').value);
hr=(document.getElementById('hourbox').value);
min=(document.getElementById('minutesbox').value);
sec=(document.getElementById('secondbox').value);
//m=parseInt(document.getElementById('box2').value);
//dt=parseInt(document.getElementById('box3').value);
var anss=document.getElementById('ans');
const d = new Date(y,m,dd,hr,min,sec);
const millisec=d.getTime();
ans.value=millisec;
}
//Static UTC Date
let staticutcdt = d.getUTCDate()
let staticutcmonth = statmonths[d.getUTCMonth()];
let staticutcyear=d.getUTCFullYear();
let presentutcdt=staticutcdt+" "+staticutcmonth+" "+staticutcyear;
document.getElementById("staticutcdate").innerHTML = presentutcdt;

//Static UTC Time
function getutctime(){
var d=new Date();
var h=addZero(d.getUTCHours());
var m=addZero(d.getUTCMinutes());
var s=addZero(d.getUTCSeconds());
var presentutctime=h+":"+m+":"+s;
document.getElementById('staticutctime').innerHTML = presentutctime;
}
setInterval(getutctime, 1000)
//Dynamic milli seconds
function getdynamicmillisec(){
var d=new Date();
var unixsec=d.getTime();
document.getElementById('dynamicmillisec').innerHTML=unixsec
}
setInterval(getdynamicmillisec, 500)




//Main function
function main(){
var unixid=parseInt(document.getElementById("unix").value);
var utctimeid=document.getElementById('utctime');
var localtimeid=document.getElementById('localtime');
//add zero if the day number is less than one
var Weekday=["Sun","Mon","Tue","Wed","Thu","Fri","sat"];
var currentdate=new Date(unixid);
var utcdy=Weekday[currentdate.getUTCDay()];
var months=["Jan",
"Feb","Mar","April","May","Jun",
"Jul","Aug",
"Sep","Oct","Nov","Dec"]
var utcmnth=months[currentdate.getUTCMonth()];
var utcdt=addZero(currentdate.getUTCDate());     
var utcyr=currentdate.getUTCFullYear();
var utchr=addZero(currentdate.getUTCHours());
var utcmin=addZero(currentdate.getUTCMinutes());
var utcsec=addZero(currentdate.getUTCSeconds());
var utcinputformate=utcdy+" "+utcmnth+
" "+utcdt+" "+utcyr+" "+utchr+":"+utcmin+':'+utcsec;
utctimeid.value=utcinputformate;
//local time
var localdy=Weekday[currentdate.getDay()];
var localmnth=months[currentdate.getMonth()];
var localdt=addZero(currentdate.getDate());
var localyr=currentdate.getFullYear();
var localhr=addZero(currentdate.getHours());
var localmin=addZero(currentdate.getMinutes());
var localsec=addZero(currentdate.getSeconds());
var localinputformate=localdy+' '+localmnth+' '+localdt+' '+localyr+' '+localhr+':'+localmin+':'+localsec;
localtimeid.value=localinputformate;

}
