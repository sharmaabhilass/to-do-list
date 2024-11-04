const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//   so here is the main function works

function addTask(){
    if (inputBox.value=== ''){
        alert('you must write here somthing')
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //   now code for the delete button behinf the task created
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
       li.appendChild(span);
    }
    inputBox.value ='';
    saveData();
}


//  add eventlistner on the task clicked and the delete button

listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//  the function to save the data whenever we refresh or again start the browser data shoul be saved

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// function to show the data which is saved

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();