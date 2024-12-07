const prisma = require('./prismaClient');

module.exports.createNote = function createNote(text) {
    return prisma.notes
        .create({
            data: {
                text,
            },
        })
        .then((notes) => {
            console.log("Note created:", notes);
            return notes;
        });
};

module.exports.getAllNotes = function getAllNotes() {
    return prisma.notes
        .findMany ({
            include: {
                text: true,
            },
        })
        .then((notes) => {
            console.log("All notes:", notes);
            return notes;
        });
};

module.exports.deleteAllNotes = function deleteAllNotes() {
    return prisma.notes
      .deleteMany({})
      .then((notes) => {
        console.log('Notes deleted:', notes);
        return notes;
      });
  };