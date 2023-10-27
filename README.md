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

### Setting up testing(backend/api):

Though I am used to putting all tests into a spec file it seems common practice to put all tests within a ```__tests__``` folder to differentiate them from production files.

There are multiple approaches that can be taken and each one is will be specific to how you have chosen to structure the rest of the architecture of your project. 

you will 100% need ```jest``` and ```supertest``` for testing a rest API 

Supertest is used to test the functionality of end points. 

Both can be installed using as a dev dependency using ```npm install --save-dev [package_name]``` Installing them as a dev dependency seperates them from the core dependencies as they are only required in the dev environment.

After installing your test packages it is most common to then add a config file for testing. This can be done by running ```touch jest.config.js``` and adding a module.export with an object of all configurations. This is more suitable for the ES6 approach however I opted to configure directly in the package JSON as below:

```
 "jest": {
    "testEnvironment": "node",
    "testEnvironmentOptions": {
      "NODE_ENV": "test"
    },
    "setupFiles": [
      "./testSetup.js"
    ],
    "testTimeout": 20000
  }
``` 

> The first two options specify the environment and the env variable. This is vital for recognising and setting other variables based on when tests are being run. 

> setUpFiles is and option that takes an array of files to be run before each test. You can config your dotenv in this chosen file to ensure the test env has access to the process.env variables. 

> testTimeout specifies a timeframe for an individual test to run for before timing out. 

Other Options:

> clearMocks: true - 

> verbose: true - Indicates each test to be reported even if set to ignore.

> forceExit: true - forces exit even if pending handlers.

#### Using ES6 modules with Jest/Testing:

I encountered issues running jest after setting my backend to use ES6 modules - To resolve this issue you can run touch ```.babelrc``` from the command line and add the following lines to this file:

{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}

Then run ```npm install --save-dev @babel/plugin-transform-modules-commonjs``` from the command line. 

### Working with supertest and DB's

Supertest binds to a port so it is important to ensure you are not using your production port. This would potentially contaminate/corrupt live data, uneccessarilly cause traffic on a live port thus slowing down systems for actual users and also keeps tests independent and predictable.

I am used to and actually prefer working with a seperate testDB. It allows me to actually see the data in the DB and is easy enough to empty after each test run so I prefer this method however you can create an in memory mongoDB using mongoose which will store all test data in memory.

___In memory mongoDB__

Creates a mongoDB server in memeory with mongoose and returns a URI:

> const mongoSever = await MongoMemorySever.create();

> await mongoose.connect(mongoServer.getUri);

After all tests:
> await mongoose.disconnect();

> await mongoose.connection.close();


### Commands:

```jest --runInBand``` - Runs each test in synchronous order to avoid any issues with asynchronisity. 

```jest --coverage``` - Returns a coverage report - Ensure to add /coverage to .gitignore.

Can add ```npm i cross-env``` to use cross-env for inline env variables.
