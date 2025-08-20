import express from 'express';
import { getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
} from '../controllers/contactControllers.js'

const router = express.Router();

// Define the route using the router instance
router.route('/')
  .get(getContacts)        // GET /api/contacts
  .post(createContact);    // POST /api/contacts

router.route('/:id')
  .get(getContact)         // GET /api/contacts/:id
  .put(updateContact)      // PUT /api/contacts/:id
  .delete(deleteContact);  // DELETE /api/contacts/:id


// Export the router to use in server.js
export default router;