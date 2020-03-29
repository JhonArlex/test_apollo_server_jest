require('cross-fetch/polyfill');
const {gql} = require('apollo-boost');
const {getClient} = require('./client');

const client = getClient();

describe('Test de creación de usuario', () => {
  it('Este test debe de crear un usuario correctamente', async () => {
    const createPermission = gql`
      mutation createUser($input: UserAction!){
        createUser(input: $input) {
            username
            firts_name
            second_name
            second_surname
            state
            gender
        }
      }
    `;
    const input = {
        username: 'jhonarlexo',
        firts_name: 'jhon',
        second_name: 'arlex',
        second_surname: 'ocampo',
        state: 'active',
        gender: 'M'
    };
    const res = await client.mutate({
      mutation: createPermission,
      variables: {
        input,
      },
    });
    expect(res.data.createUser).toHaveProperty('username', input.username);
  });
});
