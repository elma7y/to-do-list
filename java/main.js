// add variables
let inputField = document.querySelector(".data");
let addItems = document.querySelector(".add-tasks span");
let tasksContainer = document.querySelector(".tasks");
let taskNumber = document.querySelector(".tasks-count span");
let completedNumber = document.querySelector(".tasks-completed span");


addItems.addEventListener("click" , function(){
    
    if(inputField.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Insert A Title!',
        })
    }else{
    
    let emptyMsg = document.querySelector(".notaskmsg");
    if(document.body.contains(document.querySelector(".notaskmsg"))){
        emptyMsg.remove();
    }
        let mainSpan = document.createElement("span");
        let mainSpanText = document.createTextNode(inputField.value);
        mainSpan.classList.add("taskbox");
        let deleteBtn = document.createElement("span");
        let deleteBtnText = document.createTextNode("delete");
        deleteBtn.classList.add("delete");
        mainSpan.appendChild(mainSpanText);
        deleteBtn.appendChild(deleteBtnText);
        mainSpan.appendChild(deleteBtn);
        tasksContainer.appendChild(mainSpan);
        inputField.value = ""
        inputField.focus();
        calculateTasks ();
    }
})

document.addEventListener("click" , function(e){
    if(e.target.className === "delete"){
        
        e.target.parentNode.remove();
        calculateTasks ();
        if(tasksContainer.childElementCount === 0){
            embtyMsg();
        }
    }


})
document.addEventListener("click" , function(e){
    if(e.target.classList.contains("taskbox") ){
        
        e.target.classList.toggle("finished");
    }
    calculateTasks ();
})

function calculateTasks () {
    
    taskNumber.innerHTML = document.querySelectorAll(".tasks .taskbox").length;

    completedNumber.innerHTML = document.querySelectorAll(".tasks .finished").length;

}

function embtyMsg() {

    let embtySpan = document.createElement("span");
    let embtySpanText = document.createTextNode("no tasks to show");
    embtySpan.classList.add("notaskmsg");
    embtySpan.appendChild(embtySpanText);
    tasksContainer.appendChild(embtySpan);
}


let deletAllBtn = document.createElement("span");
deletAllBtn.classList.add("deleteall");
let deletAllBtnText = document.createTextNode("Delete All");
deletAllBtn.appendChild(deletAllBtnText);
document.querySelector(".a7a").appendChild(deletAllBtn);



document.querySelector(".deleteall").onclick = function () {
    let myArrayAllTask = Array.from(document.querySelectorAll(".taskbox"));
    for (let i = 0; i < myArrayAllTask.length; i++) {
    myArrayAllTask[i].remove();
    }
};

let completeAllBtn = document.createElement("span");
completeAllBtn.classList.add("completeall");
let completeAllBtnText = document.createTextNode("complete All");
completeAllBtn.appendChild(completeAllBtnText);
document.querySelector(".a7a").appendChild(completeAllBtn);


document.querySelector(".completeall").onclick = function () {
    let myArraycompletedTask = Array.from(document.querySelectorAll(".taskbox"));
    for (let s = 0; s < myArraycompletedTask.length; s++) {
        myArraycompletedTask[s].classList.add("finished");
    }
};