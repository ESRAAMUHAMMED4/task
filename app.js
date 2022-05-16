const fs =require('fs')
const info = require('./studentInfo')
const yargs = require('yargs')
 

yargs.command ({
    command:'add',
    builder:{
        name:{
            type:'string',
demondOption:true,
        },
        id:{
            type:'number',
demondOption:true,

        },
        comment:{
            type:'string'
        },
        degrees:{
            type:'array',
        
            demondOption:true
        }
    
    
    },
    handler:()=>{info.addInfo(yargs.argv.name,yargs.argv.id,yargs.argv.comment,yargs.argv.degrees)

    }
})

yargs.command({

command:'delete',
builder:{
    id:{
        type:'number',
        demondOption:true
    }
},

handler:()=>{
    info.deletInfo(yargs.argv.id)

}

})

yargs.command({

    command:'read',
    builder:{
        name:{
            type:'string',
            demondOption:true
        }
    },
    
    handler:()=>{
        info.readInfo(yargs.argv.id)
    
    }
    
    })

    yargs.command({

        command:'list',
        builder:{
            id:{
                type:'number',
                demondOption:true
            }
        },
        
        handler:()=>{
            info.listInfo(yargs.argv.id)
        
        }
        
        })
    

yargs.parse()