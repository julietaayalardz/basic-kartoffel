const fs = require('fs')
const chalk = require('chalk');

const loadNotes = function(){
    try {
        const buffer = fs.readFileSync('notes.json')
        const data = buffer.toString()
        return JSON.parse(data)
    } catch(e){
        return []
    }
}

const saveNotes = function(notes){
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

const addNote = (title, content) => {
    const notes = loadNotes()
    // const duplicate = notes.filter( (note) => note.title === title)
    const duplicate = notes.find((note) => note.title === title)
    if(!duplicate){
        notes.push({
            title: title,
            content: content
        })
        console.log(chalk.greenBright("New note added!"))
    }
    else{
        console.log(chalk.redBright("Note already exists!"))
    }
    saveNotes(notes)
}

const removeNote = function(title){
    const notes = loadNotes()
    /* const keep = notes.filter(function(note){
        return note.title !== title
    }) */
    const keep = notes.filter((note) => note.title !== title)
    if(keep.length === notes.length){
        console.log(chalk.redBright("Note not found!"))
    }
    else
    {
        console.log(chalk.greenBright("Note removed!"))
    }
    saveNotes(keep)
}

const listNotes = function(){
    const notes = loadNotes()
    console.log(chalk.cyanBright("Your notes:"));
    notes.forEach(note => {
        console.log(chalk.cyanBright(" - " + note.title));
    });
}

const readNote = function(title){
    const notes = loadNotes()
    const match = notes.find((note) => note.title === title)
    if(match){
        console.log(chalk.cyanBright(match.title))
        console.log(chalk.cyanBright(match.content))
    }
    else{
        console.log(chalk.redBright("Note not found!"))
    }
}

module.exports = {
    add: addNote,
    remove: removeNote,
    list: listNotes,
    read: readNote
};