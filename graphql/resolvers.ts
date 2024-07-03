const resolvers = {
  Query: {
    greetings(_arg: any, _a: any, _context: any) {
      return "Hello world.";
    },
  },
}

export default resolvers;
