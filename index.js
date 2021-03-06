// var dataJson = require('./data/db.json')

const data = {
  "resume": {
    "names": {
      "name": "Renán",
      "surname": "Romero Ruiz"
    }
  },
  "skills": {
    "html": {
      "templates": [
        "pug",
        "jade",
        "HAML"
      ]
    },
    "css": [
      "stylus",
      "sass",
      "scss"
    ],
    "js": [
      "VanillaJS",
      "ES6",
      "TypeScript"
    ],
    "frameworks": [
      "Angular",
      "Vue"
    ],
    "libraries": [
      "React"
    ]
  },
  "conferences": [
    "Brazil JS",
    "JSConf Colombia",
    "ScaleConf Colombia"
  ],
  "experience": {
    "2018": {
      "company": "Orbis Ventures S.A.C.",
      "rol": "FrontEnd Architect"
    },
    "2015": {
      "company": "Click & Bricks S.A.C",
      "rol": "FrontEnd Developer"
    },
    "2012": {
      "company": "Nodos Digital",
      "rol": "FrontEnd Developer"
    }
  }
}

const showContent = JSON.stringify(data)

console.log('home', showContent)