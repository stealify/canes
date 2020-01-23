@parent gen
@module {can.Component} gen/example-component <example-component>

A short description of the example-component component

@signature `<example-component>`

@body


## build


package.json
```
"scripts": {
  "deps-bundle": "steal-tools bundle --deps"
  "dev-bundle": "steal-tools bundle --dev"
},
"steal": {
  "main": "example-component",
  "directories": {
    "lib": "."
  },
  "configDependencies": [
    "live-reload",
    "node_modules/can-zone/register"
  ],
  "plugins": [
    "steal-less",
    "steal-stache"
  ],
  "envs": {
    "server-production": {
      "renderingBaseURL": ""
    }
  },
  "serviceBaseURL": ""
},
"dependencies": {
  "can-component": "^3.3.6",
  "can-connect": "^1.5.10",
  "can-define": "^1.5.4",
  "can-stache": "^3.13.1",
  "can-view-autorender": "^3.1.2",
  "can-zone": "^0.6.14",
  "steal": "^1.5.15",
  "steal-less": "^1.2.0",
  "steal-stache": "^3.1.2",
  "steal-tools": "^1.9.1",
}
```
## Use
