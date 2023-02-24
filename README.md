# Brain Agriculture API
### API REST to manage farms database of brain agriculture web app

This is a test from brain-ag [repo](https://github.com/brain-ag/trabalhe-conosco).
To see full requirements of the API, check Requirements.md


## Tech Stack
Node.Js
Express.js
PostgreSQL

## API Endpoints (Farms)

#### Manage Farms database
GET /farms
GET /farms/:id
POST /farms
PUT /farms/:id
DELETE /farms/:id

#### Get Graphs and Farm Stats
GET /farms-total
GET /graph-state
GET /graph-culture
GET /graph-solo

### The Farm Object
id:auto-generated integer
document:string
productor_name:string
farm_name:string
state:string
city:string
total_area:integer
area_agriculture:integer
area_vegetation:integer
cultures:[string]

### Example JSON
```javascript
{
    "id": 20,
    "document": "11.510.223/0001-15",
    "productor_name": "Ronaldo Fenomeno",
    "farm_name": "Fazenda Três",
    "state": "São Paulo",
    "city": "Itu",
    "total_area": 100,
    "area_agriculture": 80,
    "area_vegetation": 20,
    "cultures": [
        "Soja",
        "Cana"
    ]
}
```
