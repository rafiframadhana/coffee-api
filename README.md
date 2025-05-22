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

#### Response
- **Status Code:** 200 OK
- **Content Type:** `application/json`

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

## Product Object Properties
| Property | Type | Description |
|----------|------|-------------|
| `id` | Number | Unique identifier for the coffee product |
| `name` | String | Name of the coffee product |
| `src` | String | URL of the product image |
| `contain` | String | Ingredients or composition of the coffee |
| `price` | Number | Price of the coffee product in local currency |
| `description` | String | Detailed description of the coffee product |

## Server Configuration
- **Framework:** Express.js
- **Port:** Configurable via environment variable (default: 5000)
- **CORS:** Enabled with wildcard origin
- **Allowed Methods:** GET

## Setup and Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install express cors dotenv
   ```
3. Create a `.env` file and set the `PORT` if needed
4. Run the server:
   ```bash
   npm start
   ```

## Error Handling
- The API currently does not implement specific error handling
- If no products are available, an empty array will be returned

## Potential Future Improvements
- Add filtering options for coffee products
- Implement product search functionality
- Add pagination for large product lists
- Create endpoints for individual product retrieval

## Dependencies
- Express.js
- CORS
- dotenv
