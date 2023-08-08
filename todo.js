const newtask=document.getElementById('task-name');
const tasklist=document.getElementById('task-list');
const totaltask=document.getElementById('total-task');

let total=0;
function addTask() {
    if(newtask.value===''){
        alert('Please! enter a task name')
    }
    else{
        let task=document.createElement('li');
        task.innerHTML = newtask.value;
        tasklist.appendChild(task);
        let span=document.createElement('span');
        span.innerHTML='x';
        task.appendChild(span);
        total+=1;
    }
    totaltask.innerHTML=`Total Task: ${total}`;
    newtask.value="";
}
tasklist.addEventListener("click",function(e) {
    if(e.target.tagName==="LI"){
       
        e.target.classList.toggle('CHECK');
   
}
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        total-=1;
    }
    totaltask.innerHTML=`Total Task: ${total}`;
},false);
