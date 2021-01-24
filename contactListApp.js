var inputs = document.getElementsByTagName("input");
var submitButton = document.getElementById("btn");
var errorsList = document.getElementById("errors");
var errorExists = false;
var parent = document.getElementById("error-messages");
var contactList = new ContactList();

submitButton.addEventListener("click",function(e){
        e.preventDefault();
        if(flag === "insert"){
            parent.textContent = '';
            if(inputs[0].value === "")
            {
                errors('Name is required.');
                errorExists = true;
            }
            if(inputs[1].value === "" || !validateEmail(inputs[1].value))
            {
                errors('Email is not valid.');
                errorExists = true;
            }
            if(inputs[2].value === "" || !validatePhone(inputs[2].value))
            {
                errors('Phone must be 11 numbers');
                errorExists = true;
            }
            if(errorExists){
                errorsList.style.display = 'block';
                errorsList.style.color = "white";
                errorsList.style.fontSize = "larger";
            }
            contactListApp(1);
    }
    else
    {
        contactList.editContact();
    }
});


function contactListApp(num)
{
    var contact = new Contact(inputs[0].value,inputs[1].value,inputs[2].value);
    if(num === 1 && !errorExists){
            contactList.addContact(contact);
        }
}
function clearNodes()
{
    for(let i = 0;i < inputs.length-1;++i)
    {
        inputs[i].value = '';
    }
}
function errors(errorMsg)
{
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(errorMsg));
    parent.appendChild(list);
}

function validateEmail(email)
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validatePhone(phone)
{
    return phone.length === 11;
}
