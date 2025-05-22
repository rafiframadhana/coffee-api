# Coffee API Documentation

## Overview
This API provides access to a collection of coffee products, allowing clients to retrieve information about various coffee offerings.

## Important
Take the coffee data from data/product.js if you dont have your MongoDB database set up

## Endpoints

### Get All Coffee Products
- **URL:** `/api/coffee`
- **Method:** `GET`
- **Description:** Retrieves a list of all available coffee products

##### Response Example
```json
[
  {
    "id": 1,
    "name": "Coffee Aceh Gayo",
    "src": "https://i.imgur.com/QGLPytn.jpeg",
    "contain": "Gayo Arabica Beans | Hot Water",
    "price": 14999,
    "description": "A rich and bold coffee made from Gayo Arabica beans, known for its smooth taste, low acidity, and deep, earthy aroma. The slow roasting process enhances its unique flavor, making it a top choice for coffee connoisseurs seeking a full-bodied experience."
  },
  {
    "id": 2,
    "name": "Flat White",
    "src": "https://i.imgur.com/JlzDB2r.png",
    "contain": "Espresso | Steamed Milk | Microfoam",
    "price": 24000,
    "description": "A velvety smooth blend of espresso and steamed milk, topped with microfoam for a rich texture. This Australian favorite delivers a balanced coffee-to-milk ratio, offering a silky, creamy mouthfeel with a strong espresso taste in every sip."
  }
]
```

### Get Single Coffee Product by ID
- **URL:** `/api/coffee/:id`
- **Method:** `GET`
- **Description:** Retrieves details of coffee products by ID

##### Response Example for `/api/coffee/2`
```json
  {
    "id": 2,
    "name": "Flat White",
    "src": "https://i.imgur.com/JlzDB2r.png",
    "contain": "Espresso | Steamed Milk | Microfoam",
    "price": 24000,
    "description": "A velvety smooth blend of espresso and steamed milk, topped with microfoam for a rich texture. This Australian favorite delivers a balanced coffee-to-milk ratio, offering a silky, creamy mouthfeel with a strong espresso taste in every sip."
  }
```

### POST a Coffee Product
- **URL:** `/api/coffee`
- **Method:** `POST`

### Update / Edit Single Coffee Product by ID
- **URL:** `/api/coffee/:id`
- **Method:** `PATCH`

### Delete Single Coffee Product by ID
- **URL:** `/api/coffee/:id`
- **Method:** `DELETE`


## Product Object Properties
| Property | Type | Description |
|----------|------|-------------|
| `id` | Number | Unique identifier for the coffee product |
| `item` | String | Name of the coffee product |
| `src` | String | URL of the product image |
| `contain` | String | Ingredients or composition of the coffee |
| `price` | Number | Price of the coffee product in local currency |
| `description` | String | Detailed description of the coffee product |

## Server Configuration
- **Framework:** Express.js
- **Port:** Configurable via environment variable (default: 5000)
- **CORS:** Enabled with wildcard origin
- **Allowed Methods:** GET, POST, PATCH, DELETE

## Setup and Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and set the `PORT` and `MONGO_URI` for connecting to the MongoDB Database if needed if needed
4. Run the server:
   ```bash
   npm run dev
   ```

## Deployment
Currently i found `railway.com` is stable for Express app deployment with a limited features.
