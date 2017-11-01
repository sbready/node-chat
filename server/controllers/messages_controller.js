let messages = [];
let id = 0;

module.exports = {
    create(req, res){
        let newMessages = {
            id: id,
            text: req.body.text,
            time: req.body.time
        }
        id++;
        messages.push(newMessages);
        res.status( 200 ).send( messages );
    },

    read(req, res){
        res.status( 200 ).send( messages );
    },

    update(req, res){
        let id = parseInt(req.params.id, 10);
        let messagesToUpdate = messages.filter( function (messages){
            return messages.id === id;
        })
        messagesToUpdate[0].text = req.body.text;
        res.status( 200 ).send( messages );
    },

    delete(req, res){
        let id = parseInt(req.params.id, 10);
        messages = messages.filter( ( messages ) => messages.id !== id);
        res.status( 200 ).send ( messages );
    }
}