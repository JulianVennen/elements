const ElementNameConverter = require('./ElementNameConverter').getInstance();

ElementNameConverter.start().catch(reason => {
    console.log(reason);
    process.exit(1);
}).then( () => {
    let result = '';
    for (const string of process.argv.slice(2)) {
        result += ElementNameConverter.convertName(string) + '   ';
    }
    console.log(result);
})