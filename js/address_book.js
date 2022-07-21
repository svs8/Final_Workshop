window.addEventListener("DOMContentLoaded", (event) => {
  validateName();
  validatePhoneNumber();
  validateAddress();
  validateZipcode();
});
const validateName = () => {
        const name = document.querySelector('#name');
        const textError = document.querySelector('.text-error');
        name.addEventListener('input', function() {
          if (name.value.length == 0) {
            textError.textContent="";
            return;
          }
          try {
            (new Contact()).name = name.value;;
            textError.textContent="";
          } catch (e) {
            textError.textContent=e;
          }
        });
  };

  const validatePhoneNumber = () => {
    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function() {
      if (phone.value.length == 0) {
        phoneError.textContent="";
        return;
      }
      try {
        (new Contact()).phone = phone.value;;
        phoneError.textContent="";
      } catch (e) {
        phoneError.textContent=e;
      }
    });
  };

  const validateAddress = () => {
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener("input", function () {
      if (address.value.length == 0) {
        addressError.textContent="";
        return;
      }
      try {
        (new Contact()).address = address.value;
        addressError.textContent="";
      } catch (e) {
        addressError.textContent=e;
      }
    });
  };

  const validateZipcode = () => {
    const zip = document.querySelector("#zip");
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener("input", function() {
      if (zip.value.length == 0) {
        zipError.textContent="";
        return;
      }
      try {
        (new Contact()).zip = zip.value;
        zipError.textContent="";
      } catch (e) {
        zipError.textContent=e;
      }
    });
  };


  const save = () => {
    try {
      let contact = createContact();
      createAndUpdateStorage(contact);
    } catch (error) {
      alert(error);
    }
  };
  
  const createAndUpdateStorage = (contact) => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if (contactList != undefined) {
      contactList.push(contact);
    } else {
      contactList = [contact];
    }
    alert(contact.toString());
    alert("Contact Added Sucessfully");
    localStorage.setItem("ContactList", JSON.stringify(contactList));
  }
  
  const createContact = () => {
    let contact = new Contact();
    contact.id = new Date().getTime();
  
    try {
      contact.name = getInputValueById("#name");
    } catch (error) {
      setTextValue(".name-error", error);
      throw error;
    }
  
    try {
      contact.phone = getInputValueById("#phone");
    } catch (error) {
      setTextValue(".phone-error", error);
      throw error;
    }
  
    try {
      contact.address = getInputValueById("#address");
    } catch (error) {
      setTextValue(".address-error", error);
      throw error;
    }
  
    let city = getInputValueById("#city");
    if (city != "Select City") {
      contact.city = city;
    } else {
      throw "Please select city";
    }
  
    let state = getInputValueById("#state");
    if (state != "Select State") {
      contact.state = state;
    } else {
      throw "Please select state";
    }
  
    try {
      contact.zip = getInputValueById("#zip");
    } catch (error) {
      setTextValue(".zip-error", error);
      throw error;
    }
  
    alert(contact.toString());
    return contact;
  }
  
  const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
  };
  
  const getInputValueById = (property) => {
    let value = document.querySelector(property).value;
    return value;
  };
  
  
