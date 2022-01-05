const renderAboutMe = (req, res) => {
  res.render("aboutMe");
};

const renderContactMe = (req, res) => {
  const dataForHB = {
    links: [
      {
        href: "https://github.com/surajverma2587",
        title: "GitHub Profile",
      },
      {
        href: "https://www.linkedin.com/in/surajverma25/",
        title: "LinkedIn Profile",
      },
      {
        href: "mailto:surajverma2587@gmail.com",
        title: "Email",
      },
    ],
  };

  res.render("contactMe", dataForHB);
};

const renderProjects = (req, res) => {
  const dataForHB = {
    projects: [
      {
        title: "Project 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta blanditiis nesciunt rem, nisi ab incidunt molestiae nemo quas. Qui fugiat repudiandae suscipit sint? Debitis amet ad voluptate eum eaque?",
        repoUrl: "https://github.com/surajverma2587/javascript-training",
        appUrl: "https://github.com/surajverma2587",
        lastUpdated: "2021-11-22T20:41:43Z",
      },
      {
        title: "Project 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta blanditiis nesciunt rem, nisi ab incidunt molestiae nemo quas. Qui fugiat repudiandae suscipit sint? Debitis amet ad voluptate eum eaque?",
        repoUrl: "https://github.com/surajverma2587/workout-tracker-mvc",
        appUrl: "https://github.com/surajverma2587",
        lastUpdated: "2021-11-22T20:41:43Z",
      },
    ],
  };

  res.render("projects", dataForHB);
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
