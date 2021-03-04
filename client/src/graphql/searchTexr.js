import { gql } from "graphql-request";
export const getMatchedText = gql`
  query searchText {
    searchText
  }
`;
