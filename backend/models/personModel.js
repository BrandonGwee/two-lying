const prisma = require('./prismaClient');

module.exports.createPerson = function createPerson(name, role) {
    return prisma.player
        .create({
            data: {
                name,
                role,
            },
        })
        .then((player) => {
            console.log("Player created:", player);
            return player;
        });
};

module.exports.getAllPeople = function getAllPeople() {
    return prisma.player
        .findMany ({
            include: {
                name: true,
                role: true,
                isWinner: true,
                Article: true,
            },
        })
        .then((players) => {
            console.log("All players:", players);
            return players;
        });
};

module.exports.deleteEveryone = function deleteEveryone() {
    return prisma.player
      .deleteMany({})
      .then((players) => {
        console.log('Players deleted:', players);
        return players;
      });
  };