import { Client, Account, Databases } from 'appwrite'

const client = new Client()
  .setEndpoint("http://localhost/v1")
  .setProject("634c7b29cb8408907c9c")
export const account = new Account(client)

//Database
export const databases = new Databases(client, "634c7bb14d98185a11a9")
