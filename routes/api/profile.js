const express = require('express');
const router = express.Router();

// @route GET localhost:3200/profile
// @desc Tests profile route
// @access Public

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Successful profileRoutes'
    });
});

module.exports = router;