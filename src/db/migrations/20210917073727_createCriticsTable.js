
exports.up = function(knex) {
    return knex.schema.createTable("critics", (table) => {
      const strFields = ["preferred_name", "surname", "organization_name"];
      table.increments("critic_id").primary();
      
      strFields.map((field) => table.string(field));
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable("critics");
  };