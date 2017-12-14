const { models } = require('../../models');

module.exports = {
  // User
  createUser (root, { input }, context) {
    return models.User.create(input);
  },

  updateUser (root, { id, input }, context) {
    return models.User.findById(id)
            .then(user => {
              return user.update(input);
            });
  },

  removeUser (root, { id }, context) {
    return models.User.findById(id)
            .then(user => user.destroy());
  },

  // Room
  createRoom (root, { input }, context) {
    return models.Room.create(input);
  },

  updateRoom (root, { id, input }, context) {
    return models.Room.findById(id)
            .then(room => {
              return room.update(input);
            });
  },

  removeRoom (root, { id }, context) {
    return models.Room.findById(id)
            .then(room => room.destroy());
  },

  // Event
  createEvent (root, { input, usersIds, roomId }, context) {
    return models.Event.create(input)
            .then(event => {
              event.setRoom(roomId);

              return event.setUsers(usersIds)
                    .then(() => event);
            });
  },

  updateEvent (root, { id, input }, context) {
    return models.Event.findById(id)
            .then(event => {
              return event.update(input);
            });
  },

  removeUserFromEvent (root, { id, userId }, context) {
    return models.Event.findById(id)
            .then(event => {
              event.removeUser(userId);
              return event;
            });
  },

  changeEventRoom (root, { id, roomId }, context) {
    return models.Event.findById(id)
            .then(event => {
              event.setRoom(id);
            });
  },

  removeEvent (root, { id }, context) {
    return models.Event.findById(id)
            .then(event => event.destroy());
  }
};
