function gameObject(){
const objball={
    home:{
        teamName:'Brooklyn Nets',   
        colors:' Black, White',
        players:{
           player1: {name:'Alan Anderson',
           
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1},
            
    
        player2: {name:'Alan Anderson',
           
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1},
            
        
        player3: {name:'Alan Anderson',
           
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1}
        
        }
    },
    
    away:{
        teamName:'Charlotte Hornets',   
        colors:' Turquoise, Purple',
        players:{
           player1: {name:'Jeff Adrien',
           
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1},
            
    
        player2: {name:'Jeff Adrien',
           
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1},
            
        
        player3: {name:'Jeff Adrien',
           
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1}
        
        }
    }
    
}
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
  console.log(homeTeamName())