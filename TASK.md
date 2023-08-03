[[_TOC_]]

## Frontend - Task
Design and implement a frontend to display an asset list with real time prices

Assets are types of trades that are available to trade on using the Deriv platform. Deriv offers public API’s that can be accessed to query and initiate trades. Full documentation of these API’s are available here: https://api.deriv.com/
Using these, please design and implement a small web-based solution using modern patterns and frameworks as you see fit, that satisfies the requirements below taking into account any specific considerations you think is appropriate when developing high-performing and usable web pages.

Please return a zip file containing all the files and instructions (via Readme) to be able to build and execute the application on any other linux-based device.

### Asset list high-level requirements
[x] As a user, I can see a table of all the forex assets and their symbols that Deriv offers, so that I can decide what forex asset to trade on.
[ ] As a user, I can see current prices for each asset that is refreshed in real-time, so that I can decide which one I want to trade on.
[x] As a user, I can see the price change in the last 24 hour period, so that I can see the fluctuations over the day.
[x] As a user, I want to be able to see positive changes in price highlighted, so that I can identify which asset prices have increased.
[x] As a user, I want to be able to see negative changes in price highlighted, so that I can identify which asset prices have decreased.

### Non-functional requirements
- You do not have to match the styling in the example below
- You are free to use any framework you think is suitable
- Aim to spend no more than 4-5 hours on this task

### What would you do if you had more time?
- Include in your Readme file any further development you would do if you were to have more time to improve your application
 
### Documentation to review
https://api.deriv.com/docs
Websocket APIs to use and their documentation 
- https://api.deriv.com/api-explorer#active_symbols - Assets and their symbols 
- https://api.deriv.com/api-explorer#ticks_history - Price history
- https://api.deriv.com/api-explorer#ticks - Current prices for symbols