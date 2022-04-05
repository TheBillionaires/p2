# Travel Management System

## Angular, Node, and MySQL

1. Navigate to backend/config/config.json and change the password to your MySQL password.

```json
{
  "host": "localhost",
  "user": "root",
  "database": "posts",
  "password": "< password >"
}
```

Note: For development purposes the host is localhost but this will need to be updated if you decide to deploy the application. By Default, MySQL gives the user 'root' with all privileges. You can simply change this to another user if desired. In this application we named our database 'posts', however, if you went with a different name this will need to be changed.

2. cd backend
3. \$ npm start
4. cd ../frontend
5. \$ npm start

# MySQL Table
![usersTable](https://user-images.githubusercontent.com/102680541/161402943-3581d00b-0fde-4fc3-9c89-f0940a5a11b0.jpg)