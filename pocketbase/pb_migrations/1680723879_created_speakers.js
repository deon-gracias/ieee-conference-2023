migrate((db) => {
  const collection = new Collection({
    "id": "zq248cmxsuelq92",
    "created": "2023-04-05 19:44:39.799Z",
    "updated": "2023-04-05 19:44:39.799Z",
    "name": "speakers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tbbyqrlc",
        "name": "title",
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
        "id": "meaielog",
        "name": "subtitle",
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
        "id": "ym2mbdpo",
        "name": "link",
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
  const collection = dao.findCollectionByNameOrId("zq248cmxsuelq92");

  return dao.deleteCollection(collection);
})
