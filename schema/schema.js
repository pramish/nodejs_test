const { buildSchema } = require("graphql");
module.exports = schema = buildSchema(`

type DivisibleNumber{
    divisor: String!
}
type RootQuery {
    divisor: [DivisibleNumber]!
}
schema {
    query:RootQuery
}
`);
