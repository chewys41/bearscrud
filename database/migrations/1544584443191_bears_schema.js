'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BearsSchema extends Schema {
  up () {
    this.create('bears', (table) => {
      table.increments()
      table.string('Name')
      table.string('Type')
      table.string('Weight')
      table.timestamps()
    })
  }

  down () {
    this.drop('bears')
  }
}

module.exports = BearsSchema
