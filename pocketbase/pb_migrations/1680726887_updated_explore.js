migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5889lejgvez3gpo")

  // remove
  collection.schema.removeField("o4ekuh2q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sg1h7vp8",
    "name": "link",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qzr8ekrk",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5889lejgvez3gpo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o4ekuh2q",
    "name": "field1",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("sg1h7vp8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qzr8ekrk",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
