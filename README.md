
# ToDo NodeJs REST api



## Installation

* To install all need NodeJs modules in my project:

```bash
    >>> npm install
```
    
* Then create .env and add **Environment Veriables**

* Run project localy by nodemon
```bash
    >>> npm run nodemon
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL` - external url to your PostgreSQL database

`JWT_SECRET` - Json Web Token secret word

`NODE_ENV` - Stage of API enviroment (production, testing, **local** - by default)



## API Reference

#### User authentication
```http
  POST /signup
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

```http
  POST /signin
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

##

#### Get all workspaces

```http
  GET /api/workspaces
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

#### Get single workspace

```http
  GET /api/workspace/:id
```
#### Create workspace

```http
  POST /api/workspace
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of workspace |

#### Update workspace

```http
  PUT /api/workspace
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of workspace |

#### Delete workspace

```http
  DELETE /api/workspace/:id
```

##

#### Get all members of workspace

```http
  GET /api/workspace/:workspaceId/members
```

#### Get single member of workspace

```http
  GET /api/workspace/:workspaceId/member/:memberId
```
#### Add member to workspace

```http
  POST /api/workspace/:workspaceId/member
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id of user |

#### Update workspace

```http
  PUT /api/workspace
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of workspace |

#### Remove member from workspace

```http
  DELETE /api/workspace/:workspaceId/member/:id
```

##

#### Get all dashboards in workspace

```http
  GET /api/workspace/:workspaceId/dashboards
```
#### Get single dashboard in workspace

```http
  GET /api/workspace/:workspaceId/dashboard/:dashboardId
```

#### Create dashboard

```http
  POST /api/workspace/:workspaceId/dashboard
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of dashboard |

#### Update dashboard

```http
  PUT /api/workspace/:workspaceId/dashboard/:id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of dashboard |


#### Delete dashboard

```http
  DELETE /api/workspace/:workspaceId/dashboard/:id
```


##


#### Get all tasks

```http
  GET /api/workspace/:workspaceId/dashboard/dashboardId/tasks
```

#### Get single task

```http
  GET /api/workspace/:workspaceId/dashboard/dashboardId/task/taskId
```

#### Create task

```http
  POST /api/workspace/:workspaceId/dashboard/dashboardId/task
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of task |

#### Update task

```http
  PUT /api/workspace/:workspaceId/dashboard/dashboardId/task/taskId
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of task |



#### Delete task

```http
  DELETE /api/workspace/:workspaceId/dashboard/dashboardId/task/taskId
```



