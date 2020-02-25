      //single element selectors
//document.getElementById("myform")
        //or
//document.querySelector(".container")
       //multiple element selectors
// document.querySelectorAll("h2")
// document.getElementsByClassName('file')
//  const ul= document.querySelectorAll(li)
//  ul.remove()
//  ul.lastElementChild.remove()
//  ul.firstElementChild.textContent="Hello"
//  ul.children[1].innerHTML="<h3>Monday</h3>"

const btn=document.querySelector(".btn")
const form=document.querySelector("#myform")
const nameinput=document.querySelector("#usernm")

const password_input=document.getElementById("pass")
const msg=document.querySelector("#msg")
const Reg_users=document.querySelector("#usernm")
const user_list=document.querySelector("#user_list")
$(document).ready(function () {
    $(".btn").on('click', function (e) {
        e.preventDefault();
  //click,mouseover,mouseout
    
    document.querySelector(".container").style.background ="grey"
    
    if(nameinput.value==='' || password_input.value===''){
        msg.classList.add("error")
        msg.innerHTML="*Please Fill Both Fields"
        setTimeout(() => msg.remove, 3000)
        
    }
    else if(password_input.value.length <8){
        msg.classList.add("error")
        msg.innerHTML="Your password is too short,please use over 8 characters"
    }
    else{
        msg.innerHTML="Sucessfully submitted"
        msg.style.color="blue"
        $(".btn").attr("disabled", true);
                $.post("https://hclubkenya.000webhostapp.com/processentry.php",
                    {
                        fname: fname,
                        lname: lname,
                        email: email,
                        phone: phone,
                        type: type,
                    },
                    function (data, status) {
                        console.log("printing success", data);
                        if (data == 'Successful Registration') {
                            alert("Thank you for registering with Hack Club Kenya")
                            self.location.href = 'index.html';
                        }
                        else {
                            alert(data);
                        }
                    });
           
        
                
        const regUsers=document.createElement("li")
        regUsers.appendChild(document.createTextNode(nameinput.value , password_input.value))
        user_list.appendChild(regUsers)
        nameinput.value=''
        password_input.value=''
    }
    
    
      
})








