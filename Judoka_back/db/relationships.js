const User = require('../api/models/user.model')
const Dojo = require('../api/models/dojo.model')
const Service = require('../api/models/service.model')
const License = require('../api/models/license.model')
const Judoka = require('../api/models/judoka.model')
const Invoice = require('../api/models/invoice.model')
const Contrated_service = require('../api/models/contracted_service.model')

const createRelations = async () => {
  User.hasMany(Judoka)
  Judoka.belongsTo(User)

  Judoka.hasOne(License)
  License.belongsTo(Judoka)

  Dojo.hasMany(Judoka)
  Judoka.belongsTo(Dojo)

  Invoice.hasMany(Contrated_service)
  Contrated_service.belongsTo(Invoice)

  Contrated_service.hasMany(Service)
  Service.belongsTo(Contrated_service)

  Contrated_service.hasMany(User)
  User.belongsTo(Contrated_service)

  User.hasMany(Invoice)
  Invoice.belongsTo(User) 

}

module.exports = createRelations
