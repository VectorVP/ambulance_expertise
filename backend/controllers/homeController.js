const asyncHandler = require('express-async-handler')
const New = require('../models/newsModel')
const User = require('../models/userModel')

// @desc    Fetch all doc's news
// @route   GET /api/home
// @access  Public
const getNews = asyncHandler(
    async (req, res) => {
        console.log("req.user ", req.user)
        const news = await New.find({})
        const docs = await User.find({ isDoc:true })
        res.json({news, docs})
    }
)

// @desc    Create a new by doctor
// @route   POST /api/home/create
// @access  Doctor
const createNew = asyncHandler(
    async (req, res) => {
        const {
            image,
            type,
            descr,
            text,
            doc
        } = req.body
        const newNew = await New.create({
            image: "/images/3.jpg",
            type: type,
            descr: descr,
            text: text,
            doc: doc,
            likes: 0,
        })
        res.status(201).json({message: 'New added'})
    }
)

// @desc    Create new review 
// @route   POST /api/home
// @access  Private
const createProductReview = asyncHandler(
    async (req, res) => {
    
    const { 
        new_id
    } = req.body

    const user = await User.findById(req.user._id)
    const this_new = await New.findById(new_id)
    if (this_new) {

        const alreadyReviewed = this_new.users.find(n => 
            n.user.toString() === req.user._id.toString())
            
        if (alreadyReviewed) {
            res.status(400)
            throw new Error('New is already reviewed')
        }
    
        const user = {
            user: req.user._id
        }
    
        this_new.users.push(user)
        this_new.likes = this_new.users.length

        await this_new.save()
        res.status(201).json({message: 'Review added'})
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
  }
)

module.exports = { getNews, createProductReview, createNew }