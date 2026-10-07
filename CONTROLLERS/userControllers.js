import express from 'express';
import users from '../DATA/users.js';


export const getAllUsers = (req, res) => {

    if(!users) {
        return res.status(400).json({message: 'NO DATAT FOUND'})
    };
    
    res.json(users)
}; 