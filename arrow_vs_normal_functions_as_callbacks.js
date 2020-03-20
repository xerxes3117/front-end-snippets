class newClass {
    funcOne = () => {console.log('inside funcOne'); return 23} 

    funcTwo = () => {
       return this.funcOne()
    }

    funcThree = function() { console.log('inside funcThree'); return 23} 

    funcFour() {
       return this.funcThree()
    }

    async funcFive() {
        var a = await this.timer(this.funcTwo, 3000) //works because funcTwo is an arrow function
        return a
    }
    
    async funcSix() {
        var a = await this.timer(this.funcFour, 3000) //error, this.funcFour is undefined
        return a
    }

    timer(callback, ms) {
       return new Promise(resolve => setTimeout(callback, ms))
    }

}
