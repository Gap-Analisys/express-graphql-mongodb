const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const Employee = require("../models/Employee");

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    position: { type: GraphQLString },
  }),
});

module.exports = EmployeeType;
