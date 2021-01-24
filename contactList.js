var tablebody = document.getElementById("data");
var varId;
var flag = 'insert';
class ContactList{    
    constructor()
    {
       this.contacts = [];
    }
    addContact(contact)
    {
        this.contacts.push(contact);
        addNewRecord(contact);
    } 
    removeContact(id)
    {
             console.log(id);
             var tr = document.getElementById(`${id}`);
             document.getElementById("data").removeChild(tr);
             this.contacts.splice(id, 1);

    }
    editContact()
    {
        let inputs = document.getElementsByTagName("input");

        let tr = document.getElementById(`${varId}`).childNodes;
        tr.textContent = '';
        this.contacts[varId].setContactName(inputs[0].value);
        this.contacts[varId].setContactEmail(inputs[1].value);
        this.contacts[varId].setContactPhone(inputs[2].value);

        tr[0].textContent = this.contacts[varId].contactName();
        tr[1].textContent = inputs[1].value;
        tr[2].textContent = inputs[2].value;
        
        flag = "insert";   
    }

    getContact(id)
    {
        for(let i = 0;i < this.contacts.length;++i)
        {
            if(this.contacts[i].getId === id)
            {

            }
        }
    }
    getAllContacts()
    {
        for(let i = 0;i < this.contacts.length;++i)
        {
            if(this.contacts[i].getId == id)
            {
                
            }
        }
    }
}
function addNewRecord(contact)
{
        var newRecord = document.createElement("tr");
        newRecord.setAttribute("id",`${contact.getId()}`);

        tablebody.appendChild(newRecord);
        var td1 = document.createElement("td");   // name
        newRecord.appendChild(td1);
        var td2 = document.createElement("td"); //email
        newRecord.appendChild(td2);
        var td3 = document.createElement("td"); //phone
        newRecord.appendChild(td3);
        var td4 = document.createElement("td");  // action
        newRecord.appendChild(td4);

        var t = document.createTextNode(contact.contactName());
        td1.appendChild(t);
        t = document.createTextNode(contact.getEmail());
        td2.appendChild(t);
        t = document.createTextNode(contact.getPhone());
        td3.appendChild(t);

        var editButton = document.createElement('button');
        editButton.innerHTML = '<img src="pen.jpg" />';
        editButton.setAttribute("class","action-button");
        editButton.addEventListener("click",function(e){
            console.log(newRecord.id);
            varId = newRecord.id;
            getUpdatedData(newRecord.id);
         });

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<img src="delete.jpg" />';
        deleteButton.setAttribute("class","action-button");

        deleteButton.addEventListener("click",function(e){
            let result = confirm("Are you sure you want to delete this contact ?");
            if (result) {            
                contactList.removeContact(newRecord.id);
            }
        });
        
        td4.appendChild(editButton);
        td4.appendChild(deleteButton);
}

function getUpdatedData(id)
{
    flag = "edit";
    var inputs = document.getElementsByTagName("input");
    var tr = document.getElementById(`${id}`).childNodes;
    
    //console.log(tr.length);
    for(let i = 0;i < inputs.length-1;++i)
            inputs[i].value = '';

    inputs[0].value = tr[0].textContent;
    inputs[1].value = tr[1].textContent;
    inputs[2].value = tr[2].textContent;

}
