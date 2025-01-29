# Branch Service API

This project is a REST API that allows interaction with branch (branches) data in a relational database. It was built using **Node.js**, **Express**, and **Sequelize** to connect to a relational database (like MySQL or PostgreSQL).

## Available Endpoints

### Get Branch by ID

**Endpoint:** `GET /api/branches/:id_branch`  
This endpoint retrieves detailed information about a specific branch based on its ID.

#### Route Parameters
- `id_branch` (required): The unique identifier of the branch to retrieve.

#### Responses

1. **200 OK**  
   If the branch with the specified ID is found, the server responds with a JSON object containing the branch data:
   ```json
   {
     "id_branch": 1,
     "province": "Pichincha",
     "city": "Quito",
     "canton": "Metropolitano",
     "street": "Av. Amazonas y Naciones Unidas"
   }
```

2. **404 Not Found**
If no branch exists with the provided ID, the response will be:

 ```json
{
  "message": "Branch not found"
}

```

3. **500 Internal Server Error**
If an unexpected server error occurs, the response will be:
```json
{
  "message": "Server error"
}
```