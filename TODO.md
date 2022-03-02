# Remaining Functional Tasks

Favorites Section
   - [ ] Show the favorites data
      - [x] Show the building images
      - [x] Show the private notes
      - [x] Show the public notes
      - [x] Show the recommend status
      - [ ] Show a link to the website
      - [ ] Stretch: Link to a building details page (needs to be built)
   - [ ] Allow the user to update the favorites
      - [x] Break the component into two: FavoriteItem and FavoriteList
         - [x] Move in the render function for the <tr>
         - [x] Move over the local states
         - [x]Move over the 3 handler functions
         - [x] Pass in the favorite object from the map as a prop like 
            <FavoriteItem favorite={favorite} />
      - [x] FavoriteItem should have local state to track the private notes
      - [x] FavoriteItem should have local state to track the public notes
      - [ ] FavoriteItem should have a button to turn on or off edit mode
      - [x] FavoriteItem should dispatch a PUT for private note, public note, and recommend
      - [x] Sagas for private and public notes should work properly
      - [x] Recommend Saga should work properly

Building List
   - [ ] Show the number of recommendations for each building
   - [ ] Stretch: Create a details page that shows the building info and public notes
   