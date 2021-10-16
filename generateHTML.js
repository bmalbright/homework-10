const generateHTML = ({ name, location, github,  }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <h1>Team Profile</h1>
  </div>
  
  <div class="container">
    <div class = "card" id = "teamCards>
      <div class = "card-body" id = "managerCard">
      // ?
      </div>
      <div

    <h3></h3>
    <ul class="employeeCards">
        <li class="engineerCard"></li>
        <li class="internCard"></li>
    </ul>
    </div>
  </div>
</div>
</body>
</html>`;

const createHTML = () => {
    // Use writeFileSync method to use promises instead of a callback function
      fs.writeFileSync('index.html', generateHTML(data));
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  createHTML();