const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js")

const generateCards = (data) => {
  console.log(data)  
  let cards = ``
    data.forEach((element) => {
      if (element instanceof Manager) {
      cards = cards + managerCard(element)
    } else if (element instanceof Engineer) {
      cards = cards + engineerCard(element)
    } else {cards = cards + internCard(element)};
    });
    return cards
}

const managerCard = (data) => {
  return `
  <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h4 class="card-title">${data.name}</h4>
    <p class="card-text">ID: ${data.id}</p>
    <p class="card-text"><a href="mailto:${data.email}">Email</a></p>
    <p class="card-text" >Office: ${data.office}</p>
    </div>
  </div>
  `
}

const engineerCard = (data) => {
  return `
  <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <h4 class="card-title">${data.name}</h4>
      <p class="card-text">ID: ${data.id}</p>
      <p class="card-text"><a href="mailto:${data.email}">Email</a></p>
      <p class="card-text" ><a href="${data.getGithub()}">Github Link</a></p>
    </div>
  </div>
  `
}

const internCard = (data) => {
  return `
  <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <h4 class="card-title">${data.name}</h4>
      <p class="card-text">ID: ${data.id}</p>
      <p class="card-text"><a href="mailto:${data.email}">Email</a></p>
      <p class="card-text" >School: ${data.college}</p>
    </div>
  </div>
  `
}


const generateHTML = (data) => {
return  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <title>Team Profile Generator</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <h1>Team Profile</h1>
  </div>
  
  <div class="row flex-row justify-content-center">
    <div class="card-deck">
      ${generateCards(data)}
    </div>
  </div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>

</body>
</html>`;
};

module.exports=generateHTML