// AXIOS GLOBALS:

// Globals allow us to ensure a header is always present in our config.
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// ===============================================================
// GET REQUEST:

function getTodos() {
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params: {
  //     _limit: 5
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  // Alternate to above:

  // axios.get('https://jsonplaceholder.typicode.com/todos', { params: { _limit: 5 } })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  // As the above is a get request you do not need to specify get as GET is default. 
  // Also params can be added to the endpoint for further refactoring.

  axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// ===============================================================
// POST REQUEST:

function addTodo() {
  // axios({
  //   method: 'POST',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   data: {
  //     title: 'New todo',
  //     completed: false
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  // Alternate:
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'new todo2',
    completed: false
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// ===============================================================
// PUT/PATCH REQUEST:

// A put request replaces the entire selected item thus replacing any attributes
// A patch request only replaces/updates what is specified in the obj.
// If you run the put below as opposed to the patch you will notice no userId field in the response.
// This is because the original obj has been completey replaced without a userId attriubte.

function updateTodo() {
  // axios.put('https://jsonplaceholder.typicode.com/todos/1', {
  //   title: 'Lickle update yana',
  //   completed: true
  // })
  // .then(res => showOutput(res))
  // .catch(err => console.error(err));

  axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
    userId: 2,
    title: 'Lickle update yana',
    completed: true
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// ===============================================================
// DELETE REQUEST:

function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/4')
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// ===============================================================
// SIMULTANEOUS DATA:

// Returns multiple sets of data at one time. Prevents having to send one REQ for one set of data then another.
// Returns array with X amount of object depending on how many REQ were made.
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ])
    // .then(res => {
    //   console.log(res[0]);
    //   console.log(res[1]);
    //   showOutput(res[1]);
    // })

    // An alternate .then to the one above using spread allows both responses to be defined and then returned accordingly
    .then(axios.spread((todos, posts) => showOutput(posts)))
    .catch(err => console.error(err));
}
 
// ===============================================================
// CUSTOM HEADERS:

// Commonly used for storing tokens/auth keys - would need to be defined in a config obj and then passed
// to axios.post as a second arg => see below.

function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'some-token'
    }
  }

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'todo with an auth token',
    completed: false
  }, config)
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// ===============================================================
// TRANSFORMING REQUESTS & RESPONSES:

// Allows you to transfrom both your REQ and RES dependent on if you wanted them formatted a specific way etc.

function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello world'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };

  // Ensures the title attribute in the data object is always returned in CAPS

  axios(options).then(res => showOutput(res));
}

// ===============================================================
// ERROR HANDLING:

function errorHandling() {
  axios.get('https://jsonplaceholder.typicode.com/todosZZZZ')
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        // Server responded with a status over the 200 range - 200 range => Success range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// ===============================================================
// CANCEL TOKEN
function cancelToken() {
  
}

// ===============================================================
// INTERCEPTING REQUESTS & RESPONSES:

// The interceptor below is similar to logger middleware but within the browser. 
// console logs each req

axios.interceptors.request.use(
  config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);

    return config
  },
  error => {
    return Promise.reject(error);
  }
);

// ===============================================================
// AXIOS INSTANCES


// ===============================================================
// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
