migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oy2smcp8jpbrruj")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oy2smcp8jpbrruj")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
