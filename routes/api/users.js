const express = require('express');
const router = express.Router();

// @route GET localhost:3200/users
// @desc Tests users route
// @access Public

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Successful userRoutes'
    });
});

module.exports = router;