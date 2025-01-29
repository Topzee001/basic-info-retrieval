exports.getRequest = (req, res) => {
  res.status(200).send({
    email: 'ibrahimsakariyah@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/Topzee001/',
  });
};
