'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('user', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: 'string',
      length: 100
    },
    lastName: {
      type: 'string',
      length: 45
    },
    email: {
      type: 'string',
      length: 250,
      notNull: true
    },
    password: {
      type: 'string',
      length: 100,
      notNull: true
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('user', callback);
};

exports._meta = {
  "version": 1
};