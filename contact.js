class Contact{
    static count = 0;
    constructor(name,email,phone)
    {
        this.id = Contact.count++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getId()
    {
        return this.id;
    }
    setContactName(name)
    {
        this.name = name;
    }
    setContactEmail(email)
    {
        this.email = email;
    }
    setContactPhone(phone)
    {
        this.phone = phone;
    }
    contactName()
    {
        const nameArr  = this.name.split(' ');
        //console.log(nameArr[0].charAt(0));
        var showedName = nameArr[0].charAt(0).toUpperCase()+'.';
        for(let i = 1;i < nameArr.length;++i){
            showedName += nameArr[i];
        }
        return showedName;
    }
    getEmail()
    {
        return this.email;
    }
    getPhone()
    {
        return this.phone;
    }
}
// Object.defineProperty(Contact.prototype, "id", { 
//     get: function(){return id},
//     set: function(){id = id++},
//     //writable: false
// });

 