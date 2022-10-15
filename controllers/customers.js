const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllCustomers = async (req, res) =>{
    const result = await mongodb.getDb().db('personalProject').collection('customers').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingleCustomer = async (req, res) => {
    const userId = new ObjectId(req.body.id);
    const result = await mongodb
        .getDb()
        .db('personalProject')
        .collection('customers')
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createCustomer = async (req, res) => {
    try {
        const customerObj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
        };
        const response = await mongodb.getDb().db('personalProject').collection('customers').insertOne(customerObj);

        if (response.acknowledged) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Something went wrong. Please try again.');
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { getAllCustomers, getSingleCustomer, createCustomer };