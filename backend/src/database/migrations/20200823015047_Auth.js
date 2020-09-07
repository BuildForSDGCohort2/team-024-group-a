
exports.up = function(knex) {
    return knex.schema.createTable("users", function(table){
        table.increments("id");
        table.string("username").unique().notNullable();
        table.string("password").notNullable();
        table.string("role").notNullable();
        table.string("url").nullable();
        table.text("device_info").nullable()
        table.string("remember_token").nullable();
        table.timestamp("updated_at").defaultTo(knex.fn.now())
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
