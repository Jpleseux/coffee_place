const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const Handlebars = require("handlebars")
const path = require("path")

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
Handlebars.registerHelper('error_', function (message) {
    return new Handlebars.SafeString(`<div class="error">${message}</div>`);
  });

  app.use(express.static(path.join(__dirname, "public")))

  app.get("/", (req, res)=>{
    res.render("users/index")
  })
  app.get("/salesman", (req, res)=>{
    res.render("salesman/index")
  })
app.get("/contact",(req, res)=>{
  res.render("users/contact")
})
app.get("/store", (req, res)=>{
  res.render("users/store")
})
app.get("/sobre", (req, res)=>{
  res.render("users/info")
})
const port = 6969
app.listen(port ,()=>{
  console.log("Servidor rodando na porta "+ port)
})