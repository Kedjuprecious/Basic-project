let form = document.querySelector('form');
let contacts = []; // Define an array to contain the takss


form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = form.cName;
    const email= form.cEmail;
    const option = form.cOption;
    const message = form.cMessage;
    const todoId = form.todoId.value;


   
    //validate inputs 
    //Text validation using JavaScript

    // Method one

    let hasError = false;
    // Validation for form

    // Validation for contact name.
    if (name.value.trim() == ''){
        addErrorElement(name,"The title field is required");
        // document.getElementById('titleInfo').innerHTML = "This is required";
        hasError = true;
    } //else if(name.value.trim().length < 6){
    //     addErrorElement(title,"The title field must be atleast 6 characters");
    //     hasError = true;
    // }
    else {
        removeErrorElement(name);
        // document.getElementById('titleInfo').innerHTML = "";
    
    }


    // Validation of the contact email
    if (email.value.trim() == ''){
        // document.getElementById('describeInfo').innerHTML = "This is required";
        addErrorElement(email,"The description field is required");
        hasError = true;
    }
    
    else {
        removeErrorElement(email);
        // document.getElementById('describeInfo').innerHTML = "";
    
    }


    // Validation of the contact option
    if (option.value.trim() == ''){
        // document.getElementById('describeInfo').innerHTML = "This is required";
        addErrorElement(option,"The description field is required");
        hasError = true;
    }
    
    else {
        removeErrorElement(option);
        // document.getElementById('describeInfo').innerHTML = "";
    
    }


    // Validation of the contact message
    if (message.value.trim() == ''){
        addErrorElement(message,"The date field is required");
        hasError = true;
    }
   
    else {
        // document.getElementById('dateInfo').innerHTML = "";
        removeErrorElement(message);
        
    }

    if (hasError) {
        return;
    }


    // Method two

    const newContact = {
        name: name.value,
        email: email.value,
        option: option.value,
        message: message.value,
    };
            

    if (todoId){
        contacts[todoId] = newContact;
    } else {
        contacts.push(newContact);
    }

    form.reset();
    // displayTasks(contacts);

    let array = JSON.stringify(contacts);
    // task here is the name of the local storage
    localStorage.setItem('task', array);
});

// Changing the strings in the local storage into their normal form.
if(localStorage.getItem('task')){
    array = localStorage.getItem('task');
    contacts = JSON.parse(array);
}
// displayTasks(contacts);

// function displayTasks(contacts) {

    // To display our task, we first of all need to get the empty div inwhich all the tasks will be ddisplayed in
    
    // const todoListContainer = document.getElementById('contactList').innerHTML = '';
   // We display a message if the todos are empty
    // if (contacts.length === 0) {
    //     todoListContainer.innerHTML = '<p class = "fw-bold">IT IS EMPTY</p>'; 
    // }
    // else {
    //     for( let i =0; i < contacts.length; i++){
            // let html = 
//             let html = `
//         <div class="">
//         <p class="fw-bold ">Name: ${contacts[i].name}</p>
//         <p class="fw-bold">Email: ${contacts[i].email}</p>
//         <p class="fw-bold">Option: ${contacts[i].option}</p>
//         <p class="fw-bold">Message: ${contacts[i].message}</p>
//         </div>
//         <hr class="fw-bold m-0">
//         <hr class="fw-bold m-0">
//         <hr class="fw-bold m-0 my-3">
//          `;
//         document.getElementById("contactList").innerHTML += html;
//         }
        
//         // tasks.sort();
       
//     }
// }
    

// function deleteTask(i){
//     contacts.splice(i, 1);
    
//     localStorage.setItem('task', JSON.stringify(contacts));
//     displayTasks(contacts);
// }

// function editTask(i) {
//     const contact = contacts[i];
//     form.cName.value = contact.name;
//     form.cEmail.value = contact.email;
//     form.cOption.value = contact.option;
//     form.cMessage.value = contact.message;
//     form.todoId.value = i;
// }
function addErrorElement(inputElement,errorMeassage) {

   let errorEle = inputElement.parentElement.querySelector(".error");
   if (!errorEle) {
     errorEle = document.createElement("p");
     errorEle.setAttribute("class","error");
     inputElement.parentElement.appendChild(errorEle);
   }
   errorEle.textContent = errorMeassage;

}
// function removeErrorElement(inputElement) {
//     let errorEle = inputElement.parentElement.querySelector(".error");
//     if (errorEle) {
//         errorEle.remove();  
//     }
// }


