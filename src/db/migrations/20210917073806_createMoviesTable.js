
exports.up = function(knex) {
    return knex.schema.createTable("movies", (table) => {
      table.increments("movie_id").primary();
      table.integer("runtime_in_minutes");
      table.text("description");
      
      
      const strFields = ["title", "rating", "image_url"];
      
      strFields.map((field)=>table.string(field));
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("movies");
  };