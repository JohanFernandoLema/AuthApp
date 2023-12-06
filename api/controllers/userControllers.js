import User from '../models/userModel.js'

const homePage = async (req, res) => {
  res.send(200).json({ message: 'Home page endpoint' })
}

export default homePage
