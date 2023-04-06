migrate((db) => {
  const collection = new Collection({
    "id": "cfnj2tvpp8ls2qo",
    "created": "2023-04-06 07:46:52.000Z",
    "updated": "2023-04-06 07:46:52.000Z",
    "name": "schedule",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tpo7ffdl",
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
        "id": "g5kitxyq",
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
        "id": "ymubwfsd",
        "name": "timeline",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "gm6hud6e2kk0p89",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("cfnj2tvpp8ls2qo");

  return dao.deleteCollection(collection);
})
