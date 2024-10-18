const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../resolvers/employeeResolver");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    employees: getAllEmployees,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createEmployee,
    updateEmployee,
    deleteEmployee,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
