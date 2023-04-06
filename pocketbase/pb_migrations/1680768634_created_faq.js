migrate((db) => {
  const collection = new Collection({
    "id": "oy2smcp8jpbrruj",
    "created": "2023-04-06 08:10:34.174Z",
    "updated": "2023-04-06 08:10:34.174Z",
    "name": "faq",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b84kujvu",
        "name": "question",
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
        "id": "hdulwxcp",
        "name": "answer",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("oy2smcp8jpbrruj");

  return dao.deleteCollection(collection);
})
