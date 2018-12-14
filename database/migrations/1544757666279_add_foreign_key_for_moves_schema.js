'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddForeignKeyForMovesSchema extends Schema {
  up () {
    this.table('bears', (table) => {
      table.integer('move_id').unsigned().references('id').inTable('moves')
      // alter table
    })
  }

  down () {
    this.table('bears', (table) => {
      table.dropColumn('move_id')
    })
  }
}

module.exports = AddForeignKeyForMovesSchema
