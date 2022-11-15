const express = require("express");
const router = express.Router();
const { Tile } = require("../db");

// All routes in here start with /api/tiles go here

//returns all tiles from the db
router.get("/", async (req, res, next) => {
  try {
    res.send(await Tile.findAll());
  } catch (error) {
    console.log("Error in GET /api/tiles :\n\n", error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const myVar = await Tile.create(req.body);
    res.send(myVar);
  } catch (error) {
    console.log("POST request error", error);
    next(error);
  }
});

//gets a single example from the db
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await Tile.findByPk(req.params.id));
  } catch (error) {
    console.log("Error in GET /api/tiles/:id :\n\n", error);
  }
});

//edits a single example from the db
router.put("/:id", async (req, res, next) => {
  try {
    const edit = await Example.findByPk(req.params.id);
    res.send(await edit.update(req.body));
  } catch (error) {
    console.log("Edit request error", error);
    next(error);
  }
});

//deletes a single example from the db
router.delete("/:id", async (req, res, next) => {
  try {
    const removeExample = await Example.findByPk(req.params.id);
    await removeExample.destroy();
    res.send(removeExample);
  } catch (error) {
    console.log("Delete request error", error);
  }
});

module.exports = router;
