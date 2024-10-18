const Employee = require("../models/Employee");
const EmployeeType = require("../schema/employee");
const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const getAllEmployees = {
  type: new GraphQLList(EmployeeType),
  resolve(parent, args) {
    return Employee.find();
  },
};

const createEmployee = {
  type: EmployeeType,
  args: {
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    position: { type: GraphQLString },
  },
  resolve(parent, args) {
    const employee = new Employee({
      name: args.name,
      age: args.age,
      position: args.position,
    });
    return employee.save();
  },
};

const updateEmployee = {
  type: EmployeeType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    position: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Employee.findByIdAndUpdate(
      args.id,
      { name: args.name, age: args.age, position: args.position },
      { new: true }
    );
  },
};

const deleteEmployee = {
  type: EmployeeType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Employee.findByIdAndDelete(args.id);
  },
};

module.exports = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
