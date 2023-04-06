migrate((db) => {
  const collection = new Collection({
    "id": "v25tuiarw2q8jv0",
    "created": "2023-04-05 20:44:27.784Z",
    "updated": "2023-04-05 20:44:27.784Z",
    "name": "footer_links",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i4doqtuv",
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
        "id": "spelbr3l",
        "name": "link",
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
  const collection = dao.findCollectionByNameOrId("v25tuiarw2q8jv0");

  return dao.deleteCollection(collection);
})
