const { body, validationResult } = require('express-validator');
const userValidationRules = () => {
    return [
        body('firstName', 'First name is required').not().isEmpty(),
        body('lastName', 'Last name is required').isLength({ min: 3 }),
        body('email', 'Email is required as EMAIL TYPE').isEmail(),
        body('favoriteColor', 'Favorite color is required').not().isEmpty(),
        body('birthday', 'Birthday is required').not().isEmpty()
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push(err.msg));
    return res.status(400).json({ errors: extractedErrors });

}

module.exports = {
    userValidationRules,
    validate
}