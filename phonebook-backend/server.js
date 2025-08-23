import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js'
import connectDb from './config/dbconnection.js'

//database connection
connectDb();

// Initialize dotenv to load environment variables from the .env file
dotenv.config();

// Create the app instance by calling express()
const app = express();  

const PORT = process.env.PORT || 4080;

app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});