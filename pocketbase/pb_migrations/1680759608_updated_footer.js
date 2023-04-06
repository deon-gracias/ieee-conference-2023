migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vugoegj09admf05")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njr3gxev",
    "name": "content",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "v25tuiarw2q8jv0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vugoegj09admf05")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njr3gxev",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "v25tuiarw2q8jv0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
