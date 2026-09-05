// Enter tasks
// Mark complete
// When tasks are complete, to do a line-through //strike-through
//ability to delete completed & uncompleted tasks individually 
//delete all completed tasks button


// Input at the top/heading of the page
// Submit button 
// Display the tasks you submitted or entered. 
// Check box to display when the tasks is completed. 
// Once we hit the checkbox, a line-through will go through the checked item/list. 
// Add a delete button to-the 
// Click delete, the list clears (add a warning on the delete button). 

// Enter an item on the list

document.querySelector('#submit-task').addEventListener('click',addTask)

// Adding items onto list
function addTask(){
    let newTask = document.querySelector('#task').value
    let taskParagraph = document.createElement('p')
    taskParagraph.innerText = newTask

    // Where the new tasks should appear
    let taskList = document.querySelector('#hashtag')
    // Take the new element created and store it where it can be displayed
    taskList.appendChild(taskParagraph)
    taskParagraph.addEventListener('click',(event)=>{
        taskParagraph.classList.toggle('linethrough')
    })
}

// Delete an item from the list

document.querySelector('#delete').addEventListener('click',deleteList)

function deleteList(){
    document.querySelectorAll('.linethrough').forEach(
        (element)=>{
            element.remove()
        }
    )
}

// Save the list (so it stays there when you refresh the page)

// Load the list (when the user opens the page)