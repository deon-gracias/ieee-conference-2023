migrate((db) => {
  const collection = new Collection({
    "id": "gm6hud6e2kk0p89",
    "created": "2023-04-06 07:46:44.805Z",
    "updated": "2023-04-06 07:46:44.805Z",
    "name": "schedule_timeline",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fgvqwhqh",
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
        "id": "kqxsmszw",
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
        "id": "1oojdeq3",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gm6hud6e2kk0p89");

  return dao.deleteCollection(collection);
})
