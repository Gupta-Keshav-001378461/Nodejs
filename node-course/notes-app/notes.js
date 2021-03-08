const chalk = require('chalk')
const fs = require('fs')
const getNotes = () =>{
    console.log('your notes are')
}

const addNote = (title, body)=>{
const notes = loadNotes()
const duplicateNotes = notes.filter((note) =>{
return note.title === title
})
if(duplicateNotes.length === 0)
{
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('New Note Added')
    }    
else{
    console.log('Note Title taken')
}
}


const saveNotes = (notes) =>
{
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e)
{
return []
}
}
const removeNote = (title) =>{
    const notes = loadNotes()
    const notestoKeep = notes.filter((note) =>{
    return note.title !== title
    })
    if(notes.length > notestoKeep.length)
    {
    console.log(chalk.green.inverse('Note Removed!'))    
    saveNotes(notestoKeep)
    }else{
        console.log(chalk.red.inverse('No Note Found!'))
    }

    }
    
const listNotes = () =>{
    console.log(chalk.inverse('Your Notes'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes

}