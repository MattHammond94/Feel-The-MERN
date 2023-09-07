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

// DELETE REQUEST:

function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/4')
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

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
 
// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

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
