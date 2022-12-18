const categoryRouter = require("./routes/categories")
const productRouter = require("./routes/products")


const routerApi = function(app) {
    app.use('/products', productRouter);
    app.use('/categories', categoryRouter);
};


module.exports = routerApi;