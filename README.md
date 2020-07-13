# Waterfalls of Oregon!
### A web application for waterfall data

Waterfalls of Oregon is a web application that allows a user to view existing waterfall data stored in the database, add new waterfalls to the database, edit existing waterfalls, or delete waterfalls from the database. Note that this app was built with Oregon in mind, but a user can input information for anywhere in the world and the data will be stored correctly and render an icon on the map.

The front end is built with:
- React
- Bootstrap
- Leaflet

The back end is built with:
- Django (Python)

The back end is hosted on a Window's provisioned AWS EC2 instance, with the database being ran on an AWS RDS PostgreSQL instance. [Click here to view the back end repository.](https://github.com/drmeloy/waterfalls)

### Pages and navigation:

##### Home page
The home page of the app displays a Leaflet map with the locations of the waterfalls dynamically rendered as waterfall icons. The user can click any of the waterfall icons on the map to view that waterfall's information. If a user adds a new waterfall to the database or deletes a waterfall from the database, that waterfall's icon will be automatically added to or removed from the map.

Beneath the map is the list of all waterfalls that exist in the database. Every waterfall has a name, height, latitude, longitude, and optional description. To the right of the waterfall's information are the update and delete buttons, which the user can click to perform the respective action. Clicking Update will bring the user to the update form, with that waterfall's information dyncamically filled into the form. Clicking Delete will remove that waterfall from the database, rending the updated list of waterfalls without having to leave or reload the home page.

The header of the home page contains two links. The first will navigate back to or refresh the home page by the page title "Waterfalls of Oregon!", while the second brings the user to the create waterfall form via the "Create new waterfall" text.

##### Create or update waterfall page

The form to create a new waterfall is the same form for updating an existing waterfall. If the user navigates here via the "Create new waterfall" link in the header, the form will be empty and allow for the creation of a new waterfall. If the user navigates here via the "Update" button of an existing waterfall, the form will be automatically filled in with that waterfall's information, and any changes made will update that waterfall. In either case, clicking "Submit" will bring the user back to the home page with the appropriate changes rendered. If the user wishes to return to the home page without creating any changes, they may click the "Waterfalls of Oregon!" home button in the header.

The form for creating or updating a waterfall has built-in validation. The fields for name, height, latitude, and longitude are required, so a form cannot be submitted without input in these fields. Furthermore, because the waterfall icon on the map depends on the inputted latitude and longitude, it is important that the latitude and longitude be only numbers and symbols and not include the cardinal direction. For example, 122.65887 W is written as -122.65877. If a user tries to submit the form with the cardinal directions in the latitude or longitude, they will receive an error instructing them to correct the input.

### Troubleshooting

##### No data being loaded, unable to add or update waterfalls

Upon loading the page, the user should see the existing waterfall data load and map icons render. If the data is not loading, this is most likely an issue with security certificate permissions. Due to restrictions in place on the back end database, the user's browser might not allow access to the database. If this is happening to you, you can check security settings in your browser, ensuring that proxy settings are disabled. You can also try clearing the cache in your browser and reloading the page.

##### My browser warns me that this site is not trusted

Due to restrictions in place on the backend database, this is not an unexpected occurance. Click advanced, and continue to the site despite the warning. The page poses no risk to your computer and should load correctly.

##### Other issues

If you are experiencing issues using the site, please feel free to send an email with your situation and I will do my best to resolve the issues for you. You may email me at drmeloy@gmail.com.

# Thank you for using Waterfalls of Oregon!