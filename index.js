const $ = document.querySelector.bind(document);
let user = $('#user');
let email = $('#email');
let password = $('#password');
let cfpassword = $('#cfpassword');
let submit      = $('#submit');

function showError(input,message) 
{
    let parent = input.parentElement;
    let err = parent.querySelector('small');
    err.innerText  = message;
    err.classList.add('err');
}

function checkEmpity(Listinput) {
      Listinput.forEach(input => {
            let isempity = input.value.trim();
            if(isempity==''){
                 showError(input,'không được để trống');
            }
      });
}
function checkEmail(input)
{
    let email = input.value.trim();
    var regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
    if(!regexEmail.test(email))
    {
         showError(input,'Invalid email')
    }
}
function checkPassword(input)
{
    let pass = input.value.trim();

    var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(!passwordRegex.test(pass))
    {
         showError(input,'Invalid password');
    }
}
function checkLength(input, min , max)
{
    let inputvalue = input.value.trim();
    if(inputvalue.length <min)
    {
        showError(input,`không được it hơn ${min} kí tự`)
    }
    if(inputvalue.length>max)
    {
        showError(input,`không được vượt quá  ${max} kí tự`)
    }
}

function checkconfirm(pass, cfpass)
{ 
      let a = pass.value.trim();
      let b = cfpass.value.trim();
      if( a!== b)
      {
          showError(cfpass, 'không đúng mật khẩu')
      }
}
submit.addEventListener('click',function(e) {
       e.preventDefault();
       console.log(123);
       checkEmpity([user,email,password,cfpassword]);
       checkEmail(email) 
       checkPassword(password)
       checkLength(user,3,10)
       checkLength(password, 3,10);
      checkconfirm(password,cfpassword)
});