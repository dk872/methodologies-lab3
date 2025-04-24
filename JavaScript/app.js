const mongoose = require('mongoose');
const readlineSync = require('readline-sync');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB database'))
  .catch((err) => console.error('Connection error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

async function addUser() {
  const name = readlineSync.question('Enter the user\'s name: ');
  const age = readlineSync.questionInt('Enter the user\'s age: ');

  const newUser = new User({ name, age });

  try {
    await newUser.save();
    console.log('User added to the database');
  } catch (err) {
    console.error('Error while adding the user:', err);
  }
}

async function listUsers() {
  try {
    const users = await User.find();
    console.log('List of users:');
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}, ${user.age} years old`);
    });
  } catch (err) {
    console.error('Error while fetching users:', err);
  }
}

async function deleteUser() {
  try {
    const users = await User.find();
    if (users.length === 0) {
      console.log('No users to delete.');
      return;
    }

    const index = readlineSync.keyInSelect(
      users.map((u) => `${u.name}, ${u.age} years old`),
      'Select a user to delete:'
    );

    if (index === -1) {
      console.log('Operation canceled.');
      return;
    }

    await User.findByIdAndDelete(users[index]._id);
    console.log('User deleted.');
  } catch (err) {
    console.error('Error while deleting user:', err);
  }
}

async function mainMenu() {
  const choice = readlineSync.keyInSelect(
    ['Add user', 'View users', 'Delete user', 'Exit'],
    'Choose an action:',
    { cancel: false }
  );
  
  switch (choice) {
    case 0:
      await addUser();
      break;
    case 1:
      await listUsers();
      break;
    case 2:
      await deleteUser();
      break;
    case 3:
      console.log('Exiting the program...');
      mongoose.connection.close();
      return;
    default:
      console.log('Invalid choice!');
  }

  mainMenu();
}

mainMenu();
