// fieldName: (parent, args, context, info) => data;

import * as db from "./db";

type Resolvers = {
  Query: {
    getAllUsers: () => any;
    getUser?: (userId: string) => any;
    getUserByEmail: (_: any, { email }: { email: string }) => any;
    searchUser?: (query: string) => any;
    login?: (email: string, password: string) => any;
    oauthLogin?: (idToken: string) => any;
    getAllPosts?: () => any;
    getAllPostsByUser?: (userId: string) => any;
    getFeed?: () => any;
  };
  Mutation: {
    createUser: (
      _: any,
      args: {
        email: string;
        firstName: string;
        lastName: string;
        displayImage?: string;
      }
    ) => any;
  };
};

const resolvers: Resolvers = {
  Query: {
    getAllUsers: async () => await db.getAllUsers(),
    getUserByEmail: async (_, { email }) => {
      return await db.getUserByEmail(email);
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      return await db.createUser(args);
    },
  },
};

export default resolvers;
