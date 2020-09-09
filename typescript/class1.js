var StudentsDetails = /** @class */ (function () {
    function StudentsDetails() {
    }
    StudentsDetails.prototype.getDetails = function () {
        console.log(this.firstname + " " + this.lastname + " " + this.age);
    };
    return StudentsDetails;
}());
var obj1 = new StudentsDetails();
obj1.firstname = "hemant";
obj1.lastname = "kumar";
obj1.age = 30;
obj1.getDetails();
//objstudent.getFirstname();
