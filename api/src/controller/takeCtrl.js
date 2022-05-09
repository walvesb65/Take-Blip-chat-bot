const { getRepos } = require('../service/repositorySevice')

exports.getRepository = async (_req, res) => {
  const repositories = await getRepos()
  res.status(200).json(repositories);
};
