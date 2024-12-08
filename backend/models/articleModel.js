const prisma = require('./prismaClient');

module.exports.createArticle = function createArticle(name, finder) {
    return prisma.article
        .create({
            data: {
                name,
                finder: finder,
            },
        })
        .then((article) => {
            console.log("Article created:", article);
            return article;
        });
};

module.exports.getAllArticles = function getAllArticles() {
    return prisma.article
        .findMany ({
            include: {
                name: true,
                playerID: true,
            },
        })
        .then((articles) => {
            console.log("All articles:", articles);
            return articles;
        });
};

module.exports.deleteAllArticles = function deleteAllArticles() {
    return prisma.article
      .deleteMany({})
      .then((articles) => {
        console.log('Players deleted:', articles);
        return articles;
      });
  };