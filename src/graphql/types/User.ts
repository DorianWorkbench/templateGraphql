import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const UserType:GraphQLObjectType = new GraphQLObjectType({     
    name: 'user',     
    fields:{         
      id:{type:GraphQLInt},         
      name: {type: GraphQLString},         
      email: {type: GraphQLString},
      age: {type: GraphQLInt}
    },
 });