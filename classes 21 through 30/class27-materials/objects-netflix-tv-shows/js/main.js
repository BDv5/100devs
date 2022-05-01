//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTvShow {
    constructor(showName, leadActor, runTime, rating) {
        this.showName = showName
        this.leadActor = leadActor
        this.runTime = runTime
        this.rating = rating
    }
    trailer() {
        alert('2 minute trailer here')
    }
    play(){
        console.log('playing....')
    }
    stop(){
        console.log('stopping...')
    }
}

let bridgerton = new NetflixTvShow('Bridgerton', 'somedudesname', '45 minutes', 'PG13')