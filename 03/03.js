 /*
 함수 작성 2 : 화살표 함수 
 */
//     함수명      파라미터
 const handleClick = (n) => {

    let msg;
    if (n ==1) msg ="<h2>안녕하세요</h2>";
    else msg ="<h2>안녕히가세요 </h2>" ;

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