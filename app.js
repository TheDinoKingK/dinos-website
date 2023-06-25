const express = require("express")
const path = require("path")



const app = express()

var favicon = require('serve-favicon')

app.use(favicon(__dirname + '/favicon.ico'));
app.use('/images', express.static('assets/imgs'))
app.use('/homepage.js', express.static('assets/js/homepage.js'))
app.use('/helsinki.woff', express.static('assets/fonts/helsinki_regular_macroman/helsinki-webfont.woff'))
app.use('/mikado', express.static('assets/fonts/mikado'))

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap-icons/font/"))
)
app.use(
  "/css",
  express.static(path.join(__dirname, "assets/css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/animejs/lib"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
  


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"))
})

app.get("/social_media", (req, res) => {
  res.sendFile(path.join(__dirname, "views/socials.html"))
})

app.get("/equipment", (req, res) => {
  res.sendFile(path.join(__dirname, "views/equipment.html"))
})

app.get("/dial", (req, res) => {
  res.sendFile(path.join(__dirname, "views/call.html"))
})

app.listen(3000, () => {
    console.log(`Server is listening on port 3000`)
})