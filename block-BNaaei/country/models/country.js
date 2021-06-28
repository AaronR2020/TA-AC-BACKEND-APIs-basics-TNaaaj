var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema(
  {
    name: String,
    //populate this
    states: [{ type: Schema.Types.ObjectId, ref: 'State' }],
    continent: String,
    population: Number,
    religions: Number,
     //populate this
    neighbouring_countries: [{ type: Schema.Types.ObjectId, ref: 'Country' }],
    area: Number,
  },
  { timestamps: true }
);

module.exports =mongoose.model('Country', countrySchema);
