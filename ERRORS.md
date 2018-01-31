## Найденные ошибки

1. models/index.js - отсутствует значение аргумента password в конструкторе Sequelize
2. index.js - ошибка в адресе `app.use('/graphql')` и пропущена точка запятая
3. graphql/typeDefs лишний `type UserRoom`
4. graphql/typeDefs `input UserInput` отсутсвует `avatarUrl: String` и он не должен быть обязательным полем => убрать восклицательный знак
5. graphql/typeDefs убран `union SearchResult`, он нигде не используется
6. models/scheme.js - лишний `return`
7. resolvers/index.js потеряны `return`
8. resolvers/mutation.js добавлена мутация `addUserToEvent`
8. resolvers/mutation.js в setRoom roomId вместо id
9. resolvers/query.js - разобраться! ++++
10. models/scheme.js - в конце зачем return??? -- разобраться +++
11. resolvers/query в events finAll {} вместо arguments
12. resolvers/query в rooms offset:1 - не нужно
13. create-mock-data - в date-start время позже, чем в date-end
