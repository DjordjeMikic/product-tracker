import mongoose from 'mongoose';

export const connectToDb = async () => {
  try {
    await mongoose.connect(
      `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    );

    console.log('Successfully connected to mongo database');
  } catch (e) {
    console.error(e);
  }
};
