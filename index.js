document.getElementById('simpanData').addEventListener('click',function(event){
    event.preventDefault();

    const name = document.getElementsByName('name')[0].value;
    const address = document.getElementsByName('address')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    const company = document.getElementsByName('company')[0].value;

    axios.post('http://localhost:3000/contacts-todos',{
    name,
    address,
    email,
    phone,
    company
    })
})
    const hapus = id => {
        axios.delete(`http://localhost:3000/contacts/${id}`)
    }
    
    const ubah = id => {
        const contact = data.find(item => {
            return item.id === id
        })
        
        if (contact){
            const name = window.prompt('Name', contact.name);
            const address = window.prompt('Address', contact.address);
            const email = window.prompt('Email', contact.email);
            const phone = window.prompt('Phone', contact.phone);
            const company = window.prompt('Company', contact.company);
            axios.put(`http://localhost:3000/contacts/${id}`,{
                name,
                address,
                email,
                phone,
                company
            });
        }
    }
