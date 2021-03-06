'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bear extends Model {
    move(){
        return this.hasOne("App/Models/Move")
    }
}

module.exports = Bear
