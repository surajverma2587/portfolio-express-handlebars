const renderAboutMe = (req, res) => {
  res.render("aboutMe");
};

const renderContactMe = (req, res) => {
  res.render("contactMe");
};

const renderProjects = (req, res) => {
  res.render("projects");
};

const renderHome = (req, res) => {
  res.render("home");
};

const renderError = (req, res) => {
  res.render("error");
};

module.exports = {
  renderAboutMe,
  renderContactMe,
  renderProjects,
  renderHome,
  renderError,
};
