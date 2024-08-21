const Contact = require ("../models/Contact.js");

 const createContact = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;
    const contact = new Contact({ userId: req.user.id, firstName, lastName, phoneNumber });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

 const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.user.id });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

 const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact || contact.userId.toString() !== req.user.id) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

 const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact || contact.userId.toString() !== req.user.id) {
      return res.status(404).json({ error: "Contact not found" });
    }
    Object.assign(contact, req.body);
    await contact.save();
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

 const deleteContact = async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact || contact.userId.toString() !== req.user.id) {
        return res.status(404).json({ error: "Contact not found" });
      }
  
      await Contact.findByIdAndDelete(req.params.id);
  
      res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

  module.exports = {
    createContact,getContacts, getContact,updateContact,deleteContact
  };