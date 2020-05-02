const notes = require('./notes.js');
const yargs = require('yargs')
// const validator = require('validator')

yargs.version('1.0.0')      // Customize project version

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        content: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.add(argv.title, argv.content)
})

yargs.command({
    command: 'remove',
    describe: 'Remove note by title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.remove(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'List existing notes by title',
    handler: () => notes.list()
})

yargs.command({
    command: 'read',
    describe: 'Display content of note selected by title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.read(argv.title)
})

yargs.parse()