'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovesSchema extends Schema {
  up () {
    this.create('moves', (table) => {
      table.increments()
      table.string('Move')
      table.timestamps()
    })
  }

  down () {
    this.drop('moves')
  }
}

module.exports = MovesSchema
