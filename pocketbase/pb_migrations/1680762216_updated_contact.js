migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zlaobjs5t8fp2lm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jo2kldem",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "phone",
        "email",
        "link"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zlaobjs5t8fp2lm")

  // remove
  collection.schema.removeField("jo2kldem")

  return dao.saveCollection(collection)
})
