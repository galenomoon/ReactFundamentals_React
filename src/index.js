import ReactDOM from 'react-dom' //Importing ReactDom | Document Object Model

const el = document.getElementById("root") //Getting the element by id 'root'
ReactDOM.render('Olá', el) // and rendering it in that element

//But, you can make it directly like this
ReactDOM.render('React!', document.getElementById("root2"))