class Reservations{
    constructor(name,phonenumber,email,id){
        this.name = name;
        this.phonenumber = phonenumber;
        this.email = email;
        this.id = id;
    }

    returnName(){
        return this.name;
    }

    returnPhoneNumber(){
        return this.phonenumber;
    }

    returnEmail(){
        return this.email;
    }

    returnID(){
        return this.id;
    }

    // printInfo(){
    //     console.log(`${this.name}`);
    //     console.log(`${this.phonenumber}`);
    //     console.log(`${this.email}`);
    //     console.log(`${this.id}`);
    // }
}

//const customerRES = new Reservations("name",1112223333,"name@email",10)

//customerRES.printInfo()