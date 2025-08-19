//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc Create contact
//@route POST /api/contacts/:id
//@access public
const createContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update contact
//@route UPDATE /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
}


// Export the controller
export { getContacts,
        createContact,
        getContact,
        updateContact,
        deleteContact
 };
