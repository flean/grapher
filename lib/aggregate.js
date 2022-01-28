import { Promise } from 'meteor/promise';

Mongo.Collection.prototype.aggregate = function(pipelines, options = {}) {
    Promise.await(this.rawCollection().aggregate(pipelines).toArray())
};
