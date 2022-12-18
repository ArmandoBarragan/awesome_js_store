const express = require('express');


var router = express.Router();


router.get("/:id/", (req, res) => {
    const { id } = req.params;
    res.json({
        "id": id,
        "name": "Celular",
        "price": 3000
    });
});


module.exports = router;