"use strict";

module.exports = {
  server: {
    PORT: process.env.PORT || 1221,
  },

  database: {
    HOST:
      process.env.MONGODB ||
      "mongodb://cvele:cvelePass@posts-shard-00-00.jzao1.mongodb.net:27017,posts-shard-00-01.jzao1.mongodb.net:27017,posts-shard-00-02.jzao1.mongodb.net:27017/posts?ssl=true&replicaSet=posts-shard-0&authSource=admin&retryWrites=true&w=majority",
  },
};
