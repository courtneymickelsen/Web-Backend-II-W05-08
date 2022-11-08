const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const mongooseObjId = require('mongoose').Types.ObjectId;

const getAllCustomers = async (req, res) =>{
    try {
        const response = await mongodb.getDb().db('personalProject').collection('customers').find();
        response.toArray().then((list) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(list);
        });
    } catch (error){
        console.log("this is where it's coming from");
        res.status(500).json(error);
    };
};

const getSingleCustomer = async (req, res) => {
    try {
        const userId = new ObjectId(req.body.id);
        if (!(mongooseObjId.isValid(userId))) {
            res.status(400).send({'Invalid Id' : userId});
            return;
        }
        const response = await mongodb
            .getDb()
            .db('personalProject')
            .collection('customers')
            .find({ _id: userId });
        response.toArray().then((list) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(list[0]);
        });
    } catch (error) {
        res.status(500).json(error);
    };
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
    };
};

const editCustomer = async (req, res) => {
    try {
        const userId = new ObjectId(req.body.id);
        if (!(mongooseObjId.isValid(userId))) {
            res.status(400).send({'Invalid Id' : userId});
            return;
        }
        const customerObj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
        };
        const response = await mongodb.getDb().db('personalProject').collection('customers').replaceOne({_id: userId}, customerObj);

        if (response.acknowledged) {
            res.status(204).json(response);
        } else {
            res.status(500).json(response.error || 'Something went wrong. Please try again.');
        }
    } catch(error) {
    res.status(500).json(error);
    };
}

const deleteCustomer = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        if (!(mongooseObjId.isValid(userId))) {
            res.status(400).send({'Invalid Id' : userId});
            return;
        }
        const response = await mongodb.getDb().db('personalProject').collection('customers').deleteOne({_id: userId});
        if (response.deletedCount > 0){
            res.status(200).send();
        } else {
            res.status(500).send(response.error);
        }
    } catch(error) {
        res.status(500).json(error);
    };
}

module.exports = { getAllCustomers, getSingleCustomer, createCustomer, editCustomer, deleteCustomer };