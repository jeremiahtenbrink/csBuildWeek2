define({ "api": [
  {
    "type": "get",
    "url": "/move",
    "title": "Gets the map",
    "version": "1.0.0",
    "name": "GetMap",
    "group": "Map",
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'http://localhost:5000/',\n        timeout: 1000,\n});\nrequest.get('/move');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Map",
          "content": "\n{  \"4\": {\n       \"room_id\": 4,\n       \"title\": \"A misty room\",\n       \"terrain\": \"NORMAL\",\n       \"elevation\": \"0\",\n       \"description\": \"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.\",\n       \"coordinates\": \"(61,60)\",\n       \"items\": \"{}\",\n       \"exits\": {\n           \"n\": 23,\n           \"e\": 13,\n           \"w\": \"?\"\n       },\n       \"messages\": null\n   }, \"13\": {\n       \"room_id\": 13,\n       \"title\": \"A misty room\",\n       \"terrain\": \"NORMAL\",\n       \"elevation\": \"0\",\n       \"description\": \"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.\",\n       \"coordinates\": \"(62,60)\",\n       \"items\": \"{}\",\n       \"exits\": {\n           \"e\": 15,\n           \"w\": 4\n       },\n       \"messages\": null\n   },\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/move.js",
    "groupTitle": "Map",
    "sampleRequest": [
      {
        "url": "http://localhost:5020/move"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/move/title",
    "title": "Gets the map with titles as the keys",
    "version": "1.0.0",
    "name": "GetMapTitle",
    "group": "Map",
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'http://localhost:5000/',\n        timeout: 1000,\n});\nrequest.get('/title');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Map",
          "content": "\n{  \"A misty room\": {\n       \"room_id\": 4,\n       \"title\": \"A misty room\",\n       \"terrain\": \"NORMAL\",\n       \"elevation\": \"0\",\n       \"description\": \"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.\",\n       \"coordinates\": \"(61,60)\",\n       \"items\": \"{}\",\n       \"exits\": {\n           \"n\": 23,\n           \"e\": 13,\n           \"w\": \"?\"\n       },\n       \"messages\": null\n   }, \"A misty room\": {\n       \"room_id\": 13,\n       \"title\": \"A misty room\",\n       \"terrain\": \"NORMAL\",\n       \"elevation\": \"0\",\n       \"description\": \"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.\",\n       \"coordinates\": \"(62,60)\",\n       \"items\": \"{}\",\n       \"exits\": {\n           \"e\": 15,\n           \"w\": 4\n       },\n       \"messages\": null\n   },\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/move.js",
    "groupTitle": "Map",
    "sampleRequest": [
      {
        "url": "http://localhost:5020/move/title"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/move/shop",
    "title": "Gets the map with titles as the keys",
    "version": "1.0.0",
    "name": "GetRoomNumberOfTheShop",
    "group": "Map",
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'http://localhost:5000/',\n        timeout: 1000,\n});\nrequest.get('/title');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Map",
          "content": "\n{\n       \"room_id\": 5,\n       \"title\": \"shop\",\n       \"terrain\": \"NORMAL\",\n       \"elevation\": \"0\",\n       \"description\": \"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.\",\n       \"coordinates\": \"(61,60)\",\n       \"items\": \"{}\",\n       \"exits\": {\n           \"n\": 23,\n           \"e\": 13,\n           \"w\": \"?\"\n       },\n       \"messages\": null\n },",
          "type": "json"
        }
      ]
    },
    "filename": "routes/move.js",
    "groupTitle": "Map",
    "sampleRequest": [
      {
        "url": "http://localhost:5020/move/shop"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/move",
    "title": "Post new route to the server",
    "version": "1.0.0",
    "name": "PostRoute",
    "group": "Move",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dir",
            "description": "<p>The direction you moved from the prev to the next.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "prev_room",
            "description": "<p>The room you moved out of.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "next_room",
            "description": "<p>The room you moved into.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'http://localhost:5000/',\n        timeout: 1000,\n});\nrequest.post('/move', {\n  dir: \"n\",\n  prev_room: {room_id: \"1\" ...},\n  new_room: {room_id: \"2\" ...}\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Updated map",
          "content": "{  \"4\": {\n        \"room_id\": 4,\n        \"title\": \"A misty room\",\n        \"terrain\": \"NORMAL\",\n        \"elevation\": \"0\",\n        \"description\": \"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.\",\n        \"coordinates\": \"(61,60)\",\n        \"items\": \"{}\",\n        \"exits\": {\n            \"n\": 23,\n            \"e\": 13,\n            \"w\": \"?\"\n        },\n        \"messages\": null\n    }, \"13\": {\n        \"room_id\": 13,\n        \"title\": \"A misty room\",\n        \"terrain\": \"NORMAL\",\n        \"elevation\": \"0\",\n        \"description\": \"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.\",\n        \"coordinates\": \"(62,60)\",\n        \"items\": \"{}\",\n        \"exits\": {\n            \"e\": 15,\n            \"w\": 4\n        },\n        \"messages\": null\n    },\n \n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/move.js",
    "groupTitle": "Move",
    "sampleRequest": [
      {
        "url": "http://localhost:5020/move"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
