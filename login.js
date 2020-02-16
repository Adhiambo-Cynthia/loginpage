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
btn.addEventListener('click',(e) => {  //click,mouseover,mouseout
    e.preventDefault()
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
        const Reg_users=document.createElement("li")
        Reg_users.appendChild(document.createTextNode(nameinput.value , password_input.value))
        user_list.appendChild(Reg_users)
        nameinput.value=''
        password_input.value=''
    }
    
    
    console.log(nameinput.value)  
})








