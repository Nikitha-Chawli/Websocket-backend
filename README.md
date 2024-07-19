# WebSocket Backend

## Description
This WebSocket backend echoes received messages in a streaming format and counts the occurrences of the last character in the message (excluding the last character).

## Requirements
- Node.js

## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the WebSocket server: `npm start`
4. The server will run on `ws://localhost:8080`.

## WebSocket API Documentation

### How to Connect
- URL: `ws://localhost:8080`

### Available Actions
- **Echo and Count**: Send any message to the WebSocket server, and it will echo the message with a 0.1-second delay.it will send a JSON response with the last character and its count (excluding the last character).

### Request Format
Send a plain text message.

### Response Format
```json
{
  "message": "The quick brown fox jumped over the lazy dog o",
  "lastCharacter": "o",
  "count": 4
}
```

### Example Request and Response
#### Request
```
The quick brown fox jumped over the lazy dog o
```

#### Response
```json
{
  "message": "The quick brown fox jumped over the lazy dog o",
  "lastCharacter": "o",
  "count": 4
}
```
## Frontend
To open frontend run index.html file 


### Test the API with Postman
1. Open Postman.
2. Create a new WebSocket request.
3. Connect to `ws://localhost:8080`.
4. Send a message: `The quick brown fox jumped over the lazy dog o`.
5. Observe the streamed response and the final JSON response.