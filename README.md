# reframe

```
{
  connect: {
    type: 'CSV',
    value: `"model","segment","price"
            "crosstrek","SUV",21000
            "impreza","sedan",16000
            "outback","SUV",25000`
  },
  data: {
    columns: [
      {name: 'model', type: 'string' },
      {name: 'segment', type: 'string' },
      {name: 'price', type: 'number' },
    ],
    rows: [
      {model: 'crosstrek', segment: 'SUV', price: 21000},
      {model: 'impreza', segment: 'sedan', price: 16000},
      {model: 'outback', segment: 'SUV', price: 25000}
    ]
  },
  view: {
    type: 'table',
    properties: {}
  }
}
```

```
{
  type: 'connect'
  to: {
    type: 'CSV',
    value: '......'
  }
}
```
