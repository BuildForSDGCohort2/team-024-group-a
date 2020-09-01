const bookshelf = require('../bookshelf');


const User = bookshelf.model('Users', {
    tableName: "users",
    validPassword: function(){
        return "testing";
    }
})

module.exports = User;