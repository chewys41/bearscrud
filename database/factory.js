'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Bear', (faker,i,data) => {
  return {
    type:data.type,
    name:data.name,
    weight:data.weight,
    move_id:data.move_id

  }
})
Factory.blueprint('App/Models/Move', (faker,i,data) => {
  return {
    move:data.move,


  }
})
