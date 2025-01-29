const MY_INFO = require('../utils/constants')
exports.getRequest = (req, res) => {
  res.status(200).send({
    email: MY_INFO.email,
    current_datetime: new Date().toISOString(),
    github_url: MY_INFO.github_url,
  });
};
