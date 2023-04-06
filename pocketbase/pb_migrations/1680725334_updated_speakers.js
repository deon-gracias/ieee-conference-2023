migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zq248cmxsuelq92")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6eto1brw",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zq248cmxsuelq92")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6eto1brw",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
