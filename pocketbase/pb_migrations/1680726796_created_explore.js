migrate((db) => {
  const collection = new Collection({
    "id": "5889lejgvez3gpo",
    "created": "2023-04-05 20:33:16.716Z",
    "updated": "2023-04-05 20:33:16.716Z",
    "name": "explore",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5889lejgvez3gpo");

  return dao.deleteCollection(collection);
})
