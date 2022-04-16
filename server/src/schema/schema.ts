import { gql } from "apollo-server";

import readFromFile from "../utils/readFromFile";

const stringGraphqlSchema = readFromFile("./src/schema/schema.graphql");

const schema = gql`
  ${stringGraphqlSchema}
`;

export default schema;
