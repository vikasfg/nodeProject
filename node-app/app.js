const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./node.js')
//const arg = yargs.argv
yargs.version('1.1.0')
debugger
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler:  (argv) => {
        console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler:  () =>
        console.log('Listing out all notes')
    
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler:  () =>
        console.log('Reading a note')
    
})

yargs.parse()
//console.log(yargs.argv)
//  console.log(chalk.blue('Hello world!'));
// console.log(process.argv[2])


// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// log(chalk.blue.bgRed.bold('Hello world!'));
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.red('70%')}
// `);

// const validator = require('validator')

// console.log(validator.isEmail('vikas1213@faridagupta.com'))
// const getNme = require('./utils.js')
// const name ='vikasdubey'

// console.log(getNme)