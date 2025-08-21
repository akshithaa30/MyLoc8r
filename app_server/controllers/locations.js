const homelist=(req, res) => {
    res.render('index', { title: 'MyLoc8r' });
};
const locationInfo=(req, res) => {
    res.render('index', { title: 'Location Info' });
};  
const addReview=(req, res) => {
    res.render('index', { title: 'Add Review' });
};
module.exports={
    homelist,
    locationInfo,
    addReview
}