function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

  console.log("::: Form Submitted :::")
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())
    .then(function(res) {
      document.getElementById('results').innerHTML = res.title
    })
}

export { handleSubmit }
