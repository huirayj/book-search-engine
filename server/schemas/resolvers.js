const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, { user }) => {
            if (user) {
                const user = await User.findOne({ _id: user._id });

                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { savedBooks }, { user }) => {
            if (user) {
                const updUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: savedBooks } },
                    { new: true }
                );
                return updUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeBook: async (parent, { bookId }, { user }) => {
            if (user) {
                const updUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: bookId } },
                    { new: true }
                );
                return updUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;