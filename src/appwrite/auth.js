import conf from '../conf/conf.js';
import {Client,Account,ID} from 'appwrite';


export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
       
        .setProject('67389db5002aa4b02d14');
        this.account =new Account(this.client);
        
            } 
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
if(userAccount)
    {
        console.log("account creted vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
    return this.login({email,password});

}else{
    return userAccount;
}
        }
        catch(error){throw error;}
    }
 

    
    
    async login({email,password}){
        try{
            console.log(email , password)
        const a = await this.account.createEmailPasswordSession(email,password);
        console.log("created",a);
       return a;
        }catch(error){
            throw error;
        }
    }
// async getCurrentUser(){
//     try{
       
// return await this.account.get().then((res)=>console.log(res));
//     }catch(error){
//         console.log("Appwrite service :: getCurrentUser :: error",error);
//     } 
//     return null;
// }
async getCurrentUser() {
    try {
        const user = await this.account.get();
    if(user)
       console.log('User is logged in:', user);
        return user; // Return the user object if logged in
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
        return null; // Return null if user is not logged in
    }
}

// async isLoggedIn() {
//     try {
//         const user = await this.getCurrentUser();
//         return user !== null; // If user is not null, then they are logged in
//     } catch (error) {
//         console.log("Appwrite service :: isLoggedIn :: error", error);
//         return false;
//     }
// }
async handleLogin(email, password) {
    try {
        // Create a session (log the user in)
       const session = await authService.login({ email, password });
       //const session = await authService.login({ 'purpleflower@gmail.com' , '12345678'});
        console.log('User logged in successfully:', session);
        // Now, you can call getCurrentUser to check the user details
        const user = await authService.getCurrentUser();
        console.log('Authenticated user:', user);
    } catch (error) {
        console.log('Login failed:', error);
        // Show an error message or prompt the user to retry
    }
}


async logout(){
    try{
        await this.account.deleteSessions();

    }catch(error)
    {
console.log("Appwrite service :: logout :: error",error);
    }
}
}


const authService = new AuthService();
export default authService;