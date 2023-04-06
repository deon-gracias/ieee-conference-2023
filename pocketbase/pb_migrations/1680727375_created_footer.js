migrate((db) => {
  const collection = new Collection({
    "id": "vugoegj09admf05",
    "created": "2023-04-05 20:42:55.344Z",
    "updated": "2023-04-05 20:42:55.344Z",
    "name": "footer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "54gcidw0",
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
        "id": "vgzkb67v",
        "name": "content",
        "type": "json",
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
  const collection = dao.findCollectionByNameOrId("vugoegj09admf05");

  return dao.deleteCollection(collection);
})
