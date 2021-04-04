


setInterval(() =>{

    let today= new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let date = today.toDateString();
    let timeStatus = hh > 12 ? "PM" : "AM";
document.getElementById('clock').innerHTML=`${hh.toString().padStart(2,"0")} : ${mm.toString().padStart(2,"0")} : ${ss.toString().padStart(2,"0")} ${timeStatus}`;
document.getElementById('date').innerHTML= date;
},1000);

function newElement(){
    if(document.getElementById('myinput').value.length==0){
        alert("Please Enter a task")
    }
    else{
        document.getElementById('tasks').innerHTML +=`
        <div class="task">
        <span id="taskname">
        ${document.getElementById('myinput').value}
        </span>
        <button class="delete">
        <i class="fa fa-trash"></i>
        
        `;
      
        var current_tasks=document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length;i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i< tasks.length ; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }


        }
        document.getElementById('myinput').value="";



    }
}