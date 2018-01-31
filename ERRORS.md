## Найденные ошибки

1. models/index.js - отсутствует значение аргумента password в конструкторе Sequelize
2. index.js - ошибка в адресе `app.use('/graphql')` и пропущена точка запятая
3. graphql/typeDefs лишний `type UserRoom`
4. graphql/typeDefs `input UserInput` отсутсвует `avatarUrl: String` и он не должен быть обязательным полем => убрать восклицательный знак
5. graphql/typeDefs убран `union SearchResult`, он нигде не используется
6. models/scheme.js - лишний `return`
7. resolvers/index.js потеряны `return`
8. resolvers/mutation.js добавлена мутация `addUserToEvent`
8. resolvers/mutation.js должно быть `roomId` вместо `id` и правки в стрелочных фунциях
9. resolvers/query в events `finAll()`- должен быть {} вместо `arguments`
10. resolvers/query в rooms лишнее `{offset:1}`
11. create-mock-data - в date-start время позже, чем в date-end

Линтер говорит, что все ок.

