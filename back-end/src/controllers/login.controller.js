const loginService = require('../services/login.service');

const login = async (req, res) => {
	const valBody = loginService.validateBody(req.body);
	const { email, password } = req.body;
	if (valBody.error) {
		const result = loginService.validateBody(req.body);
		return res.status(400).json({ message: result });
	}
	//marcos
	const validate = await loginService.validateLogin(email, password);
	if (validate.message === 'Invalid fields') {
		return res.status(404).json(validate);
	}
	return res.status(200).json({
		token: validate.token,
		name: validate.name,
		email: validate.email,
		role: validate.role,
		id: validate.id,
	});
};

module.exports = { login };
