import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
});

// .pre is a schema method that allows us to pass middleware functions to run before each specified event.
// In this case our event is passed as the first argument 'save' so for each insatnce of user when save is called this middleware will run
// we check to see if the password that belongs to the schema which is being saved(this) has been modified.
// On first creation it wont have been modified therefore the remainder of the code will be run hashing the password with bcrpyt

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


// .methods allows us to add methods directly to the User obj.
// We define a method matchPasswords that uses the bcrypt compare.
// bcrypt compare takes two args and compares them. 
// We can now call .matchPasswords(password) on a User.
userSchema.methods.matchPasswords = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;