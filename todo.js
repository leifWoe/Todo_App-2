let addtodobutton = document.getElementById('add');
let todocontainer = document.getElementById('todocontainer');
let input = document.getElementById('input');
let checkedbutton = document.getElementsByClassName('checked')

addtodobutton.addEventListener('click', function (){

    // paragraph erstellen
    var paragraph = document.createElement('p');
    paragraph.innerText = input.value;
    todocontainer.appendChild(paragraph);

    //input bleibt leer (nach value übergabe!)
    input.value = "";

    // doppel click löscht list item
    paragraph.addEventListener('dblclick', function (){
        todocontainer.removeChild(paragraph);
        todocontainer.removeChild(checkedbutton)
    })

    //check button
    var checkedbutton = document.createElement('button');
    todocontainer.appendChild(checkedbutton);
    checkedbutton.addEventListener('click', function (){
        paragraph.classList.toggle("paragraph-styling");
    })
})

// alert if value = 0