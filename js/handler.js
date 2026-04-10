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