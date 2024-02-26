//document.addEventListener("DOMContentLoaded", ()=>{
    //버튼가져오기
  //  const bts = document.querySelectorAll("section > div > img");// 아래처럼 써도됨
   //const btNum = [1,1,1]
    // const bt1 = document.querySelector("div>button");


    document.addEventListener("DOMContentLoaded", ()=>{
      //버튼가져오기
      const bt1 = document.querySelector("#bt1");// 아래처럼 써도됨
      // const bt1 = document.querySelector("div>button");
      
      // 이벤트 리스너에 handleClick 함수 연결
      bt1.addEventListener("click", handleClick);
      function handleClick() {
      const n =Math.floor(Math.random() *6)+1;
      
      const img = document.querySelector("#img");
      img.setAttribute("src",'./img/${n}.png')
      console.log("click",n);
      }
      
      });
/*
//for of

    for (let [idx,bt] of bts.entries()){
      const n = Math.floor(Math.random()*6+1);
      bt.setAttribute("src",`./img`);
      btsNum[idx] = n;
   }

/*
//for of -> 파이썬의 for in 
for (let bt of bts){
   const n = Math.floor(Math.random()*6+1);
   bts[i].setAttribute("src",`.`)
}






//for in
for (let i  in bts){
   const n = Math.floor(Math.random()*6+1);
   bts[i].setAttribute("src",`/img`)
}





//기본 for
for(let i = 0 ; i<bts.length ; i++){
   const n = Math.floor(Math.random()*6+1);
   bts[i].setAttribute("src",'/img`')
}







//for each

   bts.forEach((item)=> {
      console.log(item)
   });
   

//쿼리셀렉터는 한개를 가져오니까 반복을 못함
//근데 쿼리셀릭트all을 쓰면 배열구조안에 걍 다넣어서 foreach사용가능


   const handleClick = () => {
      const bts = document.querySelectorAll("img");

      bts.forEach(item) =>{
         const n = Math.floor(Math.random()*6)+1;
         item.
      }

   });
 























   //버튼의 이벤트감지
 //  
//const handleClick = () => {
   // console.log("click")
//}

//문제 : handleClick 함수가 실제 클릭 이벤트와 연결되지 않았습니다.
//해결책 : 이벤트 리스너에서 handleClick 함수를 실행하도록 수정합니다