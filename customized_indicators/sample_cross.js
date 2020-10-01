// Pinescript Code 
//sample pinescript 
// //@version=4
// // This source code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// // © jtz9317

// study(title="Crossover example", overlay=false)

// // Calculate values
// rsiValue = rsi(close, 14)
// rsiEMA = ema(rsiValue, 5)

// // Highlight when the RSI crosses over its EMA
// bgcolor(color=crossover(rsiValue, rsiEMA) ? color.fuchsia : na, transp=90)

// // Plot values and show overbought and oversold levels
// plot(series=rsiValue, color=color.orange)
// plot(series=rsiEMA, color=color.teal, linewidth=2)

// hline(price=30)
// hline(price=70)


// Customize Indicator and Signals
widget = new TradingView.widget({

    //...
  
    custom_indicators_getter: function (PineJS) {
      return Promise.resolve([
        {
          // Replace the <study name> with your study name
          // The name will be used internally by the Charting Library
          name: "Crossover_Example",
          metainfo: {
            _metainfoVersion: 40,
            id: "SampleCrossover@tv-basicstudies-1",
            scriptIdPart: "",
            name: "SampleCrossover",
            description: "study the number of cross over of price over BB line regarding the number of std",
            //...
          },
        },
        //...
      ]);
    },
  
    //...
  });
  