import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js'

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create contact
//@route POST /api/contacts/:id
//@access public
const createContact = asyncHandler(async (req, res) => {
    try {
        console.log("The request body is: ", req.body)
        const { name, email, phone } = req.body;

        if( !name || !email || !phone ) {
            res.status(400);
            throw new Error("All fields are mandatory");
        }

        const contact = await Contact.create({
            name,
            email,
            phone
        });
    
        res.status(201).json(contact);
    } catch (error) {
        // Step 4: Catch and log any errors
        console.error("Error occurred while creating contact: ", error);
        res.status(500).json({
            message: error.message || "Server Error",  // Provide the error message in the response
        });
    }
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact);
});

//@desc Update contact
//@route UPDATE /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }
    );

    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            res.status(404).json({ message: "Contact not found" });
            return; // Stop further processing
        }

        const deletedContact = await Contact.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Contact deleted successfully",
            deletedContact
        });
    } catch (error) {
        console.error(error);  // Log error if any
        res.status(500).json({ message: "Server Error" });
    }
});


// Export the controller
export { getContacts,
        createContact,
        getContact,
        updateContact,
        deleteContact
 };
