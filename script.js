const taskinput = document.getElementById('input-task');
const addbtn = document.getElementById('add-btn');
const tasklist = document.getElementById('task-list');


//Event Listeners

addbtn.addEventListener('click', () => {
    let data = taskinput.value;
    if(data !=="") {
        // console.log(taskinput.value);
        // const tasktext = taskinput.value;
        const listitem = document.createElement("li");
        listitem.innerHTML = `
                               ${data}
                              <button name="delete" class="delete-btn">Delete</button>
                              `;
        tasklist.appendChild(listitem);
        taskinput.value = "";
                              
    }else{
        alert('please Enter a text');
    }
});


tasklist.addEventListener('click', (event) => {
    if(event.target.name === 'delete') {
        const listitem = event.target.parentElement;
        tasklist.removeChild(listitem);
    }
})

    
