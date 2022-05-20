1. https://mrpork1.github.io/singlepageapp/
2. The API that I used was https://punkapi.com/documentation/v2. The reason I used this website because it has a decent size that can be used for the scope of a project like this. It has good API endpoints that allow for searching for a specific beer, with many different ways to search.
3. Some other applications that could be used for this API are showing the beers that are sold at a bar. They could filter to exactly the beers they want into a seperate json file that can be shown on their websites or shown at the bar itself so customers can see what the options are and see pictures, and ingredients, etc. Another application that could use this API is for people that may be curious about the contents rather than just drinking it. The API shows interesting data such as the ph level, and boiling point, etc. This can be used to look very closely at the beers and compare them and find out why a certain value may be higher or lower based on the ingredients in it, and various other values.
4. Some considerations that I made for the app to be responsive and mobile-friendly were that I made sure that the margins were calculated by percentages so that the ui was changing and looking the same on every screen size. Another consideration was having a seperate input and button element that is hidden on larger size browers, but when shrunken down past a certain size that is calculated by bootstrap and react, then the more mobile friendly inputs appear and the larger inputs hide themselves to make navigation on mobile easier. Some considerations for the responsiveness was adding texts that tell the user what they are doing at all times to the API so they know. Like if the data doesn't come through, or if no results are found for their specific search.
5. I can make my app accessible to people with disabilities by adding keyboard accessiblities so that users with disabalities can naviagate the webpage and are able to access the search bar and the fitler list. Also, having alternatives in the html such as audio or asssitiveness that sight and hairing impaired disabilities are able to follow along and keep track of where they are on the website.
6. Some further changes that could be made is adding the picture that is in the API in every data element. These could be added in a boostrap dropdown element that would be neat to see what the picture of the beer actually looks like, along with more filters that can filter the data by virtually any value that each beer data point has. This could be implemented by expanding the filter dropdown that I have, adding more useStates that are able to see what filters are being chosen, and calculating the filters and sorts based on the data values (strings or doubles or ints, etc).