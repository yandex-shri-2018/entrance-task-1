module.exports = `
scalar Date

type User {
    id: ID!
    login: String!
    homeFloor: Int
    avatarUrl: String!
}

input UserInput {
    login: String!
    homeFloor: Int
}

type UserRoom {
    id: ID!
    title: String!
}

type Room {
    id: ID!
    title: String!
    capacity: Int!
    floor: Int!
}

input RoomInput {
    title: String!
    capacity: Int!
    floor: Int!
}

type Event {
    id: ID!
    title: String!
    dateStart: Date!
    dateEnd: Date!
    users: [User]
    room: Room
}

input EventInput {
    title: String!
    dateStart: Date!
    dateEnd: Date!
}

type Query {
  user(id: ID!): User
  users: [User]
  event(id: ID!): Event
  events: [Event]
  room(id: ID!): Room
  rooms: [Room]
}

type Mutation {
  createUser(input: UserInput!): User
  updateUser(id: ID!, input: UserInput!): User
  removeUser(id: ID!): User

  createRoom(input: RoomInput!): Room
  updateRoom(id: ID!, input: RoomInput!): Room
  removeRoom(id: ID!): Room

  createEvent(input: EventInput!, usersIds: [ID], roomId: ID!): Event
  updateEvent(id: ID!, input: EventInput!): Event
  removeUserFromEvent(id: ID!, userId: ID!): Event
  addUserToEvent(id: ID!, userId: ID!): Event
  changeEventRoom(id: ID!, roomId: ID!): Event
  removeEvent(id: ID!): Event
}

union SearchResult = User | Event | Room

schema {
  query: Query
  mutation: Mutation
}
`;
