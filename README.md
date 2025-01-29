# 🏢 Branch Service API

A robust REST API for managing branch location data, powered by modern technologies:

- 🚀 **Node.js** - Runtime environment
- ⚡ **Express** - Web framework
- 🗄️ **Sequelize** - ORM for database interactions

## 📚 API Reference

### Get Branch Details

```http
GET /api/branches/:id_branch
```

Retrieves comprehensive information about a specific branch location.

#### Parameters

**id_branch** (number)
- Required
- Unique identifier for the branch

#### Response Examples

##### ✅ Successful Response - `200 OK`

```json
{
    "id_branch": 1,
    "province": "Pichincha",
    "city": "Quito",
    "canton": "Metropolitano",
    "street": "Av. Amazonas y Naciones Unidas"
}
```

##### ❌ Branch Not Found - `404 Not Found`

```json
{
    "message": "Branch not found"
}
```

##### ⚠️ Server Error - `500 Internal Server Error`

```json
{
    "message": "Server error"
}
```

### Response Codes

**200 - OK**
- Successfully retrieved branch data

**404 - Not Found**
- Branch not found with the provided ID

**500 - Internal Server Error**
- Unexpected server error occurred

---

📝 **Note**: Ensure proper error handling when integrating with this API.
