const actions = require('creeps.actions');
const bodies = require('creeps.bodies');

module.exports = {
  run: function(creep) {

    if (creep.room.energyAvailable < creep.room.energyCapacityAvailable) {
      if (creep.carry.energy < creep.carryCapacity) {
        if (!actions.withdrawFromNearestContainer(creep)) {
          if (!actions.withdrawFromNearestStorage(creep)) {
            actions.recycleSelf(creep);
          }
        }
      }
    } else {
      if (!actions.dumpEnergyAt(creep, STRUCTURE_SPAWN)) {
        if (!actions.dumpEnergyAt(creep, STRUCTURE_EXTENSION)) {
          actions.recycleSelf(creep);
        }
      }
    }
  },

  create: function(spawn) {
    return spawn.createCreep(bodies.createFastest(spawn, base = [CARRY, CARRY, MOVE, MOVE]), memory = {
      role: 'spawnsupplier'
    });
  }
}
