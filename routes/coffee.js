const router = require("express").Router();

const { allCoffee, oneCoffee, addCoffee, editCoffee, deleteCoffee, deleteAllCoffee } = require("../utils/coffee");
// const { allTea, oneTea, addTea, editTea, deleteTea, deleteAllTea } = require("../utils/tea");

// All coffees
router.get("/", async (req, res) => res.status(200).json({ msg: "All Coffee", data: await allCoffee() }));

router.post("/", async (req, res) => res.status(201).json({ msg: "Add a Coffee", data: await addCoffee(req.body) }));

router.delete("/", async (req, res) => res.status(200).json({ msg: "Delete all Coffee", data: await deleteAllCoffee() }));

//  One coffee
router.get("/:id", async (req, res) => res.status(200).json({ msg: "One coffee", data: await oneCoffee(req.params.id) }));

router.delete("/:id", async (req, res) => res.status(200).json({ msg: "Delete one Coffee", data: await deleteCoffee(req.params.id) }));

router.put("/:id", async (req, res) => res.status(201).json({ msg: "Update one Coffee", data: await editCoffee(req.params.id) }));

module.exports = router;