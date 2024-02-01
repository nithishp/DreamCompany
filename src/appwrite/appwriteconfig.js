import { Client, Account, Databases } from "appwrite";

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65bb019ba8e1c1cc1a44');
export const account = new Account(client);
export const database = new Databases(client,"65bb01fbf29418d85d67");