const { buildSchema } = require("graphql");
module.exports = schema = buildSchema(`

scalar JSON

type RootQuery {
    divisor: JSON
    searchText: JSON
}
schema {
    query:RootQuery
}
`);
