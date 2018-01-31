## Найденные ошибки

1. models/index.js - отсутствует значение аргумента password в конструкторе Sequelize
2. index.js - ошибка в адресе `app.use('/graphql')` и пропущена точка запятая
3. graphql/typeDefs лишний `type UserRoom`
4. graphql/typeDefs `input UserInput` отсутсвует `avatarUrl: String` и он не должен быть обязательным полем => убрать восклицательный знак
5. graphql/typeDefs убран union SearchResult, он нигде не используется
6. models/scheme.js - лишний return

