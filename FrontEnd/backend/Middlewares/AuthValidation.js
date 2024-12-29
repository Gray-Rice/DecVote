const Joi = require('joi')

const SignUpValidation = (req, res, next) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(20).required(),
  })
  const { error } = Schema.validate(req.body)
  if (error) {
    return res.status(400).json({ message: 'Bad Request', error })
  }
  next()
}

const LoginValidation = (req, res, next) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(20).required(),
  })
  const { error } = Schema.validate(req.body)
  if (error) {
    return res.status(400).json({ message: 'Bad Request', error })
  }
  next()
}

module.exports = { SignUpValidation, LoginValidation }