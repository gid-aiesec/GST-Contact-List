# AIESEC Global Contact List
The backend and the frontend is in relevant folders.

## AIESEC Global Contact List - Backend
This is the backend for the AIESEC Global Contact list. This application use Nodejs.

### 1. Create .env file
In order for the server to work there are a couple of data should be provided in a **.env** file.

First create the **.env** file in the backend folder. Then insert below fields to the file.

```
 - PORT={Desired port to run the application. If not included default is 4000}
 - GRAPHQL_URL={AIESEC GraphQL API endpoint}
 - ACCESS_TOKEN={Access token with a global level access}
```
### 2. Install dependencies
Node package manager (npm) or yarn needs to be installed to run the application.

Open a terminal/command window in the backend folder and run following commands.
```
#npm
$ npm install

#yarn
$ yarn
```
### 3. Run the server
Then use the following command to run the server. If the "PORT" in .env is not set up server will run one **localhost:4000**.
```
#npm
$ npm start

#yarn
$ yarn start
```
## AIESEC Global Contact List - Frontend
This is the frontend for the AIESEC Global Contact list. This application use Next.js and React.

### 1. Create .env file
In order for the server to work there are a couple of data should be provided in a **.env** file.

First create the **.env** file in the frontend folder. Then insert below fields to the file.

```
 - NEXT_PUBLIC_CLIENT_ID : Client ID from expa dev application (for the authentication)
 - CLIENT_SECRET : Client secret from expa dev application (for the authentication)
 - NEXT_PUBLIC_REDIRECT_URI : Auth redirect URL (needs to bet set to {baseurl}/auth)
 - NEXT_PUBLIC_BACKEND : Backend endpoint
```
### 2. Install dependencies
Node package manager (npm) or yarn needs to be installed to run the application.

Open a terminal/command window in the frontend folder and run following commands.
```
#npm
$ npm install

#yarn
$ yarn
```
### 3. Run the server
Then use the following command to run the server.
```
#npm
$ npm dev

#yarn
$ yarn dev
```