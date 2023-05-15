const template = document.getElementById('template');
template.innerHTML = `


<style>

body {
    font-family: Arial, Helvetica, sans-serif;
  }
  
#header{
    margin-top: 0%;

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  text-align: center;
}

li {
    float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
}

li a:hover {
  background-color: #111;
}
</style>
<body>
    <div id= "header">
    <ul>
        <li><a href="index.html">Hjem</a></li>
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="memory.html">Memory</a></li>
        <li><a href="graf.html">Graf</a></li>
      </ul>
    </div>
      `
document.body.appendChild(template.content);