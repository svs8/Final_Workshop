
class Contact {
  
    get id() {
      return this._id;
    }
    set id(id) {
      this._id = id;
    }
  
    get name() {
      return this._name;  
    }
    set name(name) {
      let nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{3,}$");
      if (nameRegex.test(name)) {
        this._name = name;
      } else {
        throw "Name is Invalid!";
      }
    }
  
    get phone() {
      return this._phone;
    }
    set phone(phone) {
      let phoneRegex = RegExp("^[91]?[0-9]{8}");
      if (phoneRegex.test(phone)) {
        this._phone = phone;
      } else {
        throw "Phone Number is Invalid!";
      }   
    }
  
    get address() {
      return this._address;
    }
    set address(address) {
      let addressRegex = RegExp('^[a-zA-Z0-9#,&]{3,}$');
      if (addressRegex.test(address)) {
        this._address = address;
      } else {
        throw "Should have minimun 3 characters";
      }
    }
    
    get city() {
      return this._city;
    }
    set city(city) {
      this._city = city;
    }
    
    get state() {
      return this._state;
    }
    set state(state) {
      this._state = state;
    }
  
    get zip() {
      return this._zip;
    }
    set zip(zip) {
      let zipRegex = RegExp("^[0-9]{6}");
      if (zipRegex.test(zip)) {
        this._zip = zip;
      } else {
        throw "Invalid Zip Code!";
      }
    }
  
    toString(){
      return `id: ${this.id} \nName: ${this.name} \nPhone Number: ${this.phoneNumber} \nAddress: ${this.address} \nCity: ${this.city} \nState: ${this.state} \nZip:  ${this.zip}`;
  }
  
  }