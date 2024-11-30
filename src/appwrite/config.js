import conf from '../conf/conf.js';
import {Client,ID,Databases,Storage,Query} from "appwrite";
 
export class Service{
client = new Client();
databases;
bucket;
constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.databases= new Databases(this.client);
    this.bucket = new Storage(this.client);
}



async createPost({ title, slug, content, featuredimage, status, userid }) {
    console.log("featuredimage:", featuredimage);
    try {
        const uniqueSlug = `${slug || title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;

        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            uniqueSlug, // Use the unique slug as the ID
            {
                title,
                slug: uniqueSlug, // Store the slug in the document
                content,
                featuredimage,
                status,
                userid,
            }
        );
    } catch (error) {
        console.error("Appwrite service :: createPost :: Error:", error.message || error);
        throw new Error("Failed to create the post. Please check the console for details.");
    }
}





// 
async updatePost(slug, { title, content, featuredimage, status, userId }) {
    try {
        // Log input parameters
        console.log("Updating Post with ID:", slug);
        console.log("Input Data:", { title, content, featuredimage, status, userId });

        // If featuredimage is null or undefined, do not include it in the update payload
        const updateData = {
            title,
            content,
            status,
            userId,
            ...(featuredimage ? { featuredimage } : {}), // Only include featuredimage if it exists
        };

        console.log("Payload being sent:", updateData);

        // Perform the update operation
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            updateData
        );
    } catch (error) {
        // Log and rethrow error for debugging
        console.error("Appwrite service :: updatePost :: Error:", error.message || error);
        throw new Error("Failed to update the post. Please check the console for details.");
    }
}

async deletePost(slug){
try{
await this.databases.deleteDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionId,
    slug
)
return true
}catch(error){
    console.log("Appwrite service :: deletePost :: error",error);
    return false
}
}
async getPost(slug){
    try{
return await this.databases.getDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionId,
    slug
)
    } 
    catch(error){
        console.log("Appwrite service :: getPost :: error",error);
return false
    }
}
async getPosts( queries =[Query.equal("status","active")]){
    try{
return await this.databases.listDocuments(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionId,
    queries,
)

    }
    catch(error){
        console.log("Appwrite service :: getPost :: error",error);
        return false;
    }
}
async uploadFile(file){
    try{
return await this.bucket.createFile(
    conf.appwriteBucketId,
    ID.unique(),
    file 
)
    }catch(error){
        console.log("Appwrite service :: getPost :: error",error);
        return false;  
    }

}
async deleteFile(fileId){
    console.log(fileId);
    try{
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
return true
    }catch(error){
        console.log("Appwrite service :: getPost :: error",error);
        return false;
     
    }
}
getFilePreview(fileid){
    console.log("ty pe", typeof(fileid))
    console.log("fileid",fileid)
    try{
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileid
    )
}
catch(err){
    console.log("error in gey " , err)
}
}







}

const service = new Service();
export default service