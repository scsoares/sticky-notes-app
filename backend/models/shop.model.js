module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shop", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        }
    })

    return Shop;
}