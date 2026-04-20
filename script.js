function showCategory(category){

let toolsDiv=document.getElementById("tools")

let tools=[]

if(category=="video"){

tools=[
["Video Idea","idea"],
["Video Script","script"],
["Viral Hook","hook"],
["Story Script","story"],
["Shorts Script","shorts"]
]

}

if(category=="seo"){

tools=[
["Title Generator","title"],
["Description Generator","description"],
["Tags Generator","tags"],
["Hashtag Generator","hashtags"],
["SEO Keywords","keywords"]
]

}

if(category=="social"){

tools=[
["Instagram Caption","caption"],
["Reel Idea","reel"],
["Tweet Generator","tweet"],
["Story Idea","storyidea"]
]

}

if(category=="thumbnail"){

tools=[
["Thumbnail Idea","thumbnail"],
["Thumbnail Text","thumbtext"],
["Thumbnail Prompt","thumbprompt"]
]

}

if(category=="growth"){

tools=[
["Niche Ideas","niche"],
["Channel Name","channel"],
["Content Calendar","calendar"],
["Growth Tips","growth"]
]

}

toolsDiv.innerHTML=""

tools.forEach(tool=>{

let div=document.createElement("div")

div.className="tool"

div.innerText=tool[0]

div.onclick=()=>generate(tool[1])

toolsDiv.appendChild(div)

})

}



function generate(type){

let topic=document.getElementById("topic").value

if(topic==""){

document.getElementById("result").innerText="Enter topic first"

return

}

let result="AI generated idea about "+topic

if(type=="title") result="Top 5 secrets about "+topic

if(type=="script") result="आज हम बात करेंगे "+topic+" के बारे में..."

if(type=="hook") result="अगर आप "+topic+" नहीं जानते तो आप कुछ बड़ा miss कर रहे हैं!"

if(type=="idea") result="3 shocking facts about "+topic

if(type=="tags") result="#viral #shorts #trending #"+topic

document.getElementById("result").innerText=result

  }
async function generateImage(){

let prompt=document.getElementById("imagePrompt").value

let response=await fetch("https://api.stability.ai/v2beta/stable-image/generate/core",{

method:"POST",

headers:{

"Authorization":"Bearer sk-FlkPcQdyURVck65lw4kOHb7E07wNhdK55U7Z0Rnqo7cVoP65",

"Content-Type":"application/json"

},

body:JSON.stringify({

prompt:prompt

})

})

let data=await response.json()

document.getElementById("imageResult").innerHTML=

"<img src='"+data.image+"' width='300'>"

  }
async function generateVideo(){

let prompt=document.getElementById("videoPrompt").value

document.getElementById("videoResult").innerText="Generating video..."

  }
