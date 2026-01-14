// ================ Factory Method Pattern Example ============== //


// ---------------Product Interface ----------------
class User {
    getRole() {
        throw new Error("This method should be overridden!");
    }

}

// ---------------------- Concrete Products -----------------
class AdminUser extends User {
    getRole() {
        return "Admin User";
    }
}

class StudentUser extends User {
    getRole() {
        return "Student User";
    }
}



// ---------------------- Creator -----------------
class UserFactory {
    static createUser(type) {
        switch (type) {
            case "admin":
                return new AdminUser();
            case "student":
                return new StudentUser();
            default:
                throw new Error("Unknown user type");
        }
    }
}

// ---------------------- Client Code -----------------
function clientCode() {
    const admin1= UserFactory.createUser("admin");
    console.log(admin1.getRole()); // Output: Admin User

    const student1 = UserFactory.createUser("student");
    console.log(student1.getRole()); // Output: Student User
}

clientCode();