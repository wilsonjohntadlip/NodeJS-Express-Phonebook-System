import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';


// Initialize dotenv to load environment variables from the .env file
dotenv.config();

// Create the app instance by calling express()
const app = express();  

const PORT = process.env.PORT || 4080;

app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});