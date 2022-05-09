const axios = require('axios');
const sizeImage = ({ image, ...infos }) => ({
  ...infos,
  image: `${image}&s=200`,
});

const serialize = ({ full_name, owner, description, language }) => ({
  fullName: full_name,
  image: owner.avatar_url,
  description,
  language,
});

exports.getRepos = async () => {
  const { data } = await axios.get('https://api.github.com/orgs/takenet/repos');
  const repositories = data.filter(({ language }) => language === 'C#')
    .slice(0, 5)
    .map(serialize)
    .map(sizeImage);
  return repositories;
};