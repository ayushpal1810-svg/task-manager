
let tasks =
JSON.parse(
    localStorage.getItem("tasks")
) || [];
const today= new Date();
const today_formatted_date= today.toLocaleDateString();
const input_box = document.getElementById("input_add_task");
const add_task_container = document.getElementsByClassName("task_list")[0];
const adda=document.getElementById("add")
function createTaskElement(text) {

    const task = document.createElement("div");

    const textSpan = document.createElement("span");
    textSpan.textContent = text;

    task.appendChild(textSpan);

    add_task_container.appendChild(task);
}
window.addEventListener("load", function () {

    tasks.forEach(function (text) {
        createTaskElement(text);
    });

});
document.getElementsByClassName("date")[0].textContent = today_formatted_date;
adda.addEventListener("click",function () {

   //creating input box on click
    const input=document.createElement("input")
    input.type="text";
    input.placeholder="enter task"
    const text = input.value.trim();

    //deleting old input boxes so only one shows 
    input_box.innerHTML="";
    input_box.appendChild(input);
    input.focus();

    //adding tasks to container
    input.addEventListener("keypress" , function(e){
        if(e.key==="Enter"){
            const text=input.value.trim();
            tasks.push(text);
            localStorage.setItem( "tasks",
                 JSON.stringify(tasks)
                );
                createTaskElement(text)
            if(text=="") return
            const task=document.createElement("div")
            const textSpan = document.createElement("span");
textSpan.textContent = text;
task.appendChild(textSpan);
                const btn=document.createElement("button")
                btn.textContent = "completed";
                const dbtn=document.createElement("button")
                dbtn.textContent = "delete";
                const ebtn=document.createElement("button")
                ebtn.textContent = "edit";

                btn.addEventListener("click" , function () {
                    task.classList.toggle("completed");
                    if(task.classList.contains("completed")){
                        btn.textContent="incomplete";
                        add_task_container.appendChild(task)
                    }
                    else{
                        btn.textContent="completed";
                        add_task_container.prepend(task)
                    }
                });
                dbtn.addEventListener("click" , function () {
                    task.remove();
                });
                ebtn.addEventListener("click" , function() {
                    const oldTextspan=task.querySelector("span")
                    const input=document.createElement("input")
                    input.type="text"
                    input.value=oldTextspan.textContent;
                    task.replaceChild(input,oldTextspan)
                    input.focus();
                    input.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            const newText = input.value.trim();

            if (newText === "") return;

            // replace input with updated text

            const newtextspan = document.createElement("span");
            newtextspan.textContent=newText;
            task.replaceChild(newtextspan,input)

        }

    });
                });
                task.appendChild(ebtn);
                task.appendChild(btn);
                task.appendChild(dbtn);
            add_task_container.prepend(task);
            input_box.innerHTML="";
        }
    });

});
