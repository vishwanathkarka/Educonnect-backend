
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


## API Reference - base link

#### Login to route

```http
  POST /api/login
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## API Reference - base link

#### Login to route

```http
  POST /api/v1/login
```

#### Signup

```http
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







#### Logout

```http
  GET /api/v1/Logout
```


#### Get Admin

```http
  GET /api/v1/getadmins
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Boolean` | **Required**. To valiate the user login with JSON WEBTOKEN |

To Get all the Admin List

#### Get Users

```http
  GET /api/v1/getadmins
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Boolean` | **Required**. To valiate the user login with JSON WEBTOKEN |

To Get all the User List

#### Update Role By Admin

```http
  PUT /api/v1/updaterole
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isLogined`      | `Boolean` | **Required**. To validate the user login with JSON WEBTOKEN |
| `isAdmin`      | `Boolean` | **Required**. To validate is Admin or Not |
| `Email`      | `Email` | **Required**. Email id to identeify the user |
| `Role`      | `String` | **Required**. To update to specific role |





