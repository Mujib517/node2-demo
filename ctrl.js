module.exports = {

    get: function (req, res) {
        var products = [{
            id: 1,
            brand: 'Apple',
            model: 'Iphone 7',
            price: 750
        },
        {
            id: 2,
            brand: 'Apple',
            model: 'Iphone 6',
            price: 650
        }];


        //2xx  Success
        // 3xx Redirects
        // 4xx Client error
        // 5xx server error 

        res.status(201);
        res.json(products);
    },

    post: function post(req, res) {
        console.log(req.body);
        res.status(201);
        res.send("created");
    }
};



