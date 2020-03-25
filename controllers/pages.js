// para tratar individualmente a requisicao e resposta de cada endpoint
const page1 = (req,res) => {
    res.render('page1')
};


const page2 = (req,res) => {
    res.render('page2')
}


const page3 = (req,res) => {
    res.render('page3')
}


module.exports = { page1, page2, page3 }