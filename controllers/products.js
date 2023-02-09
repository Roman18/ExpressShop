const products = []; // storage of products

exports.postAddProduct = (req, res, next) => {
    console.log('[DEV]: ', req.body.title); // to debug parse process
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add Product", 
        path: "/admin/add-product"
    });
};

exports.getProducts = (req, res, next) => {
     res.render('shop', {
         pageTitle: "Express Shop",
         prods: products, 
         path: "/"});
 };