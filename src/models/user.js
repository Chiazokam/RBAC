import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'client',
    enum: ['client', 'employee', 'supervisor'],
  },
  employmentDate: {
    type: Date,
    required() { return this.role !== 'client'; },
  },
});

const User = mongoose.model('User', userSchema);
export default User;
