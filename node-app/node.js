const fs = require('fs')
const chalk = require('chalk')


const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
       // console.log(note)
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notestoKeep = notes.filter(function (note) {
       // console.log(note)
        return note.title !== title
    })
    if(notes.length==notestoKeep.length)
    console.log(chalk.blue('no note found'))
    else
    {
    console.log(chalk.red('note deteted'))
    saveNotes(notestoKeep)

    }
    
    // if (duplicateNotes.length === 0) {
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     console.log('New note added!')
    // } else {
    //     console.log('Note title taken!')
    // }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}