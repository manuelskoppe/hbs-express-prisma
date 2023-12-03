const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const methodOverride = require('method-override');
const { create } = require('express-handlebars');


const hbs = create({
  extname: 'hbs',
  defaultLayout: 'main',
  partialsDir: 'views/partials',
  helpers: require('./utils/helpers'), 
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views'); 






app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));



const router = require('./routes');
app.use('/', router);


/*const indexRouter = require('./routes/index');
app.use('/', indexRouter);*/





app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
