// console.log('login js file')
// step no -01:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function() {
    // console.log('submit button click');
    // step no :02 get the email address inside the input field
    // always remember use to .value to the input field
    const emailField =document.getElementById('user-email');
    const email =emailField.value;
    // console.log(email);
    // step no -03.a: set id element on the html element
    // 3.b:get the element 
    // 3.c: get the value from the element
    const passwordField =document.getElementById('user-pass');
    const password =passwordField.value;
    // console.log(email,password);

    // DANGER:DO NOT verify email password  on the client side  
    // step 04:verify email and password
    if (email ==='rajibsharkar22222@gmail.com' && password==='secret'){
        // console.log('valid password')
        window.location.href='bank.html'
    }
    else{
        atert('invalid password')
    }

});