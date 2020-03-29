const mongoose = require('mongoose');
const userSchema = require('./user.schema');
const {gql, ApolloServer} = require('apollo-server');

const model = {};

const url = 'url mongo atlas';
const conn = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'develop',
});

model.User = conn.model('user', userSchema);

const createUserService = async (user) => {
    const createUser = new model.User(user);
    return createUser.save();
};

const createUser = async (_, {input}) => {
    return createUserService(input);
};

const resolvers = {
    Mutation: {
        createUser
    }
}

const typeDefs = gql`
  type Mutation {
    _ : Boolean
  }

  type Query{
      _ : Boolean
  }

  type User {
    username: String 
    firts_name: String 
    second_name: String 
    first_surname: String 
    second_surname: String 
    state: String 
    gender: String 
    birthday: String 
    registration_date: String 
  }

  input UserAction {
    username: String, 
    firts_name: String, 
    second_name: String, 
    first_surname: String, 
    second_surname: String, 
    state: String, 
    gender: String, 
    birthday: String, 
    registration_date: String, 
  }
  extend type Mutation {
    createUser(input: UserAction!): User!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });


module.exports = server;


