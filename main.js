function saveToServer(event)
{     event.preventDefault();
       //console.log("a");
        const name=document.getElementById('name');
        
        const email=document.getElementById('email');
        // const phone=document.getElementById('phonenumber');
         const userdetails = {
            name:name.value,
            email:email.value,
            //phone:phone.value
           }
            //console.log(userdetails);
             
            axios
                 .post('https://crudcrud.com/api/2649f357751748a88be5957aef89ec37/appointmnets',userdetails)
                 .then(res=>showOnScreen(res.data))
                 .catch(err=>console.log(err))
              
}  
window.addEventListener("DOMContentLoaded",()=>{
   axios.
   get('https://crudcrud.com/api/2649f357751748a88be5957aef89ec37/appointmnets')
   .then((res)=>{
      for(var i=0;i<res.data.length;i++)
      {
        showOnScreen(res.data[i]) 
      }     
   })
   .catch((err)=>{console.log(err)
 })
})
//let ids=new Set();
function showOnScreen(obj)
{  //console.log(obj.name);
   
  
   let parentNode=document.getElementById('ListofUsers');
   let childnode=document.createElement('li');
   childnode.id=obj._id;
   childnode.innerHTML=`${obj.name}  ${obj.email}<button onclick="deleteuser('${obj._id}')">DELETE</button><button onclick="edituser('${obj._id}','${obj.name}','${obj.email}') ">EDIT</button>`;
   parentNode.appendChild(childnode);
}
function deleteuser(id)
{  
    axios.
     delete(`https://crudcrud.com/api/2649f357751748a88be5957aef89ec37/appointmnets/${id}`)
     .then((res)=>{
        
         removeUserFromScreen(id)
         
       })
      .catch((err)=>console.log(err))
}
function edituser(userid,username,useremail)
{  
   document.getElementById('name').value=username;
   document.getElementById('email').value=useremail;
   deleteuser(userid);
}


function removeUserFromScreen(userid)
{
  const parentNode=document.getElementById('ListofUsers');
  const childnodetobedeleted=document.getElementById(userid);
  parentNode.removeChild(childnodetobedeleted);
}

 


