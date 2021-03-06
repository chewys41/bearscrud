'use strict'

/*
|--------------------------------------------------------------------------
| BearSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
// table.string('id')
//       table.string('Name')
//       table.string('Type')
//       table.string('Weight')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BearSeeder {
  async run() {
    const Griz = await Factory
      .model('App/Models/Bear')
      .create({ type: "Grizzly", name: "Mr. Bear", weight: "325", move_id: 1 })

    const Polar = await Factory
      .model('App/Models/Bear')
      .create({ type: "Polar Bear", name: "Peanuts", weight: "326", move_id: 2 })

    const Panda = await Factory
      .model('App/Models/Bear')
      .create({ type: "Panda", name: "Bambooni", weight: "111", move_id: 3 })

    const Koala = await Factory
      .model('App/Models/Bear')
      .create({ type: "Koala", name: "Teddy", weight: "25", move_id: 2 })
  }


}

module.exports = BearSeeder
