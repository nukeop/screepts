const actions = require('creeps.actions');
const bodies = require('creeps.bodies');

module.exports = {
  run: function(creep) {

    if (creep.room != creep.memory.targetRoom) {
      const exitDir = Game.map.findExit(creep.room, creep.memory.targetRoom);
      const exit = creep.pos.findClosestByRange(exitDir);
      creep.moveTo(exit);
    } else {
      var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
      if (creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }

      if (!target) {
        target = creep.pos.findClosestByPath(FIND_HOSTILE_SPAWNS);
        if (creep.attack(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      }
    }
  },

  create: function(spawn) {
    spawn.createCreep(bodies.scout, memory = {
      role: 'scout'
    });
  }
}
