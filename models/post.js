'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Profile, { 
        foreignKey: 'profileId',
      })
      // define association here
    }
  }
  Post.init({
    post: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 180]
      }
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model:'Profiles',
        key: 'id',
      } 
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};