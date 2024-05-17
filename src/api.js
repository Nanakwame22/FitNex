import { API, graphqlOperation } from 'aws-amplify';
import { listCalories, getUser } from './graphql/queries';
import { createCalorie, createUser } from './graphql/mutations';

export const fetchCalories = async () => {
  const data = await API.graphql(graphqlOperation(listCalories));
  return data.data.listCalories.items;
};

export const fetchUser = async (userId) => {
  const data = await API.graphql(graphqlOperation(getUser, { id: userId }));
  return data.data.getUser;
};

export const addCalorie = async (calorie) => {
  const data = await API.graphql(graphqlOperation(createCalorie, { input: calorie }));
  return data.data.createCalorie;
};

export const addUser = async (user) => {
  const data = await API.graphql(graphqlOperation(createUser, { input: user }));
  return data.data.createUser;
};
