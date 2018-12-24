# medwing-backend

This project was built with Sails Framework

## Installation

Install the dependencies

### `npm i`


## Available Scripts

In the project directory, you can run:

### `sails lift`

Runs the app in the development mode.<br>
Open [http://localhost:1337]


## Available Endpoints

 -  **_Get Locations_** 
 `GET http://localhost:1337/locations` 

 Example Response body:
 
    ```application/json
        [
            {
                "createdAt": 1545649828978,
                "updatedAt": 1545649828978,
                "id": "5c20bea45017c217bfc0a0ae",
                "address": "Karimu Ikotun Street, Lagos Makoko, Lagos",
                "latitude": 6.50391,
                "longitude": 3.38242,
                "country": "Nigeria",
                "countryCode": "NG"
            }
        ]
    ```


 -  **_Get Location By Id_** 
 `GET http://localhost:1337/locations/:id` 

 Example Response body:
 
    ```application/json
        {
            "createdAt": 1545649828978,
            "updatedAt": 1545649828978,
            "id": "5c20bea45017c217bfc0a0ae",
            "address": "Karimu Ikotun Street, Lagos Makoko, Lagos",
            "latitude": 6.50391,
            "longitude": 3.38242,
            "country": "Nigeria",
            "countryCode": "NG"
        }
    ```



 -  **_Update Location_** 
 `PUT http://localhost:1337/locations/:id` 

 Example Request body:
 
    ```application/json
        {
            "address": "Karimu Ikotun Street, Lagos Makoko, Lagos",
            "latitude": 6.50391,
            "longitude": 3.38242,
            "country": "Nigeria",
            "countryCode": "NG"
        }
    ```


 
 -  **_Delete Location_** 
 `DELETE http://localhost:1337/locations/:id` 

 Example Response body:
 
    ```application/json
        {
            "address": "Karimu Ikotun Street, Lagos Makoko, Lagos",
            "latitude": 6.50391,
            "longitude": 3.38242,
            "country": "Nigeria",
            "countryCode": "NG"
        }
    ```


 
 
