const today= new Date();
const today_formatted_date= today.toLocaleDateString();
const input_box = document.getElementById("input_add_task");
const add_task_container = document.getElementsByClassName("task_list")[0];
const adda=document.getElementById("add")
document.getElementsByClassName("date")[0].textContent = today_formatted_date;
adda.addEventListener("click",function () {
   
   //creating input box on click
    const input=document.createElement("input")
    input.type="text";
    input.placeholder="enter task"

    //deleting old input boxes so only one shows 
    input_box.innerHTML="";
    input_box.appendChild(input);
    input.focus();

    //adding tasks to container
    input.addEventListener("keypress" , function(e){
        if(e.key==="Enter"){
            const text=input.value.trim();
            if(text=="") return
            const task=document.createElement("div")
            task.textContent=text;
            add_task_container.prepend(task);
            input_box.innerHTML="";
        }
    });

});
