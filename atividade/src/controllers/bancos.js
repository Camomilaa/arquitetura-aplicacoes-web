module.exports.index = function(application, req, res) {
    var bancosModel = new application.src.models.bancos();

    bancosModel.getBanksInfos(function(err, result) {
        res.render("bancos/index", {bancos : result})
    })
}
