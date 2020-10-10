class Model {
    constructor() {
        this.data = {};
    }

    getFirstName() {
        return this.data.FirstName;
    }

    setFirstName(FirstName) {
        this.data.FirstName = FirstName;
    }

    getEmail() {
        return this.data.Email;
    }

    setEmail(Email) {
        this.data.Email = Email;
    }

    getPassword() {
        return this.data.password;
    }

    setPassword(password) {
        this.data.password = password;
    }

    getLastName() {
        return this.data.LastName;
    }

    setLastName(LastName) {
        this.data.LastName = LastName;
    }

    getMobile() {
        return this.data.Mobile;
    }

    setMobile(Mobile) {
        this.data.Mobile = Mobile;
    }

    getDOB() {
        return this.data.DOB;
    }

    setDOB(DOB) {
        this.data.DOB = DOB;
    }

    getGender() {
        return this.data.Gender;
    }

    setGender(Gender) {
        this.data.Gender = Gender;
    }

    toJson() {
        return {
            "FirstName": this.data.FirstName,
            "Email": this.data.Email,
            "LastName": this.data.LastName,
            "Mobile": this.data.Mobile,
            "DOB": this.data.DOB,
            "Gender": this.data.Gender
        };
    }

    toLoginJson() {
        return {
            "FirstName": this.data.FirstName,
            "Email": this.data.Email,
            "LastName": this.data.LastName,
            "Mobile": this.data.Mobile,
            "DOB": this.data.DOB,
            "Gender": this.data.Gender,
        }

    }
}
module.exports.Model = Model;