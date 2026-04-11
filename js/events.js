

//  <!-- option 2 for click handler-->
  function makeYellow(){
                  document.body.style.backgroundColor = 'yellow'
               }

               function makeRed(){
                   document.body.style.background = 'red';
               }


 //option-3: get element by id and then set onclick to a function
 
    const btnMakeBlue = document.getElementById('btn-make-blue');
                // console.log(btnMakeBlue);
                btnMakeBlue.onclick = function makeBlue(){
                     document.body.style.backgroundColor = 'blue';
                }

//way-3: different version

     const btnMakePurple = document.getElementById('btn-make-purple')
         //     console.log('btnMakePurple')
         btnMakePurple.onclick = makePurple;

         function makePurple(){
                  document.body.style.backgroundColor = 'purple';
            }