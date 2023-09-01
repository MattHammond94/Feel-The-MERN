# Feel-The-MERN

This repo is used for practicing with the MERN stack. I have used multiple resources such as codecademy, youtube tutorials/walkthroughs and multiple articles. 

I do not take credit for any of the code written within any of these projects. This repo is used simply for me to document my learning and to use as a reference point for future projects.

Some of the projects have had to be copied 
I encountered a bug whereby having multiple projects using similar packages all within one parent repo caused multiple issues that I simply did not have the time to resolve.
As this is the case some projects have been copied into this 

I know they work independently when used in isolation however when added to this repo they are no longer functional. Again this causes no issues as this repo is just to be referenced on other projects. 

### Setting up a MERN project from scratch:
* Ensure Node is installed: ```node -v```
* ```nvm use node```
* ```npm init -y``` : Initializes an npm project(Creates a file package.json)
* ```npm add <selected package>``` : Here is where you can add packages such as jest for testing. 
* Add ESLint for code formatting/error highlighting (similar to rubocop.)

Note: 
> Add all versions of node_modules to .gitignore.

### Backend:
* ```mkdir backend```
* ```cd backend```
* ```npm install express```
* ```npm install -g nodemon``` => installs nodemon globally(Only needs to be run one) Nodemon auto restarts server after changes are made. Can run ```nodemon server.js``` to start server.

Note: 
> Within your package.json file under "scripts" you can add custom scripts for running commands from the command line.
> inputting "dev": "nodemon server.js" under "scripts" would allow you to use ```npm run dev``` from the command line to start the server.

If we dont want to hardcode any constants which may contain sensitive/private info we can use a .env file. This file is then added to the .gitignore.

Adding .env to backend:
* ```touch .env```
* ```npm install dotenv```
* add ```PORT=<PORT_NO>  MONGO_DB_URI=<MONGO_URI>``` within .env file along with other sensitive files.

This will allow you to access these variables as ENVIRONMENT variables from a env file. 
```process.env``` is available globally within a node environment to use you will not to invoke the .config() method upon requiring the dotenv package with your file as below:
* ```require('dotenv').config()```
* You can then call ```process.env.PORT``` to return => ```<PORT_NO>```

Adding async handler: 
* ```npm i express-async-handler```
* Wrapper for paths in controller
* prevents having to use multiple try/catch blocks for each await. 

## Database(Backend continued)
Start off by creating a database using either mongoDB atlas or compass GUI. You can then copy your database URI into the .env file as an ENV variable. 
* ```npm install mongoose``` - mongoose = ODM library (Object data modelling)

mongoose.connect(databaseURI) - This would be an async function and would therefore return a promise.


### Frontend
* ```npx create-react-app <INSERT_NAME>```
* ```npm install react-router-dom```

Formatting Dates(common):
* ```npm install date-fns```


### Using imports(ES modules) instead of requiring.

You can use the import approach to adding packages/libraries in the backend by adding ```"type": "module",```
to the top level of the npm package object.
This allows the same type of importing for both frontend and backend to keep consistency.
This is commonJS vs ES6.

