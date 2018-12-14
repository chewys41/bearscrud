'use strict'

/*
|--------------------------------------------------------------------------
| MoveSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class MoveSeeder {
  async run () {
     await Factory
    .model('App/Models/Move')
    .create({ move: "body slam" })
    await Factory
    .model('App/Models/Move')
    .create({ move: "head bite" })
    await Factory
    .model('App/Models/Move')
    .create({ move: "claw swipe" })
    // let moves = [{ move: "body slam" }, {move: "head bite"}, {move: "claw swipe"}]
    
    // await Factory
    // .model('App/Models/Move')
    // .create(moves)
  }


  
}

module.exports = MoveSeeder
