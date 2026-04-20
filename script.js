function generate(type){

let topic=document.getElementById("topic").value

if(topic==""){
document.getElementById("result").innerText="Enter topic first"
return
}

let result=""

switch(type){

case "title":
result="10 Amazing Facts About "+topic+" | Must Watch!"
break

case "description":
result="In this video we talk about "+topic+" and reveal some interesting facts. Watch till the end!"
break

case "tags":
result=topic+", viral video, youtube shorts, trending video, new video"
break

case "hashtags":
result="#viral #shorts #trending #youtube #"+topic
break

case "idea":
result="Top 5 things you didn't know about "+topic
break

case "keyword":
result=topic+" tutorial, "+topic+" tips, "+topic+" secrets, "+topic+" guide"
break

}

document.getElementById("result").innerText=result

}
