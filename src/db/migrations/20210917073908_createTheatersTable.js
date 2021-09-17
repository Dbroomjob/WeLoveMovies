exports.up = function(knex) {
    return knex.schema.createTable("theaters", (table) => {
      table.increments("theater_id").primary();
      
      const strFields = ["name", "address_line_1", "address_line_2", "city", "state", "zip"];
      
      strFields.map((field) => table.string(field));
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable("theaters");
  };