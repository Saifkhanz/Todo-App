let btn=document.getElementById("btn1");

// document.getElementById("btn1").addEventListener("click",Add_Value);
document.getElementById("btn1").addEventListener("click", Add_Value);
 function Add_Value()
 {
    
    document.getElementById('sp1').innerHTML='';
    let dataFeild= document.getElementById('Add_item');
    let data=dataFeild.value;
    if(data=='')
    {
    document.getElementById("sp1").innerHTML="Please Enter the task";
    }
    else
    {
     let Content=document.getElementById('table');
     var new_row = document.createElement('tr');
   new_row.insertCell(0).innerHTML = "<input type='checkbox'>";
   new_row.insertCell(1).innerHTML = data;
   new_row.insertCell(2).innerHTML = '<i class="fa-solid fa-trash" id="f1"></i>';
    //  let list1=document.createElement('tr');
    //  list1.textContent=new_row;
     Content.appendChild(new_row);
    //  console.log(data);
     dataFeild.value=""; 
    //  console.log(data);  
    }
 }
