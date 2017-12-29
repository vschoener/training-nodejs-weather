const yargs = require('yargs');

module.exports = () => {
    yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        },
        u: {
            demand: false,
            alias: 'units',
            describe: 'Units to use',
            choices: ['auto', 'si', 'ca', 'uk2', 'us']
        }
    })
    .help()
    .alias('help', 'h');

    return yargs;
};
