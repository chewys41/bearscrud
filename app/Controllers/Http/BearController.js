'use strict'  
// when typing use strict you have to have const and let
//let bears = [{ id: '0', Type: 'Grizzly', Name: 'Al', Weight: '1000lb' }]
const Bears=use('App/Models/Bear')
const Moves = use('App/Models/Move')
class BearController {
    



    bearget({request, response}) {
        response.send(bears)
    }

    bearcreate({request, response}) {
        const bear = request.post()
        
        bears.push(bear)
        response.send(bears)
    }
    
    beardelete({request, response}) {
        const body = request.post()

        bears = bears.filter((eachItem) => {
            return eachItem.id !== body.id
        })
        response.send(bears)
    }
    bearupdate({request,response}){

        // Grab info from postman and save it into body
        const body = request.post()

        //Map or iterate over each bear
        const newBears = bears.map((thisBear)=>{
            //check to see if the current bear we are mapping over is the same id as the info from postman
            if(thisBear.id === body.id){
                return body
            }else{
                return thisBear
            }
        })
        response.send(newBears)

    }


//     const User = use('App/Models/User')

// const user = await User.find(1)
// const posts = await user.posts().fetch()
   async getBearsByMove({request, response, params:{id}}) {
        
        const move = await Moves.find(id);
        const bears = await move.bear().fetch();
    
        response.json({
            data:bears
        })
    };
    

}

module.exports = BearController
