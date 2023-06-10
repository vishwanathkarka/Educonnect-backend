
# School managment project - A fullstack project 

Designed & developed a fullstack javascript web application that streamlines administrative tasks, facilitates communication, and provides real-time insights for students, parents, lecturers, and administrators in educational institutions. . Technologies/Tools (Javascript,NextJS,NodeJs, Mongodb )



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


#### add(num1, num2)

Takes two numbers and returns the sum.

