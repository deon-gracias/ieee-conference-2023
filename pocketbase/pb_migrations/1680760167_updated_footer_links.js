migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v25tuiarw2q8jv0")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v25tuiarw2q8jv0")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
