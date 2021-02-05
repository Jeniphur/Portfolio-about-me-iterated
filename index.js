var repeat = 0;
  window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) > 330 && repeat === 0) {
  repeat = repeat + 1;

  $(".left").addClass('left1');

  $(".right1").addClass('right80');
  $(".right2").addClass('right75');
  $(".right3").addClass('right70');
  $(".right4").addClass('right65');
  $(".right5").addClass('right60');
  $(".right6").addClass('right50');


  //Progress Circle 80%//
  {const numb = document.querySelector(".numb80");
      let counter = 0;
      setInterval(()=>{
          if(counter == 80){
            clearInterval();
          }else{
            counter+=1;
            numb.textContent = counter + "%";
          }
      }, 40);
  }
  
    //Progress Circle 75%//
    {const numb = document.querySelector(".numb75");
        let counter = 0;
        setInterval(()=>{
            if(counter == 75){
              clearInterval();
            }else{
              counter+=1;
              numb.textContent = counter + "%";
            }
        }, 40);
    }
  
    //Progress Circle 70%//
    {const numb = document.querySelector(".numb70");
        let counter = 0;
        setInterval(()=>{
            if(counter == 70){
              clearInterval();
            }else{
              counter+=1;
              numb.textContent = counter + "%";
            }
        }, 40);
    }
  
    //Progress Circle 65%//
    {const numb = document.querySelector(".numb65");
       let counter = 0;
        setInterval(()=>{
            if(counter == 65){
              clearInterval();
            }else{
             counter+=1;
             numb.textContent = counter + "%";
           }
       }, 40);
    }
  
    //Progress Circle 60%//
    {const numb = document.querySelector(".numb60");
       let counter = 0;
       setInterval(()=>{
           if(counter == 60){
             clearInterval();
           }else{
             counter+=1;
             numb.textContent = counter + "%";
           }
       }, 40);
    }
  
    //Progress Circle 50%//
    {const numb = document.querySelector(".numb50");
        let counter = 0;
        setInterval(()=>{
            if(counter == 50){
              clearInterval();
            }else{
              counter+=1;
              numb.textContent = counter + "%";
           }
        }, 40);
    }
    }
  });
  
/*
//Progress Circle 100%//
{const numb = document.querySelector(".numb");
    let counter = 0;
    setInterval(()=>{
        if(counter == 100){
          clearInterval();
        }else{
          counter+=1;
          numb.textContent = counter + "%";
        }
    }, 40);
}
*/