'use strict'
let bears = [{ id: '0', Type: 'Grizzly', Name: 'Al', Weight: '1000lb' }]

class BearController {

    bearget({request, response}) {
        response.send(bears)
    }

    bearcreate({request, response}) {
        const bear = request.post()
        
        bears.push(bear)
    }
    
    beardelete({request, response}) {
        const body = request.post()

        bears = bears.filter((eachItem) => {
            return eachItem.id !== body.id
        })
    }
}

module.exports = BearController
