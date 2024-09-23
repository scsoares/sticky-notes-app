module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("note", {
        content: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        }
    })

    return Note;
}