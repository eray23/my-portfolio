const Contact = require("../models/Contact");

exports.createContact = async (req, res) =>{
    await Contact.create(req.body);
    res.redirect('/');
}