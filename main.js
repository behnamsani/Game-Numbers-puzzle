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

    let xli;
    let xx;

    let yli;
    let yy;


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
    let targetAtt =e.target.attributes[2].value;
    let targetAttVal=targetAtt.split(",");
    // let flag =e.target.attributes[2].value.split(",")[2];

    
   // y move     

    if(xAttVal[0]==="4" && targetAttVal[0] == "3"  && targetAttVal[1] == xAttVal[1] && top === "true"){
        if(xAttVal[1]=== "1"){
            xli="0"
            xx="0"
        }else if (xAttVal[1]=== "2"){
            xli="0"
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            xli="0"
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            xli="0"
            xx="126px"
        }
        
        if(e.target.attributes[4].value === "1"){
            e.target.style.transform=`translate(${xli},0)`;
        }else{
            e.target.style.transform=`translate(${xli},42px)`;
            e.target.attributes[3].value="1";
        }
        console.log(e.target)
        console.log(`top ${e.target.innerHTML} : ${e.target.attributes[3].value}`);
        console.log(`bottom ${e.target.innerHTML} : ${e.target.attributes[4].value}`);

        x.style.transform=`translate(${xx},-42px)`;
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
    if(xAttVal[0]==="3" && targetAttVal[0] == "2"  && targetAttVal[1] == xAttVal[1] && top === "true" ){
        if(xAttVal[1]=== "1"){
            xli="0"
            xx="0"
        }else if (xAttVal[1]=== "2"){
            xli="0"
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            xli="0"
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            xli="0"
            xx="126px"
        }
        if(e.target.attributes[4].value === "1"){
            e.target.style.transform=`translate(${xli},0)`;
        }else{
            e.target.style.transform=`translate(${xli},42px)`;
            e.target.attributes[3].value="1";
        }
        
        x.style.transform=`translate(${xx},-84px)`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;

        console.log(`top ${e.target.innerHTML} : ${e.target.attributes[3].value}`);
        console.log(`bottom ${e.target.innerHTML} : ${e.target.attributes[4].value}`);
    
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
    if(xAttVal[0]==="2" && targetAttVal[0] == "1"  && targetAttVal[1] == xAttVal[1] && top === "true" ){
        if(xAttVal[1]=== "1"){
            xli="0"
            xx="0"
        }else if (xAttVal[1]=== "2"){
            xli="0"
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            xli="0"
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            xli="0"
            xx="126px"
        }
        if(e.target.attributes[4].value === "1"){
            e.target.style.transform=`translate(${xli},0)`;
        }else{
            e.target.style.transform=`translate(${xli},42px)`;
            e.target.attributes[3].value="1";
        }
        
        x.style.transform=`translate(${xx},-126px)`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;

        console.log(`top ${e.target.innerHTML} : ${e.target.attributes[3].value}`);
        console.log(`bottom ${e.target.innerHTML} : ${e.target.attributes[4].value}`);
    
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
    if(xAttVal[0]==="1" && targetAttVal[0] == "2"  && targetAttVal[1] == xAttVal[1] && bottom === "true" ){
        if(xAttVal[1]=== "1"){
            xli="0"
            xx="0"
        }else if (xAttVal[1]=== "2"){
            xli="0"
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            xli="0"
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            xli="0"
            xx="126px"
        }
        console.log("bottom");
        if(e.target.attributes[3].value ==="1"){
            e.target.style.transform=`translate(${xli},0)`;
        }else {
            e.target.style.transform=`translate(${xli},-42px)`;
            e.target.attributes[4].value = "1";
        }
        x.style.transform=`translate(${xx},-84px)`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;
        
        console.log(`top ${e.target.innerHTML} : ${e.target.attributes[3].value}`);
        console.log(`bottom ${e.target.innerHTML} : ${e.target.attributes[4].value}`);

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

    if(xAttVal[0]==="2" && targetAttVal[0] == "3"  && targetAttVal[1] == xAttVal[1] && bottom === "true" ){
        if(xAttVal[1]=== "1"){
            xli="0"
            xx="0"
        }else if (xAttVal[1]=== "2"){
            xli="0"
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            xli="0"
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            xli="0"
            xx="126px"
        }
        console.log("bottom");
        if(e.target.attributes[3].value === "1"){
            e.target.style.transform=`translate(${xli},0)`;
        }else {
            e.target.style.transform=`translate(${xli},-42px)`;
            e.target.attributes[4].value = "1";
        }
        x.style.transform=`translate(${xx},-42px)`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;
        
        console.log(`top ${e.target.innerHTML} : ${e.target.attributes[3].value}`);
        console.log(`bottom ${e.target.innerHTML} : ${e.target.attributes[4].value}`);

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

    if(xAttVal[0]==="3" && targetAttVal[0] == "4"  && targetAttVal[1] == xAttVal[1] && bottom === "true" ){
        if(xAttVal[1]=== "1"){
            xli="0"
            xx="0"
        }else if (xAttVal[1]=== "2"){
            xli="0"
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            xli="0"
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            xli="0"
            xx="126px"
        }
        console.log("bottom");
        if(e.target.attributes[3].value === "1"){
            e.target.style.transform=`translate(${xli},0)`;
        }else {
            e.target.style.transform=`translate(${xli},-42px)`;
            e.target.attributes[4].value = "1";
        }
        x.style.transform=`translate(${xx},0)`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;
        
        console.log(`top ${e.target.innerHTML} : ${e.target.attributes[3].value}`);
        console.log(`bottom ${e.target.innerHTML} : ${e.target.attributes[4].value}`);

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

    //move in x

    if(xAttVal[1]==="1" && targetAttVal[1] == "2"  && targetAttVal[0] == xAttVal[0] && right === "true" ){
        
        if(xAttVal[0]=== "4"){
            yli="0"
            yy="0"
        }else if (xAttVal[0]=== "3"){
            yli="0"
            yy="-42px"
        }else if (xAttVal[0]=== "2"){
            yli="0"
            yy="-84px"
        }else if (xAttVal[0]=== "1"){
            yli="0"
            yy="-126px"
        }
        e.target.style.transform=`translate(-42px,${yli})`;
        x.style.transform=`translate(42px,${yy})`;
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
