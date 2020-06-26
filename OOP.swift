class hello {
    var firstName: String!
    var lastName: String!
    var email: String!
    var password: String!
    var address: String!
    var age: Int!
    var gender: String!
    
    init(firstName: String!, lastName: String!, email: String!, password: String!) {
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.password = password
    }
    
    init(address: String!, age: Int!, gender: String!){
        self.address = address
        self.age = age
        self.gender = gender
    }
    
    func signIn() {
        print("Hello \(firstName!)! you are logged in successfully")
    }
    
    func signOut() {
        print("Hello \(firstName!)! you are logged out successfully")
    }
    
}

var user1: hello = hello(firstName: "Khalid", lastName: "Nashat", email: "khalid.nashaat@gmail.com", password: "1234")
user1.signIn()
user1.signOut()

var user2: hello = hello(firstName: "Zein", lastName: "Khalid", email: "knashat@gmail.com", password: "1234")
user2.signIn()
user2.signOut()
