module.exports = function(application) {
    application.get('/', function(req, res) {
        application.atividade.src.controllers.bancos.index(application, req, res);
    })
}
