
exports.up = function(knex) {
    return knex.schema.createTable("password_reset", function(table){
        table.string("email").index().unique();
        table.string("token").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("password_reset");
};
