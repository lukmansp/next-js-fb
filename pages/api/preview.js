export default function handler(req, res){
    res.setPreviewData({user :'qyuqyu'})
    res.redirect(req.query.redirect)
    // example = http://localhost:3000/api/preview?redirect=/blog
}