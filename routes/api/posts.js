const express = require('express');
const router = express.Router();

// @route GET localhost:3200/posts
// @desc Tests posts route
// @access Public

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Successful postRoutes'
    });
});

module.exports = router;