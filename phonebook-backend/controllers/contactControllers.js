import asyncHandler from 'express-async-handler';

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

//@desc Create contact
//@route POST /api/contacts/:id
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body)
    const { name, email, phone } = req.body;

    if( !name || !email || !phone ) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({ message: `Create Contact` });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contact
//@route UPDATE /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});


// Export the controller
export { getContacts,
        createContact,
        getContact,
        updateContact,
        deleteContact
 };
