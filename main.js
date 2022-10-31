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
                 .then(res=>console.log(res))
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

function showOnScreen(obj)
{  //console.log(obj.name);
   let parentNode=document.getElementById('ListofUsers');
   let childnode=document.createElement('li');
   childnode.className="list";
   childnode.innerHTML=`${obj.name}  ${obj.email}<button id="delete">DELETE</button><button id="edit">EDIT</button>`;
   parentNode.appendChild(childnode);
}



 


