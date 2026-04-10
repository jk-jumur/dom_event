// console.log('handler file added')

  document.getElementById('btn-update-title').addEventListener('click', function(){
                //   console.log('btn clicked')
                   const pageTitleElement = document.getElementById('page-title');
                   console.log(pageTitleElement);
                   pageTitleElement.innerText = 'upgrade title text';
               })



     document.getElementById('btn-login')
        .addEventListener('click', function(){
         //   console.log('login user')
              const userInfo = document.getElementById('user-info');
                 console.log('userInfo');
                  userInfo.innerText = 'User Logged In Successfully';
                  })


     document.getElementById('btn-upload-cv').addEventListener('click', function(){
          //   console.log('i am hagu');
          const pageTextElement = document.getElementById('page-text');
            console.log(pageTextElement);
                  
          })          





//handle input
    document.getElementById('btn-update')
             .addEventListener('click', function(){
                //get the text from the input filed
                 const nameInput = document.getElementById('name-input');
                 console.log(nameInput);
                 const name = nameInput.value;
                 console.log('name', name);

                 //set the name

                 const nameP = document.getElementById('name');
                 nameP.innerText = name;
             }) 
             
             
      
     document.getElementById('btn-mouse')
       .addEventListener('mouseenter', function(){
              console.log('mouse  enter');
       })

    document.getElementById('btn-mouse-moved').addEventListener('mousemove', function(){
           console.log('mouse moved');
        })

       document.getElementById('btn-mouse-out').addEventListener('mouseout', function(){
             console.log('micky mouse minnie');

       }) 
       
       

       
            //focus

               document.getElementById('user-name').addEventListener('focus', function(){
                  console.log('user about to write name')
               })

               document.getElementById('user-email').addEventListener('focus', function(){
                  console.log('user about write to email')
               })

               //blur

               document.getElementById('user-name').addEventListener('blur', function(){
                   console.log('user done with name');
               })

               document.getElementById('user-email').addEventListener('blur', function(){
                  console.log('user done with email');
               })

               //keydown

               document.getElementById('user-name').addEventListener('keyup', function(event){
                  console.log('typing', event.target.value);
               })