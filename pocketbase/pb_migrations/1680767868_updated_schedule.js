migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cfnj2tvpp8ls2qo")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cfnj2tvpp8ls2qo")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
