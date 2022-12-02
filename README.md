# Development

### Link to Deployed Website
https://github.com/happydragon200/development.git

### Goal and Value of the Application
The goal and value of this application is for users to narrow down foods they want to eat and especially provide people who are cognizant about their macronutrients or about vegetarianism.

### Usability Principles Considered
The aggregation increases transparency of data and information, as well as overall purchasing so that customers have as much power as possible, and the big text everywhere (Learnability) make it clear what everything does. Usability is also pretty high because there isn't too much stuff on the site to damage the user experience and the filtering and sorting all work.

### Organization of Components
My components were in hierarchy of an App -> Menu -> Series of Smaller components, including a Filtering Bar, specialized buttons for vegetarian options and resetting, and sorting.

### How Data is Passed Down Through Components
Data is passed using props, either through return statements where I specify each field or before the return statements, as variables passed to const functions.

### How the User Triggers State Changes
Any clickable button will trigger a state change unless it just sets the state to the current one. Buttons are intuitive and helpful for users and these states change because of parts of the code that make use of React's handy useState. 
