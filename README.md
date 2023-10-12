# Node.js Express MongoDB Example REST API

This repository contains an example of a RESTful API built with Node.js, Express, and MongoDB. This project is intended to serve as a starting point for building your own REST API or as a learning resource for those looking to understand how to create a Node.js-based API that interacts with a MongoDB database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system. You can download it [here](https://nodejs.org/).

- MongoDB: You need to have MongoDB installed and running. You can download it [here](https://www.mongodb.com/try/download/community).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NKKD/Capstone-database.git
   ```

2. Navigate to the project directory:

   ```bash
   cd capstone-database
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and configure your MongoDB connection URI. For example:

   ```env
   MONGODB_URI=mongodb://localhost:27017/mydatabase
   ```

5. Start the application:

   ```bash
   npm start
   ```

Your Node.js Express server should now be running, and it will connect to the MongoDB database.

## API Endpoints



## Testing

You can test the API using a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/). Make requests to the above endpoints to create, retrieve, update, and delete items in the database.

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was inspired by the need for a simple and practical example of a Node.js, Express, and MongoDB-based REST API. Special thanks to the Node.js, Express, and MongoDB communities for their excellent documentation and resources.

Enjoy building your RESTful API with Node.js, Express, and MongoDB!



Certainly, here's an updated README file with the specified endpoints included:

# Node.js Express MongoDB Example REST API

This repository contains an example of a RESTful API built with Node.js, Express, and MongoDB. This project is intended to serve as a starting point for building your own REST API or as a learning resource for those looking to understand how to create a Node.js-based API that interacts with a MongoDB database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system. You can download it [here](https://nodejs.org/).

- MongoDB: You need to have MongoDB installed and running. You can download it [here](https://www.mongodb.com/try/download/community).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nodejs-express-mongodb.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-express-mongodb
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and configure your MongoDB connection URI. For example:

   ```env
   MONGODB_URI=mongodb://localhost:27017/mydatabase
   ```

5. Start the application:

   ```bash
   npm start
   ```

Your Node.js Express server should now be running, and it will connect to the MongoDB database.

## API Endpoints

### Create a New Item

- **URL**: `/items`
- **HTTP Method**: POST
- **Request Body**: JSON

```json
{
  "name": "Sample Item",
  "description": "This is a sample item."
}
```

### Get All Items

- **URL**: `/items`
- **HTTP Method**: GET

### Get an Item by ID

- **URL**: `/items/:id`
- **HTTP Method**: GET

### Update an Item by ID

- **URL**: `/items/:id`
- **HTTP Method**: PUT
- **Request Body**: JSON

```json
{
  "name": "Updated Item Name",
  "description": "This is the updated item description."
}
```

### Delete an Item by ID

- **URL**: `/items/:id`
- **HTTP Method**: DELETE

