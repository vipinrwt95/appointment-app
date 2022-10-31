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
                 .post('https://crudcrud.com/api/ac1fb057ea654eac8879189488e01caa/NEWAPPOINTMENTS',userdetails)
                 .then(res=>showOnScreen(res.data))
                 .catch(err=>console.log(err))
              
}  
window.addEventListener("DOMContentLoaded",()=>{
   axios.
   get('https://crudcrud.com/api/ac1fb057ea654eac8879189488e01caa/NEWAPPOINTMENTS')
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
   childnode.innerHTML=`${obj.name}  ${obj.email}<button onclick="deleteuser('${obj._id}')">DELETE</button><button id="${obj.id}">EDIT</button>`;
   parentNode.appendChild(childnode);
}
function deleteuser(id)
{  
    axios.
     delete(`https://crudcrud.com/api/ac1fb057ea654eac8879189488e01caa/NEWAPPOINTMENTS/${id}`)
     .then((res)=>{
        
         removeUserFromScreen(id)
         
       })
      .catch((err)=>console.log(err))
}

function removeUserFromScreen(userid)
{
  const parentNode=document.getElementById('ListofUsers');
  const childnodetobedeleted=document.getElementById(userid);
  parentNode.removeChild(childnodetobedeleted);
}

 


