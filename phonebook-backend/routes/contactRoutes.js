import express from 'express';
import { getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
} from '../controllers/contactControllers.js'

const router = express.Router();

// Define the route using the router instance
router.get('/', getContacts);

router.post('/:id', createContact);

router.get('/:id', getContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);


// Export the router to use in server.js
export default router;