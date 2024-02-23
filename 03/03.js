//DOM tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded", () => {
console.log("DOMContentLoaded ok");


//버튼생성
const bt3=document.createElement("button");
const bt3txt = document.createTextNode("버튼3");
bt3.appendChild(bt3txt) ;

const bt4=document.createElement("button");
const bt4txt = document.createTextNode("버튼4");
bt4.appendChild(bt4txt) ;


bt3.setAttribute("id","bt3"); //클래스,href,imgsrc도 가능
bt4.setAttribute("id","bt4");
bt3.appendChild

//버튼 추가하기
document.querySelector("#btArea2"). append(bt3);
document.querySelector("#btArea2"). append(bt4);

//버튼 이벤트 달기
bt3.addEventListener("click",() => (
  handleClick(3)
));
bt4.addEventListener("click",() => (
  handleClick(4)
));

});

 /*
 함수 작성 2 : 화살표 함수 
 */
//     함수명      파라미터
 const handleClick = (n) => {

    let msg;
    if (n ==1) msg ="<h2>안녕하세요</h2>";
    else if (n==2) msg ="<h2>안녕히가세요 </h2>" ;
    else msg ='<h2>버튼 ${n} 클릭</h2>';
    document.querySelector("#msgArea").innerHTML =msg ;

   // document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다</h2>` ;
 }








// /*
//  함수 작성 1
//  */
 
//  function handleClick(n){
//     document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다</h2>";  //!@!@! id앞에 # 기억 
//     // document.getElementById("msgArea").innerHTML="안녕하세요";
//     //document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다</h2>` ;  // !@!@! ${n} 중괄호 기억

//  }