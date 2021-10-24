const ulTag = document.querySelector(".ulTag");
const li = document.querySelectorAll(".rec");
let xItem=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
let yItem=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
const locationArr=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
const locationArrSubmit=[];
let flag=false;

ulTag.addEventListener("click" , move)
random();

function move (e){
    
    e.preventDefault();
    const x = document.querySelector("#x");
    const l1 = document.querySelector("#li1");
    const l2 = document.querySelector("#li2");
    const l3 = document.querySelector("#li3");
    const l4 = document.querySelector("#li4");
    const l5 = document.querySelector("#li5");
    const l6 = document.querySelector("#li6");
    const l7 = document.querySelector("#li7");
    const l8 = document.querySelector("#li8");
    const l9 = document.querySelector("#li9");
    const l10 = document.querySelector("#li10");
    const l11 = document.querySelector("#li11");
    const l12 = document.querySelector("#li12");
    const l13 = document.querySelector("#li13");
    const l14 = document.querySelector("#li14");
    const l15 = document.querySelector("#li15");
   

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

    
   // y move     

    if(xAttVal[0]==="4" && targetAttVal[0] == "3"  && targetAttVal[1] == xAttVal[1] && top === "true"){
        console.log("bottom 3 to 4")
        if(xAttVal[1]=== "1"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="0"
        }else if (xAttVal[1]=== "2"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="126px"
        }
        
        // if(e.target.attributes[4].value === "1"){
        //     e.target.style.transform=`translate(${xli},0)`;
        // }else{
            
        //     e.target.style.transform=`translate(${xli},42px)`;
        //     e.target.attributes[3].value="1";
        // }
        if(e.target.id==="li1" && yItem[0]==="84" ){
            yItem[0]="126";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li2" && yItem[1]==="84"){
            yItem[1]="126";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li3" && yItem[2]==="84"){
            yItem[2]="126";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li4" && yItem[3]==="84"){
            yItem[3]="126";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && yItem[4]==="42"){
            yItem[4]="84";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li6" && yItem[5]==="42"){
            yItem[5]='84';
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li7" && yItem[6]==="42"){
            yItem[6]="84";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li8" && yItem[7]==="42"){
            yItem[7]="84";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && yItem[8]==="0"){
            yItem[8]="42";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li10" && yItem[9]==="0"){
            yItem[9]="42";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li11" && yItem[10]==="0"){
            yItem[10]="42";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li12" && yItem[11]==="0"){
            yItem[11]="42";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && yItem[12]==="-42"){
            yItem[12]="0";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }else if(e.target.id==="li14" && yItem[13]==="-42"){
            yItem[13]="0";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li15" && yItem[14]==="-42"){
            yItem[14]="0";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
            console.log("hello");
        }
        
        console.log(xItem);
        console.log(yItem);
        
        x.style.transform=`translate(${xx},-42px)`;
        x.attributes[2].value =targetAtt;
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
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="0"
        }else if (xAttVal[1]=== "2"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="126px"
        }
        
        if(e.target.id==="li1" && yItem[0]==="42" ){
            yItem[0]="84";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li2" && yItem[1]==="42"){
            yItem[1]="84";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li3" && yItem[2]==="42"){
            yItem[2]="84";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li4" && yItem[3]==="42"){
            yItem[3]="84";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && yItem[4]==="0"){
            yItem[4]="42";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li6" && yItem[5]==="0"){
            yItem[5]="42";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li7" && yItem[6]==="0"){
            yItem[6]="42";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li8" && yItem[7]==="0"){
            yItem[7]="42";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && yItem[8]==="-42"){
            yItem[8]="0";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li10" && yItem[9]==="-42"){
            yItem[9]="0";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li11" && yItem[10]==="-42"){
            yItem[10]="0";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li12" && yItem[11]==="-42"){
            yItem[11]="0";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && yItem[12]==="-84"){
            yItem[12]="-42";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }else if(e.target.id==="li14" && yItem[13]==="-84"){
            yItem[13]="-42";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li15" && yItem[14]==="-84"){
            yItem[14]="-42";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }
        
        
        x.style.transform=`translate(${xx},-84px)`;
        x.attributes[2].value =targetAtt;
        e.target.attributes[2].value=xAtt;

        
        console.log(xItem);
        console.log(yItem);
       
    
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
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="0"
        }else if (xAttVal[1]=== "2"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="126px"
        }
       

        if(e.target.id==="li1" && yItem[0]==="0" ){
            yItem[0]="42";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li2" && yItem[1]==="0"){
            yItem[1]="42";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li3" && yItem[2]==="0"){
            yItem[2]="42";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li4" && yItem[3]==="0"){
            yItem[3]="42";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && yItem[4]==="-42"){
            yItem[4]="0";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li6" && yItem[5]==="-42"){
            yItem[5]="0";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li7" && yItem[6]==="-42"){
            yItem[6]="0";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li8" && yItem[7]==="-42"){
            yItem[7]="0";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && yItem[8]==="-84"){
            yItem[8]="-42";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li10" && yItem[9]==="-84"){
            yItem[9]="-42";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li11" && yItem[10]==="-84"){
            yItem[10]="-42";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li12" && yItem[11]==="-84"){
            yItem[11]="-42";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && yItem[12]==="-126"){
            yItem[12]="-84";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }else if(e.target.id==="li14" && yItem[13]==="-126"){
            yItem[13]="-84";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li15" && yItem[14]==="-126"){
            yItem[14]="-84";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }
        
        x.style.transform=`translate(${xx},-126px)`;
        x.attributes[2].value =targetAtt;
        e.target.attributes[2].value=xAtt;

        
        console.log(xItem);
        console.log(yItem);
        
    
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
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="0"
        }else if (xAttVal[1]=== "2"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="126px"
        }
        
        

        if(e.target.id==="li1" && yItem[0]==="42" ){
            yItem[0]="0";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li2" && yItem[1]==="42"){
            yItem[1]="0";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li3" && yItem[2]==="42"){
            yItem[2]="0";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li4" && yItem[3]==="42"){
            yItem[3]="0";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && yItem[4]==="0"){
            yItem[4]="-42";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li6" && yItem[5]==="0"){
            yItem[5]="-42";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li7" && yItem[6]==="0"){
            yItem[6]="-42";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li8" && yItem[7]==="0"){
            yItem[7]="-42";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && yItem[8]==="-42"){
            yItem[8]="-84";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li10" && yItem[9]==="-42"){
            yItem[9]="-84";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li11" && yItem[10]==="-42"){
            yItem[10]="-84";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li12" && yItem[11]==="-42"){
            yItem[11]="-84";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && yItem[12]==="-84"){
            yItem[12]="-126";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }else if(e.target.id==="li14" && yItem[13]==="-84"){
            yItem[13]="-126";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li15" && yItem[14]==="-84"){
            yItem[14]="-126";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }

        x.style.transform=`translate(${xx},-84px)`;
        x.attributes[2].value =targetAtt;
        e.target.attributes[2].value=xAtt;
        
        

        console.log(xItem);
        console.log(yItem);
        

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
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="0"
        }else if (xAttVal[1]=== "2"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="126px"
        }
        
     
        if(e.target.id==="li1" && yItem[0]==="84" ){
            yItem[0]="42";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li2" && yItem[1]==="84"){
            yItem[1]="42";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li3" && yItem[2]==="84"){
            yItem[2]="42";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li4" && yItem[3]==="84"){
            yItem[3]="42";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && yItem[4]==="42"){
            yItem[4]="0";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li6" && yItem[5]==="42"){
            yItem[5]="0";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li7" && yItem[6]==="42"){
            yItem[6]="0";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li8" && yItem[7]==="42"){
            yItem[7]="0";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && yItem[8]==="0"){
            yItem[8]="-42";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li10" && yItem[9]==="0"){
            yItem[9]="-42";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li11" && yItem[10]==="0"){
            yItem[10]="-42";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li12" && yItem[11]==="0"){
            yItem[11]="-42";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && yItem[12]==="-42"){
            yItem[12]="-84";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }else if(e.target.id==="li14" && yItem[13]==="-42"){
            yItem[13]="-84";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li15" && yItem[14]==="-42"){
            yItem[14]="-84";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }

        x.style.transform=`translate(${xx},-42px)`;
        x.attributes[2].value =targetAtt;
        e.target.attributes[2].value=xAtt;
        
        console.log(xItem);
        console.log(yItem);
        
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
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
           
            xx="0"
        }else if (xAttVal[1]=== "2"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="42px"
        }else if (xAttVal[1]=== "3"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="84px"
        }else if (xAttVal[1]=== "4"){
            if(e.target.attributes[5].value === "1"){
                xli ="-42px";
            }else if (e.target.attributes[6].value === "1"){
                xli="42px"
            }else{ xli="0"}
            xx="126px"
        }
     
        if(e.target.id==="li1" && yItem[0]==="126" ){
            yItem[0]="84";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li2" && yItem[1]==="126"){
            yItem[1]="84";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li3" && yItem[2]==="126"){
            yItem[2]="84";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li4" && yItem[3]==="126"){
            yItem[3]="84";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && yItem[4]==="84"){
            yItem[4]="42";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li6" && yItem[5]==="84"){
            yItem[5]="42";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li7" && yItem[6]==="84"){
            yItem[6]="42";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li8" && yItem[7]==="84"){
            yItem[7]="42";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && yItem[8]==="42"){
            yItem[8]="0";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li10" && yItem[9]==="42"){
            yItem[9]="0";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li11" && yItem[10]==="42"){
            yItem[10]="0";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li12" && yItem[11]==="42"){
            yItem[11]="0";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && yItem[12]==="0"){
            yItem[12]="-42";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }else if(e.target.id==="li14" && yItem[13]==="0"){
            yItem[13]="-42";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li15" && yItem[14]==="0"){
            yItem[14]="-42";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }
        
        x.style.transform=`translate(${xx},0)`;
        x.attributes[2].value =targetAtt;
        e.target.attributes[2].value=xAtt;
        
        console.log(xItem);
        console.log(yItem);
      
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
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="0"
        }else if (xAttVal[0]=== "3"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-42px"
        }else if (xAttVal[0]=== "2"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-84px"
        }else if (xAttVal[0]=== "1"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-126px"
        }
 
        if(e.target.id==="li1" && xItem[0]==="42" ){
            xItem[0]="0";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li8" && xItem[7]==="42"){
            xItem[7]="0";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && xItem[8]==="42"){
            xItem[8]="0";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li2" && xItem[1]==="0"){
            xItem[1]="-42";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li7" && xItem[6]==="0"){
            xItem[6]="-42";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li10" && xItem[9]==="0"){
            xItem[9]="-42";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li15" && xItem[14]==="0"){
            xItem[14]="-42";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }else if(e.target.id==="li3" && xItem[2]==="-42"){
            xItem[2]="-84";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li6" && xItem[5]==="-42"){
            xItem[5]="-84";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li11" && xItem[10]==="-42"){
            xItem[10]="-84";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li14" && xItem[13]==="-42"){
            xItem[13]="-84";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li4" && xItem[3]==="-84"){
            xItem[3]="-126";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && xItem[4]==="-84"){
            xItem[4]="-126";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li12" && xItem[11]==="-84"){
            xItem[11]="-126";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && xItem[12]==="-84"){
            xItem[12]="-126";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }
        
        x.style.transform=`translate(42px,${yy})`;
        x.attributes[2].value =targetAtt;
        e.target.attributes[2].value=xAtt;

        console.log(xItem);
        console.log(yItem);
       
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

    if(xAttVal[1]==="2" && targetAttVal[1] == "3"  && targetAttVal[0] == xAttVal[0] && right === "true" ){
        
        if(xAttVal[0]=== "4"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="0"
        }else if (xAttVal[0]=== "3"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-42px"
        }else if (xAttVal[0]=== "2"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-84px"
        }else if (xAttVal[0]=== "1"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-126px"
        }

        if(e.target.id==="li1" && xItem[0]==="84" ){
            xItem[0]="42";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li8" && xItem[7]==="84"){
            xItem[7]="42";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && xItem[8]==="84"){
            xItem[8]="42";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li2" && xItem[1]==="42"){
            xItem[1]="0";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li7" && xItem[6]==="42"){
            xItem[6]="0";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li10" && xItem[9]==="42"){
            xItem[9]="0";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li15" && xItem[14]==="42"){
            xItem[14]="0";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }else if(e.target.id==="li3" && xItem[2]==="0"){
            xItem[2]="-42";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li6" && xItem[5]==="0"){
            xItem[5]="-42";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li11" && xItem[10]==="0"){
            xItem[10]="-42";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li14" && xItem[13]==="0"){
            xItem[13]="-42";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li4" && xItem[3]==="-42"){
            xItem[3]="-84";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && xItem[4]==="-42"){
            xItem[4]="-84";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li12" && xItem[11]==="-42"){
            xItem[11]="-84";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && xItem[12]==="-42"){
            xItem[12]="-84";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }
        
        x.style.transform=`translate(84px,${yy})`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;

        console.log(xItem);
        console.log(yItem);
       
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

    if(xAttVal[1]==="3" && targetAttVal[1] == "4"  && targetAttVal[0] == xAttVal[0] && right === "true" ){
        
        if(xAttVal[0]=== "4"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="0"
        }else if (xAttVal[0]=== "3"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-42px"
        }else if (xAttVal[0]=== "2"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-84px"
        }else if (xAttVal[0]=== "1"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-126px"
        }
        
        x.style.transform=`translate(126px,${yy})`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;


        if(e.target.id==="li1" && xItem[0]==="126" ){
            xItem[0]="84";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li8" && xItem[7]==="126"){
            xItem[7]="84";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && xItem[8]==="126"){
            xItem[8]="84";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li2" && xItem[1]==="84"){
            xItem[1]="42";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li7" && xItem[6]==="84"){
            xItem[6]="42";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li10" && xItem[9]==="84"){
            xItem[9]="42";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li15" && xItem[14]==="84"){
            xItem[14]="42";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }else if(e.target.id==="li3" && xItem[2]==="42"){
            xItem[2]="0";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li6" && xItem[5]==="42"){
            xItem[5]="0";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li11" && xItem[10]==="42"){
            xItem[10]="0";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li14" && xItem[13]==="42"){
            xItem[13]="0";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li4" && xItem[3]==="0"){
            xItem[3]="-42";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && xItem[4]==="0"){
            xItem[4]="-42";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li12" && xItem[11]==="0"){
            xItem[11]="-42";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && xItem[12]==="0"){
            xItem[12]="-42";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }
        console.log(xItem);
        console.log(yItem);
       
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



    if(xAttVal[1]==="4" && targetAttVal[1] == "3"  && targetAttVal[0] == xAttVal[0] && left === "true" ){
        
        if(xAttVal[0]=== "4"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="0"
        }else if (xAttVal[0]=== "3"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-42px"
        }else if (xAttVal[0]=== "2"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-84px"
        }else if (xAttVal[0]=== "1"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-126px"
        }
      
        if(e.target.id==="li1" && xItem[0]==="84" ){
            xItem[0]="126";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li8" && xItem[7]==="84"){
            xItem[7]="126";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && xItem[8]==="84"){
            xItem[8]="126";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li2" && xItem[1]==="42"){
            xItem[1]="84";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li7" && xItem[6]==="42"){
            xItem[6]="84";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li10" && xItem[9]==="42"){
            xItem[9]="84";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li15" && xItem[14]==="42"){
            xItem[14]="84";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }else if(e.target.id==="li3" && xItem[2]==="0"){
            xItem[2]="42";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li6" && xItem[5]==="0"){
            xItem[5]="42";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li11" && xItem[10]==="0"){
            xItem[10]="42";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li14" && xItem[13]==="0"){
            xItem[13]="42";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li4" && xItem[3]==="-42"){
            xItem[3]="0";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && xItem[4]==="-42"){
            xItem[4]="0";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li12" && xItem[11]==="-42"){
            xItem[11]="0";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && xItem[12]==="-42"){
            xItem[12]="0";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }
        
        x.style.transform=`translate(84px,${yy})`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;

        console.log(xItem);
        console.log(yItem);
       
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

    if(xAttVal[1]==="3" && targetAttVal[1] == "2"  && targetAttVal[0] == xAttVal[0] && left === "true" ){
        
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
      
        if(e.target.id==="li1" && xItem[0]==="42" ){
            xItem[0]="84";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li8" && xItem[7]==="42"){
            xItem[7]="84";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && xItem[8]==="42"){
            xItem[8]="84";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li2" && xItem[1]==="0"){
            xItem[1]="42";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li7" && xItem[6]==="0"){
            xItem[6]="42";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li10" && xItem[9]==="0"){
            xItem[9]="42";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li15" && xItem[14]==="0"){
            xItem[14]="42";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }else if(e.target.id==="li3" && xItem[2]==="-42"){
            xItem[2]="0";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li6" && xItem[5]==="-42"){
            xItem[5]="0";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li11" && xItem[10]==="-42"){
            xItem[10]="0";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li14" && xItem[13]==="-42"){
            xItem[13]="0";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li4" && xItem[3]==="-84"){
            xItem[3]="-42";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && xItem[4]==="-84"){
            xItem[4]="-42";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li12" && xItem[11]==="-84"){
            xItem[11]="-42";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && xItem[12]==="-84"){
            xItem[12]="-42";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }
        
        x.style.transform=`translate(42px,${yy})`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;

        console.log(xItem);
        console.log(yItem);
       
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

    if(xAttVal[1]==="2" && targetAttVal[1] == "1"  && targetAttVal[0] == xAttVal[0] && left === "true" ){
        
        if(xAttVal[0]=== "4"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="0"
        }else if (xAttVal[0]=== "3"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-42px"
        }else if (xAttVal[0]=== "2"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-84px"
        }else if (xAttVal[0]=== "1"){
            if(e.target.attributes[3].value === "1"){
                yli ="42px";
            }else if (e.target.attributes[4].value === "1"){
                yli="-42px"
            }else{ yli="0"}
            yy="-126px"
        }
       
        if(e.target.id==="li1" && xItem[0]==="0" ){
            xItem[0]="42";
            l1.style.transform=`translate(${xItem[0]}px,${yItem[0]}px)`;
        }else if(e.target.id==="li8" && xItem[7]==="0"){
            xItem[7]="42";
            l8.style.transform=`translate(${xItem[7]}px,${yItem[7]}px)`;
        }else if(e.target.id==="li9" && xItem[8]==="0"){
            xItem[8]="42";
            l9.style.transform=`translate(${xItem[8]}px,${yItem[8]}px)`;
        }else if(e.target.id==="li2" && xItem[1]==="-42"){
            xItem[1]="0";
            l2.style.transform=`translate(${xItem[1]}px,${yItem[1]}px)`;
        }else if(e.target.id==="li7" && xItem[6]==="-42"){
            xItem[6]="0";
            l7.style.transform=`translate(${xItem[6]}px,${yItem[6]}px)`;
        }else if(e.target.id==="li10" && xItem[9]==="-42"){
            xItem[9]="0";
            l10.style.transform=`translate(${xItem[9]}px,${yItem[9]}px)`;
        }else if(e.target.id==="li15" && xItem[14]==="-42"){
            xItem[14]="0";
            l15.style.transform=`translate(${xItem[14]}px,${yItem[14]}px)`;
        }else if(e.target.id==="li3" && xItem[2]==="-84"){
            xItem[2]="-42";
            l3.style.transform=`translate(${xItem[2]}px,${yItem[2]}px)`;
        }else if(e.target.id==="li6" && xItem[5]==="-84"){
            xItem[5]="-42";
            l6.style.transform=`translate(${xItem[5]}px,${yItem[5]}px)`;
        }else if(e.target.id==="li11" && xItem[10]==="-84"){
            xItem[10]="-42";
            l11.style.transform=`translate(${xItem[10]}px,${yItem[10]}px)`;
        }else if(e.target.id==="li14" && xItem[13]==="-84"){
            xItem[13]="-42";
            l14.style.transform=`translate(${xItem[13]}px,${yItem[13]}px)`;
        }else if(e.target.id==="li4" && xItem[3]==="-126"){
            xItem[3]="-84";
            l4.style.transform=`translate(${xItem[3]}px,${yItem[3]}px)`;
        }else if(e.target.id==="li5" && xItem[4]==="-126"){
            xItem[4]="-84";
            l5.style.transform=`translate(${xItem[4]}px,${yItem[4]}px)`;
        }else if(e.target.id==="li12" && xItem[11]==="-126"){
            xItem[11]="-84";
            l12.style.transform=`translate(${xItem[11]}px,${yItem[11]}px)`;
        }else if(e.target.id==="li13" && xItem[12]==="-126"){
            xItem[12]="-84";
            l13.style.transform=`translate(${xItem[12]}px,${yItem[12]}px)`;
        }
        
        x.style.transform=`translate(0,${yy})`;
        x.attributes[2].value = e.target.attributes[2].value;
        e.target.attributes[2].value=xAtt;

        console.log(xItem);
        console.log(yItem);
       
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
function randCreat(arr){
    let randNum =Math.round( Math.random()*((arr.length)-1));
    let resultArr=arr[randNum];
    return resultArr;
}
function random(){
    li.forEach(function(item){
        let randomValue = randCreat(locationArr);
        let indexLocation= locationArr.indexOf(randomValue);
        locationArr.splice(indexLocation,1);
        locationArrSubmit.push(randomValue);
        item.innerHTML=`${randomValue}`;
        console.log(locationArrSubmit);        
        console.log(locationArr);        
    })
}