const axios = require('axios');
const repositories = require('../mocks/repositories')
const { getRepos } = require('../../src/service/repositorySevice');

jest.mock('axios');

describe('Retonar os repositorios mais antigos', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve(repositories));
  })

  afterEach(() => jest.clearAllMocks());

  it('Deve retornar uma lista com cinco posições', async () => {
    const response = await getRepos();

    expect(Array.isArray(response)).toBe(true);
    expect(response).toHaveLength(5);
  });

  it('Verifica se contem as propiedades fullName, image, description, language=C#', async() => {
      const response = await getRepos();

      const reposTest = response.map((repository) => {
        expect(repository).toHaveProperty('fullName');
        expect(repository.name).not.toBe(null);

        expect(repository).toHaveProperty('image');
        expect(repository.coverImageUrl).not.toBe(null);

        expect(repository).toHaveProperty('description');
        expect(repository.description).not.toBe(null);

        expect(repository).toHaveProperty('language');
        expect(repository.language).toBe('C#');
      });
  
      await Promise.all(reposTest);
  });
});
