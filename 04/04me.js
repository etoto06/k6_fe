document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok");
    

    const bt3=document.createElement("button");
    const bt3txt = document.createTextNode("버튼3");
    bt3.appendChild(bt3txt) ;

    
    bt3.setAttribute("id","bt3"); 
    document.querySelector("#btArea2"). append(bt3);

    bt3.addEventListener("click",() => (
        handleClick(Math.random(1,6))
      ));

});

const IMG= new Image();

const handleClick = (Math.random(1,6)) => {
    const IMG= new Image();
    let msg;
    if (n==1) IMG.src = ''
    else if (n==2)
    else if (n==3)
    else if (n==4)
    else if (n==5)
    else  

};