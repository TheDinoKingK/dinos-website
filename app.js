const express = require("express")
const path = require("path")
const hbs = require('express-handlebars')
const app = express()

const onAbout = false;
const onSocial = false;
const onEquip = false;
<<<<<<< HEAD
const onWork = false;
=======
>>>>>>> main

app.engine('handlebars', hbs.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

const favicon = require('serve-favicon');
const { title } = require("process");

// static imports

app.use(favicon(__dirname + '/favicon.ico'))
app.use('/images', express.static('assets/images'))
app.use('/images', express.static('assets/images/work_images'))
app.use('/helsinki.woff', express.static('assets/fonts/helsinki_regular_macroman/helsinki-webfont.woff'))
app.use('/mikado', express.static('assets/fonts/mikado'))

// static shortcuts

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
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "assets/js"))
)
  
// routes
<<<<<<< HEAD

app.get('/', (req, res) => {
  res.render('main/index', {title: 'The dino king'})
})

app.get('/social_media', (req, res) => {
  res.render('main/socials', {title: 'Social hub', onSocial: true})
})

app.get('/about', (req, res) => {
  res.render('main/about', {title: 'About me', onAbout: true})
})

app.get('/works', (req, res) => {
  res.render('main/work', {title: 'My work', onWork: true})
})

app.get('/equipment', (req, res) => {
  res.render('main/equipment', {title: 'My equipment', onEquip: true})
})

// silly easter egg routes

app.get('/dial', (req, res) => {
  res.render('extras/dial', {title: 'Dial Up'})
=======

app.get('/', (req, res) => {
  res.render('main/index', {title: 'The dino king'})
})

app.get('/about', (req, res) => {
  res.render('main/about', {title: 'About me', onAbout: true})
})

app.get('/social_media', (req, res) => {
  res.render('main/socials', {title: 'Social hub', onSocial: true})
})

app.get('/equipment', (req, res) => {
  res.render('main/equipment', {title: 'My equipment', onEquip: true})
})

// silly easter egg routes

app.get('/dial', (req, res) => {
  res.render('main/dial', {title: 'Dial Up'})
>>>>>>> main
})

// app.listen(process.env.PORT)

app.listen(3000)