const { buildSchema } = require("graphql");
module.exports = schema = buildSchema(`

scalar JSON

type SearchTexts{
    result: String!
}
type RootQuery {
    divisor: JSON
    searchText: [SearchTexts]!
}
schema {
    query:RootQuery
}
`);
