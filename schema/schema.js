const { buildSchema } = require("graphql");
module.exports = schema = buildSchema(`

type DivisibleNumber{
    divisor: String!
}
type SearchTexts{
    result: String!
}
type RootQuery {
    divisor: [DivisibleNumber]!
    searchText: [SearchTexts]!
}
schema {
    query:RootQuery
}
`);
