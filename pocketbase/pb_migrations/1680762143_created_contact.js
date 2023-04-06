migrate((db) => {
  const collection = new Collection({
    "id": "zlaobjs5t8fp2lm",
    "created": "2023-04-06 06:22:23.023Z",
    "updated": "2023-04-06 06:22:23.023Z",
    "name": "contact",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2uzqkgqr",
        "name": "link",
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
        "id": "kgdntblf",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("zlaobjs5t8fp2lm");

  return dao.deleteCollection(collection);
})
