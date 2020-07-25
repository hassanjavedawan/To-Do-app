var list = document.getElementById('list');

function addItem() {
    var item = document.getElementById('todo-item');

    var li = document.createElement('li');
    var liText = document.createTextNode(item.value);
    li.appendChild(liText);
  

    if (item.value === "") {
        alert("You must write something!");
      }
      else{
          list.appendChild(li);
          
    var deleteall = document.getElementById('deleteall');
    deleteall.style.display ='block'
      }
      
    item.value = ""
    
    // edit btn    
    var editbtn = document.createElement('button');
    var editText = document.createTextNode("Edit");
    editbtn.appendChild(editText);
    editbtn.setAttribute('onclick', "editItem(this)")
    editbtn.className = 'editbtn'

    li.appendChild(editbtn)

    //delete btn
    var deletebtn = document.createElement('button');
    var deleteText = document.createTextNode("Delete");
    deletebtn.setAttribute('onclick', 'deleteItem(this)')
    deletebtn.appendChild(deleteText);
    deletebtn.className = 'delbtn'

    li.appendChild(deletebtn)

    item.value = ""    

}

function deleteItem(del) {
    del.parentNode.remove()
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var edit = prompt("Enter Update value", val);
    e.parentNode.firstChild.nodeValue = edit
   
}

function delAll() {
    list.innerHTML = ""
    var deleteall = document.getElementById('deleteall');
    deleteall.style.display = 'none'
}
