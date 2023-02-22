// 1.  AXIOS
// AXIOS GET REQUEST
function getPosts() {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts'
  })
  .then(response => console.log(response.data))
  .catch(err => console.err(error));
}

// AXIOS POST REQUEST
function addComments() {
    axios
    .post('https://jsonplaceholder.typicode.com/comments?_limit=5', {
      comments: '500 comments',
      likes: '20 likes'
    })
      .then (response => console.log (response.data))
      .catch (err => console.error (err))
} 
  
// AXIOS PUT REQUEST
function updateTodo() {
  axios
  .put('https://jsonplaceholder.typicode.com/todos/1?_limit=5', {
    updated: '1 photos',
  })
  .then (response => console.log (response.data))
  .catch (err => console.error (err))
} 

  // AXIOS PATCH REQUEST
function replaceTodo() {
axios
  .patch('https://jsonplaceholder.typicode.com/todos/1?_limit=5', {
    replaced: 'Todo',
    completed: true
  })
  .then (response => console.log (response.data))
  .catch (err => console.error (err))
}

// AXIOS DELETE REQUEST
function deleteTodo() {
axios
  .delete('https://jsonplaceholder.typicode.com/todos/1?_limit=5', {
    replaced: 'Todo',
    completed: true
  })
  .then (response => console.log (response.data))
  .catch (err => console.error (err))
}

// 2.   FETCH
// FETCH GET REQUEST
function getPosts() {
  fetch ('https://dummyjson.com/products/category/smartphones?_limit=5')
  .then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
    
  
  // FETCH POST REQUEST
  function getPosts() {
  fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify({    
    })
}).then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(error => console.error(error));
}


    
  // FETCH PUT REQUEST
  function getPosts() {
  fetch ('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'put',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify({    
    })
}).then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
  
    // FETCH PATCH REQUEST
    function getPosts() {
    fetch ('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'patch',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify({    
    })
}).then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

    //FETCH DELETE REQUEST
function deleteTodo() {
fetch
  .delete('https://jsonplaceholder.typicode.com/todos/1', {
    replaced: 'Todo',
    completed: true
  })
  .then (response => console.log (response.data))
  .catch (err => console.error(err))
}


//3. XMLHTTP XMLHTTP 
//XML OBJECT

const request = new XMLHttpRequest();

// XMLHTTP GET REQUEST 
function getPosts() {
request.open("GET", 'https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload = (response)=>{
    console.log(request);
    if(request.status === 200){
        console.log(JSON.parse(response.data))
    }else{
        console.log(`${error.status}`)
    }
}
}

// XMLHTTP POST REQUEST
function getPosts() {
request.open("post", 'https://dummyjson.com/products/category/smartphones');
request.send();
request.onload = (response)=>{
    console.log(request);
    if(request.status === 200){
        console.log(JSON.parse(response.data))
    }else{
        console.log(`${request.status}`)
    }
}
}

// XMLHTTP PUT REQUEST
function getPosts() {
request.open("put", 'https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload = (response)=>{
    console.log(request);
    if(request.status === 200){
        console.log(JSON.parse(response.data))
    }else{
        console.log(`${request.status}`)
    }
}
}

// XMLHTTP PATCH REQUEST
function getPosts() {
request.open("patch", 'https://dummyjson.com/products/search?q=phone');
request.send();
request.onload = (response)=>{
    console.log(request);
    if(request.status === 200){
        console.log(JSON.parse(response.data))
    }else{
        console.log(`${request.status}`)
    }
}
}

// XMLHTTP DELETE REQUEST
function getPosts() {
request.open("delete", 'https://jsonplaceholder.typicode.com/posts/1');
request.send();
request.onload = (response)=>{
    console.log(request);
    if(request.status === 200){
        console.log(response)
    }else{
        console.log(`${request.status}`)
    }
}
}

//JQUARY
//JQUARY GET REQUEST
$(document).ready(function(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=5',
    type: "GET",
    success:function(result){
      console.log(result)
    },
    error:function(err){
      console.log(err);

  }
})
}),

//JQUARY post REQUEST
$(document).ready(function(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
    type: "post",
    success:function(result){
      console.log(result)
    },
    error:function(err){
      console.log(err);

  }
})
}),

//JQUARY put REQUEST
$(document).ready(function(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1?_limit=5',
    type: "put",
    success:function(result){
      console.log(result)
    },
    error:function(err){
      console.log(err);

  }
})
}),

//JQUARY patch REQUEST
$(document).ready(function(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1?_limit=5',
    type: "patch",
    success:function(result){
      console.log(result)
    },
    error:function(err){
      console.log(err);

  }
})
}),

//JQUARY delete REQUEST
$(document).ready(function(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1?_limit=5',
    type: "delete",
    success:function(result){
      console.log(result)
    },
    error:function(err){
      console.log(err);

  }
})
})

// Event listeners For axios 
document.getElementById('get').addEventListener('click', getPosts);
document.getElementById('post').addEventListener('click', addComments);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('replace').addEventListener('click', replaceTodo);
document.getElementById('delete').addEventListener('click', deleteTodo);


// Event listeners For Fetch
document.getElementById('Btn1').addEventListener('click', getPosts);
document.getElementById('postBtn').addEventListener('click', addComments);
document.getElementById('updateBtn').addEventListener('click', updateTodo);
document.getElementById('removeBtn').addEventListener('click', replaceTodo);
document.getElementById('deleteBtn').addEventListener('click', deleteTodo);


// Event listeners For XMLHTTP 
document.getElementById('getXMLHTTP').addEventListener('click', getPosts);
document.getElementById('postXMLHTTP').addEventListener('click', addComments);
document.getElementById('updateXMLHTTP').addEventListener('click', updateTodo);
document.getElementById('replaceXMLHTTP').addEventListener('click', replaceTodo);
document.getElementById('deleteXMLHTTP').addEventListener('click', deleteTodo);


// Event listeners For JQUARY
document.getElementById('getJ').addEventListener('click', getPosts);
document.getElementById('postJ').addEventListener('click', addComments);
document.getElementById('updateJ').addEventListener('click', updateTodo);
document.getElementById('removeJ').addEventListener('click', deleteTodo);
document.getElementById('deleteJ').addEventListener('click', deleteTodo);