const ElementNameConverter = require('./ElementNameConverter').getInstance();

test('convert "inaccurate"',() => {
    return ElementNameConverter.start().then(() => {
        expect(ElementNameConverter.convertName('inaccurate')).toBe('Iodine Nitrogen Actinium Carbon Uranium Radium Tellurium');
    })
})

test('convert "nice"',() => {
    return ElementNameConverter.start().then(() => {
        expect(ElementNameConverter.convertName('nice')).toBe('Nitrogen Iodine Cerium');
    })
})

test('convert "bitch"',() => {
    return ElementNameConverter.start().then(() => {
        expect(ElementNameConverter.convertName('bitch')).toBe('Boron Iodine Technetium Hydrogen');
    })
})

test('convert "bruh"',() => {
    return ElementNameConverter.start().then(() => {
        expect(ElementNameConverter.convertName('bruh')).toBe('Boron Ruthenium Hydrogen');
    })
})

test('convert "fuck"',() => {
    return ElementNameConverter.start().then(() => {
        expect(ElementNameConverter.convertName('fuck')).toBe('Fluorine Uranium Carbon Potassium');
    })
})

test('convert "you"',() => {
    return ElementNameConverter.start().then(() => {
        expect(ElementNameConverter.convertName('you')).toBe('Yttrium Oxygen Uranium');
    })
})

test('convert "funny"',() => {
    return ElementNameConverter.start().then(() => {
        expect(ElementNameConverter.convertName('funny')).toBe('Fluorine Uranium Nitrogen Nitrogen Yttrium');
    })
})
