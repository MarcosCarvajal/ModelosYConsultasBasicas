module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define('movies',{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title:{
            type: dataTypes.STRING(500)
        },
        rating:{
            type: dataTypes.DECIMAL
        },
        awards:{
            type: dataTypes.INTEGER(10)
        },
        release_date:{
            type: dataTypes.DATE
        },
        length:{
            type: dataTypes.INTEGER(10)
        }
    },{
        tablename:'movies',
        timestamps: false
    })
    return Movie;
}
   