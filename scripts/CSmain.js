function addOnload(func,IMAGE){IMAGE.addEventListener("load",func,!1)} function loadImage(container_id,canvas_id){var image=new Image();image.src="../images/CharaSheetTemplate.png";image.onload=function(){var container=document.getElementById(container_id);var canvas=document.getElementById(canvas_id);var ctx=canvas.getContext("2d");canvas.width=container.clientWidth;canvas.height=container.clientHeight;ctx.fillStyle="rgb(255,255,255)";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0,canvas.width,canvas.height)}} function drawText(color_id,image_id,canvas_id,LName_id,FName_id,Lread_id,Fread_id,Sex_id,Year_id,Month_id,Day_id,height_id,PName_id,other_id,STR_id,CON_id,POW_id,DEX_id,APP_id,SIZ_id,INT_id,EDU_id){var color=document.getElementById(color_id);var File=document.getElementById(image_id);var LName=document.getElementById(LName_id);var FName=document.getElementById(FName_id);var Lread=document.getElementById(Lread_id);var Fread=document.getElementById(Fread_id);var Sex=document.getElementById(Sex_id);var Year=document.getElementById(Year_id);var Month=document.getElementById(Month_id);var Day=document.getElementById(Day_id);var Height=document.getElementById(height_id);var PLname=document.getElementById(PName_id);var OtText=document.getElementById(other_id);var STR=document.getElementById(STR_id);var CON=document.getElementById(CON_id);var POW=document.getElementById(POW_id);var DEX=document.getElementById(DEX_id);var APP=document.getElementById(APP_id);var SIZ=document.getElementById(SIZ_id);var INT=document.getElementById(INT_id);var EDU=document.getElementById(EDU_id);const canvas=document.getElementById(canvas_id);var ctx=canvas.getContext("2d");const image=new Image();image.src="../images/CharaSheetTemplate.png";ctx.fillStyle="rgb(255,255,255)";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle=color.value;function fillStatus(val,num){if(parseInt(val)>18){val="18"} let X=canvas.width*0.039+canvas.width*0.0818*(num-1);let Y=canvas.width*0.65-canvas.width*0.0183*(parseInt(val)-1);let W=canvas.width*0.072;let H=canvas.width*0.0183*parseInt(val);ctx.fillRect(X,Y,W,H)} fillStatus(STR.value,1);fillStatus(CON.value,2);fillStatus(POW.value,3);fillStatus(DEX.value,4);fillStatus(APP.value,5);fillStatus(SIZ.value,6);fillStatus(INT.value,7);fillStatus(EDU.value,8);var PCimage=new Image();PCimage.src=File.src;addOnload(canvas_prev,image);PCimage.onload=PC_prev();function PC_prev(){let X=canvas.width*0.0327;let Y=canvas.width*0.023;let W=canvas.width*0.263;let H=canvas.width*0.263;ctx.drawImage(PCimage,X,Y,W,H)} function canvas_prev(){ctx.drawImage(image,0,0,canvas.width,canvas.height);let size=canvas.width*0.045;let x=canvas.width*0.475;let y=canvas.height*0.0945;fillcenterText(ctx,LName.value+" "+FName.value,x,y,size);size=canvas.width*0.015;x=canvas.width*0.475;y=canvas.width*0.055;fillcenterText(ctx,Lread.value+" "+Fread.value,x,y,size);size=canvas.width*0.045;x=canvas.width*0.683;y=canvas.width*0.0875;fillcenterText(ctx,Sex.value,x,y,size);size=canvas.width*0.035;x=canvas.width*0.765;y=canvas.width*0.0845;fillcenterText(ctx,Height.value,x,y,size);size=canvas.width*0.025;x=canvas.width*0.885;y=canvas.width*0.07;if(Year.value==" "&&Month.value==" "&&Day.value==" "){}else{fillcenterText(ctx,Year.value+"/ \n "+Month.value+"/"+Day.value,x,y,size)} size=canvas.width*0.02;x=canvas.width*0.325;y=canvas.width*0.15;filltopleftText(ctx,OtText.value,x,y,size);size=canvas.width*0.025;x=canvas.width*0.89;y=canvas.width*0.27;fillcenterText(ctx,PLname.value,x,y,size);size=canvas.width*0.07;x=canvas.width*0.883;y=canvas.width*0.383;fillcenterText(ctx,parseInt(POW.value)*5+"",x,y,size);size=canvas.width*0.058;x=canvas.width*0.763;y=canvas.width*0.482;let HP=(parseInt(CON.value)+parseInt(SIZ.value))/2;HP=Math.ceil(HP);fillcenterText(ctx,HP+"",x,y,size);size=canvas.width*0.058;x=canvas.width*0.898;y=canvas.width*0.482;fillcenterText(ctx,POW.value,x,y,size);size=canvas.width*0.058;x=canvas.width*0.767;y=canvas.width*0.5857;fillcenterText(ctx,parseInt(INT.value)*5+"",x,y,size);size=canvas.width*0.058;x=canvas.width*0.902;y=canvas.width*0.5857;let Know=parseInt(EDU.value)*5;if(Know>=100){Know=99} fillcenterText(ctx,Know+"",x,y,size);size=canvas.width*0.058;x=canvas.width*0.767;y=canvas.width*0.687;fillcenterText(ctx,parseInt(POW.value)*5+"",x,y,size);size=canvas.width*0.04;x=canvas.width*0.9;y=canvas.width*0.68;let point=parseInt(STR.value)+parseInt(SIZ.value);let DB;if(point<=12){DB="-1D6"}else if(point<=16){DB="-1D4"}else if(point<=24){y=canvas.width*0.675;DB="--"}else if(point<=32){DB="+1D4"}else if(point<=40){DB="+1D6"}else{DB=""} fillcenterText(ctx,DB,x,y,size);var skills=[];var skillval=[];size=canvas.width*0.027;for(let k=0;k<18;k++){skills[k]=document.getElementById("SKILL"+(k+1));skillval[k]=document.getElementById("SKILLval"+(k+1));let l=Math.floor(k/6);let m=k-6*l;x=canvas.width*0.05+canvas.width*0.31*l;y=canvas.width*0.769+canvas.width*0.04*m;filltopleftText(ctx,skills[k].value,x,y,size);x=canvas.width*0.07+canvas.width*0.225+canvas.width*0.31*l;fillcenterText(ctx,skillval[k].value,x,y,size)} function TextStatus(val,num){size=canvas.width*0.023;x=canvas.width*0.0735+canvas.width*0.0818*(num-1);y=canvas.width*0.657;ctx.fillStyle="rgba(255,255,255,0.9)";fillcenterText(ctx,val.value,x,y,size)} TextStatus(STR,1);TextStatus(CON,2);TextStatus(POW,3);TextStatus(DEX,4);TextStatus(APP,5);TextStatus(SIZ,6);TextStatus(INT,7);TextStatus(EDU,8)}} function fillTextLine(context,text,x,y){var textList=text.split("\n");var lineHeight=context.measureText("あ").width;textList.forEach(function(text,i){context.fillText(text,x,y+lineHeight*i)})} function filltopleftText(context,text,x,y,size){context.textBaseline="alphabetic";context.textAlign="left";context.font=size+"px 'RocknRoll One', sans-serif";fillTextLine(context,text,x,y)} function fillcenterText(context,text,x,y,size){context.textBaseline="alphabetic";context.textAlign="center";context.font=size+"px 'RocknRoll One', sans-serif";fillTextLine(context,text,x,y)}