
# Educonnect - A fullstack project [Live Link](https://educonnect.vishwanathkarka.com) 

Frontend [Link](https://github.com/vishwanathkarka/Educonnect-backend) : Developed a comprehensive educational platform using Next.js. & Backend [Link](https://github.com/vishwanathkarka/Educonnect-frontend) : Utilized Node.js for the backend and
MongoDB for the database, Integrated Stripe payment Gateway API for payment processing.
Implemented role-based access control for students, parents, lecturers, and admins, Provided features such as Login, Signup, Attendance
tracking, Payment management, Permission handling, Timetable, Exam arrangements, Homework, and Exam results.

| TYPE | LIVE LINK    |
| :-------- | :------- |
| LIVE LINK | [LINK](https://educonnect.vishwanathkarka.com) |
| Backend Github Link | [GitHub](https://github.com/vishwanathkarka/Educonnect-backend) |
| Fronted Github Link | [GitHub](https://github.com/vishwanathkarka/Educonnect-frontend) |


# API Reference - base link
## User Routes
#### Login to route

```https
  POST /api/login
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

### Get item

```https
  GET /api/items/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


Takes two numbers and returns the sum.


### Login to route

```https
  POST /api/v1/login
```

### Signup

```https
  GET /api/v1/signup
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**. Id of item to fetch |
| `lastName`      | `string` | **Required**. Id of item to fetch |
| `Email`      | `Email` | Email of the user |
| `parentEmail`      | `Email` | **Required**. For the sudent role signup |
| `studentEmail`      | `Email` | **Required**. For the Parent role signup |
| ` departments`      | `Array` | **This will activate for only student**. |
| ` sections`      | `Array` | Section in the department selected.  |
| ` Role`      | `Array` | selcting the role for the parent& student.  |
| ` Student_id`      | `ID` | Id is grabed from the student email by sending request for ID |
| ` Photo-secure_url`      | `URL` | **Automatically taken** Photo link |
| ` Photo-Id`      | `ID` | To delete the image |



### Logout

```https
  GET /api/v1/Logout
```


### Get Admin

```https
  GET /api/v1/getadmins
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |

To Get all the Admin List

### Get Users

```https
  GET /api/v1/getadmins
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |

To Get all the User List

### View Role users By Admin

```https
  POST /api/v1/updaterole
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `Validation` | **Required**. To validate is Admin or Not |
| `Role`      | `String` | **Required**. To get all the User with the role |

Used to get specific role users

### View All Role User By Admin

```https
  POST /api/v1/getallroles
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `Validation` | **Required**. To validate is Admin or Not |

Used to all the user 

### Adding the department to the lecturer role by Admin

```https
  PUT /api/v1/adddepartmentforuser/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `Validation` | **Required**. To validate is Admin or Not |
| `Department`      | `Array` | **Required**.  |
| `Section`      | `Array` | **Required**.  |


### Get Users for Attendance by lecturer

```https
  POST /api/v1/getalluserforattendance
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `Validation` | **Required**. To validate is Admin or Not |
| `Department`      | `String` | **Required**.  |
| `Section`      | `String` | **Required**.  |



### Add the section for the Lecturer by Admin

```https
  PUT /api/v1/addsectionindepartment/:id/:department
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `validation` | **Required**. To validate is Admin or Not |
| `id`      | `String` | **Required**. To Find the User|
| `department`      | `String` | **Required**.  to find the Department to add the section in the Department Array |


### Get User By ID

```https
  GET /api/v1/getuserinfowithid/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Boolean` | **Required**. To validate the user login with JSON WEBTOKEN |
| `id`      | `ID` | **Required**. To Find the User|

### Get The Users Based On The Department , Section , Role

```https
  GET /api/v1/getusersforadmin/:department/:section/:role
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `Validation` | **Required**. To validate is Admin or Not |
| `department`      | `ID` | **Required**.  to find the Department |
| `section`      | `ID` | **Required**.  to find the Section users  |
| `role`      | `ID` | **Required**.  to find the role users  |


### Update The User By Admin

```https
  GET /api/v1/updateuserdata/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Boolean` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `Boolean` | **Required**. To validate is Admin or Not |
| `id`      | `ID` | **Required**. To Find the User|
| `Body Data`      | `String` | **Required**. Data to update user Information|

## TimeTable Routes

### Get Time Table 

```https
  GET /api/v1/gettimetable/:department/:section
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `department`      | `ID` | **Required**. To Get the Department Timetable |
| `section`      | `ID` | **Required**. To Get Section Timetable |

### Add Time Table 

```https
  GET /api/v1/addtimetable
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Lecturer Id `      | `ID` | **Required**. To add the Lecturer ID|
| `isLecturer`      | `Validation` | **Required**. To validate is Admin or Not |
| `department`      | `ID` | **Required**.  |
| `section`      | `ID` | **Required**. |
| `Monday`      | `Boolean` | **Required**. |
| `Tursday`      | `Boolean` | **Required**. |
| `friday`      | `Boolean` | **Required**. |
| `Saturday`      | `Boolean` | **Required**. |
| `Subject Name`      | `String` | **Required**. |
| `Period`      | `Number` | **Required**. |


### Get Lecturer TimeTable

```https
  GET /api/v1/getlecturetable
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Lecturer Id `      | `ID` | **Required**. To add the Lecturer ID|
| `isLecturer`      | `Validation` | **Required**. To validate is a Lecturer or Not |


## Sitting Arrangement Route

### Add Sitting Arrangement

```https
  POST /api/v1/addSittingArrangement
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `Lecturer Id`      | `ID` | **Required**. To add in the sitting arrangement request |
| `User Id`      | `ID` | **Required**. Adding Sitting arrangement for the user  |
| `Room No`      | `Number` | **Required**.  |
| `Row No`      | `Number` | **Required**.  |
| `Col No`      | `Number` | **Required**.  |
| `NoOfRow`      | `Number` | **Required**.  |
| `NoOfCol`      | `Number` | **Required**.  |
| `Exam Date`      | `Date` | **Required**.  |
| `Exam Name`      | `String` | **Required**.  |


### Find a Sitting Arrangement
```https
  POST /api/v1/findsittingarragement/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEBTOKEN |
| `Lecturer Id`      | `ID` | **Required**. To add in the sitting arrangement request |
| ` UserID`      | `ID` | **Required**. To Find the User Sitting plain |

### View Sitting arrangement Added by Lecturer

```https
  GET /api/v1/findsittingarragement/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Validation` | **Required**. To validate the user login with JSON WEB TOKEN |
| `Lecturer Id`      | `ID` | **Required**. To add in the sitting arrangement request |



## Section Route

### Add Section

```https
  POST /api/v1/addsection
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Section`      | `String` | **Required**.  |


## Get Sections

```https
  GET /api/v1/listsection
```


