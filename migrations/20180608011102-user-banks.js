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
  db.createTable('user_banks', {
    id: {
      type: "int",
      length: 11,
      primaryKey: true
    },
    address: {
      type: 'string',
      length: 250,
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('user_banks', callback);
};

exports._meta = {
  "version": 1
};