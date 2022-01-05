var express = require('express');
var router = express.Router();

let bd = {
	user: 'abc',
	password: '123'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

router.post('/validate', function(req, res, next) {
	let user = req.body.user;
	let password = req.body.password;

	console.log("usuario: ", user)
	console.log("contraseña: ", password)

	//Validación
	if(user == bd.user && password == bd.password) {
		res.cookie('user', user, {expire : new Date() + 9999});
		req.session.user = user;
		res.redirect('/');
	} else {
		res.cookie('user', "", {expire : new Date(0)});
		req.session = null;
		res.redirect('/login')
	}

});

router.get("/validate", (req, res, next) => {
	let user = req.query.user;
	let password = req.query.password;

	console.log("Validate / GET");
	console.log("user: ", user);
	console.log("password: ", password);

	//Validación
	if(user == bd.user && password == bd.password) {
		res.redirect('/');
	} else {
		res.redirect('/login')
	}

});

module.exports = router;

