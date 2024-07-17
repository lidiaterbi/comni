const vegaLiteConditionalChannelMixin = {
  "$schema": "https://vega.example.io/schema/vega-lite/v4.json",
  "description": "A mixin that includes a Vega production rule for a Vega-Lite conditional channel definition",
  "data": {"url": "data/cars.json"},
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "Horsepower",
      "type": "quantitative"
    },
    "y": {
      "field": "Miles_per_Gallon",
      "type": "quantitative"
    },
    "color": {
      "condition": {
        "test": "datum.Horsepower > 150",
        "value": "red"
      },
      "value": "blue"
    }
  }
};
