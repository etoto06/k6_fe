document.addEventListener("DOMContentLoaded", ()=>{
    //버튼가져오기
    const bt1 = document.querySelector("#bt1");// 아래처럼 써도됨
   // const bt1 = document.querySelector("div>button");

    // 이벤트 리스너에 handleClick 함수 연결
 //bt1.addEventListener("click", handleClick);

    bt1.addEventListener('click', ()=>{
      handleClick();
   });


function handleClick() {
    const n =Math.floor(Math.random() *6)+1;

    const img = document.querySelector("#img");
    img.setAttribute("src",`./img/${n}.png`);

    console.log("click",n);
}

});























   //버튼의 이벤트감지
 //  
//const handleClick = () => {
   // console.log("click")
//}

//문제 : handleClick 함수가 실제 클릭 이벤트와 연결되지 않았습니다.
//해결책 : 이벤트 리스너에서 handleClick 함수를 실행하도록 수정합니다