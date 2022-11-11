const { green, red } = require("chalk");
const { db, Tile } = require("./server/db");

//Start of seed data

const tiles = [
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
  {
    title: "Laser engraved thing",
    imageUrl:
      "https://i.pinimg.com/736x/a4/6d/d6/a46dd6e5651a1c605f19e03afdca024b.jpg",
  },
];

//End of Seed Data

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      tiles.map((tile) => {
        return Tile.create(tile);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
  try {
    await seed();
    console.log(green("Seeding success!"));
  } catch (err) {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}
