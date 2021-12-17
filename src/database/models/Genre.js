module.exports = (sequelize, dataTypes) => {
    const genre = sequelize.define('genres',{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING(100)
        },
        ranking:{
            type: dataTypes.INTEGER,
        }
    },
    {
        tablename:'genres',
        timestamps: false
    })
    return genre;
}