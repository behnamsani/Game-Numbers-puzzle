const ulTag = document.querySelector(".ulTag");
const li = document.querySelectorAll(".rec");



ulTag.addEventListener("click" , move)

function move (e){
    e.preventDefault();
    const x = document.querySelector("#x");

    let left ;
    let right ;
    let top ;
    let bottom ;


    if(x.attributes[2].value.split(",")[0] === "4" ){
        bottom="false";
    }else {bottom="true"};
    if(x.attributes[2].value.split(",")[0] === "1" ){
        top="false";
    }else {top="true"};
    if(x.attributes[2].value.split(",")[1] === "4" ){
        right="false";
    }else {right="true"};
    if(x.attributes[2].value.split(",")[1] === "1" ){
        left="false";
    }else {left="true"};


    let xAtt =x.attributes[2].value
    let xAttVal =xAtt.split(",");
    let targetAtt =e.target.attributes[2].value
    let targetAttVal=targetAtt.split(",");

        

    if(xAttVal[0]==="4" && targetAttVal[0] == "3" && top === "true"){
        e.target.style.transform="translateY(42px)";
        x.style.transform="translateY(-42px)";
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;
        
        if(x.attributes[2].value.split(",")[0] === "4" ){
            bottom="false";
        }else {bottom="true"};
        if(x.attributes[2].value.split(",")[0] === "1" ){
            top="false";
        }else {top="true"};
        if(x.attributes[2].value.split(",")[1] === "4" ){
            right="false";
        }else {right="true"};
        if(x.attributes[2].value.split(",")[1] === "1" ){
            left="false";
        }else {left="true"};
        
        
        
        
    }
    if(xAttVal[0]==="3" && targetAttVal[0] == "2" && top === "true" ){
        e.target.style.transform="translateY(42px)";
        x.style.transform="translateY(-84px)";
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;
    
        if(x.attributes[2].value.split(",")[0] === "4" ){
            bottom="false";
        }else {bottom="true"};
        if(x.attributes[2].value.split(",")[0] === "1" ){
            top="false";
        }else {top="true"};
        if(x.attributes[2].value.split(",")[1] === "4" ){
            right="false";
        }else {right="true"};
        if(x.attributes[2].value.split(",")[1] === "1" ){
            left="false";
        }else {left="true"};
        
        
        
    }
    if(xAttVal[0]==="2" && targetAttVal[0] == "1" && top === "true" ){
        e.target.style.transform="translateY(42px)";
        x.style.transform="translateY(-126px)";
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;
    
        if(x.attributes[2].value.split(",")[0] === "4" ){
            bottom="false";
        }else {bottom="true"};
        if(x.attributes[2].value.split(",")[0] === "1" ){
            top="false";
        }else {top="true"};
        if(x.attributes[2].value.split(",")[1] === "4" ){
            right="false";
        }else {right="true"};
        if(x.attributes[2].value.split(",")[1] === "1" ){
            left="false";
        }else {left="true"};
       
        
       
    }
    if(xAttVal[0]==="1" && targetAttVal[0] == "2" && bottom === "true" ){
        console.log("hello");
        e.target.style.transform="translateY(0)";
        x.style.transform="translateY(-84px)";
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;
    
        if(x.attributes[2].value.split(",")[0] === "4" ){
            bottom="false";
        }else {bottom="true"};
        if(x.attributes[2].value.split(",")[0] === "1" ){
            top="false";
        }else {top="true"};
        if(x.attributes[2].value.split(",")[1] === "4" ){
            right="false";
        }else {right="true"};
        if(x.attributes[2].value.split(",")[1] === "1" ){
            left="false";
        }else {left="true"};
        
        
    }
}
