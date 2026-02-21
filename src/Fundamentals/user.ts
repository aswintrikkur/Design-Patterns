console.log("Runnig File - user.ts");

type Address = {
    houseName: string;
    district: string;
    state: string;
    country: string;
};

interface UserInterface {
    name: string;
    age?: number;
    education?: string;
    job?: string;
    address?: Address;
}
 
export class User {
    constructor(name: string) {
        this.name = name;
    }

    // User properties
    name: string;
    isAlive: boolean = true;
    private age: number | undefined;
    education: string | undefined;
    job: string | undefined;
    address: Address | undefined;

    // Methods to add user details
    addAge(age: number) {
        this.age = age;
    }
    addEducation(education: string) {
        this.education = education;
    }
    addJob(job: string) {
        this.job = job;
    }
    addAddress(address: Address) {
        this.address = address;
    }

    // Method to display user details
    displayDetails() {
        console.log("User Details:");
        console.log(this)
    }
}


