const Coffee = require("../models/coffee");

const allCoffee = async () => await Coffee.find({});

const oneCoffee = async (id) => await Coffee.findById(id);

const addCoffee = async (coffee) => await new Coffee(coffee).save();

const deleteCoffee = async (id) => await Coffee.findByIdAndDelete(id);

const deleteAllCoffee = async () => await Coffee.deleteMany({});

const editCoffee = async (id, coffee) => {
    const object = await Coffee.findById(id);
    object.name = coffee.name || object.name;
    object.origin = coffee.origin || object.origin;
    object.strength = coffee.strength || object.strength
    await object.save();
};


module.exports = {
    allCoffee,
    oneCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
    deleteAllCoffee
};