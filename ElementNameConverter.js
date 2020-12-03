const axios = require('axios');

class ElementNameConverter {
    /**
     * instance
     * @type {ElementNameConverter}
     */
    static #instance = new ElementNameConverter();

    /**
     * elements of the periodic table
     * symbol length -> Map(symbol,element)
     * @type {{}}
     */
    #elements = {};

    /**
     * get Instance
     * @return {ElementNameConverter}
     */
    static getInstance() {
        return this.#instance;
    }

    /**
     * load elements
     * @return {Promise<void>}
     */
    async start(){
        console.log('Loading elements')
        const start = Date.now();
        const result = await axios.get('https://periodic-table-api.herokuapp.com');
        for (const element of result.data) {
            if (this.#elements[element.symbol.length] === undefined) this.#elements[element.symbol.length] = new Map();
            this.#elements[element.symbol.length].set(element.symbol.toUpperCase(),element);
        }
        console.log('Done! (' + (Date.now() - start) + 'ms)')
    }

    /**
     * Convert a name to a series of elements
     * @param name
     * @return {string} full element names
     */
    convertName(name) {
        name = name.toUpperCase()
        let pos = 0;
        const elements = [];

        while (pos < name.length) {
            if (this.#elements[1].has(name.charAt(pos))) {
                elements.push(this.#elements[1].get(name.charAt(pos)));
                pos ++;
            }
            else if (pos < name.length + 1 && this.#elements[2].has(name.charAt(pos) + name.charAt(pos+1))) {
                elements.push(this.#elements[2].get(name.charAt(pos) + name.charAt(pos+1)));
                pos += 2;
            }
            else if (pos > 0 && elements[elements.length-1].symbol.length === 1 && this.#elements[2].has(name.charAt(pos-1) + name.charAt(pos))) {
                elements.pop()
                elements.push(this.#elements[2].get(name.charAt(pos - 1) + name.charAt(pos)));
                pos ++;
            }
            else {
                throw new Error("No combination of elements found");
            }
        }
        return elements.map((element) => { return element.name }).join(' ');
    }
}

module.exports = ElementNameConverter