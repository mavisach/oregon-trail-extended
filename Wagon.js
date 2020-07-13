class Wagon {

    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount()) {
            this.passengers.push(traveler)
        }

    }

    shouldQuarantine() {
        return this.passengers.some(passenger => !passenger.isHealthy)

    }

    totalFood() {
        let count = 0
        for (let index = 0; index < this.passengers.length; index++) {
            const traveler = this.passengers[index];
            count += traveler.food

        }
        return count
    }
}