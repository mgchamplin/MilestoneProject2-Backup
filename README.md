# MilestoneProject2

## Required packages

npm init -y
npm i express
npm i dotenv
npm i mongoose
npm install method-override
npm i express-react-views
npm install react-bootstrap bootstrap

### Project Milestone2 Airbnb Review app

Airbnb Review site is an app where users can leave reviews for their favourite places! Here are the ROUTES:

| Method | Paths | Purpose |

| ------ | --------------------| ------------------------------------------------ |

| GET | home | Display the list of the airbnb sites |

| GET | newform | Provide a Form to create new site |

| GET | one site | show the details of the site + review comments |

| GET | Edit Form | provide edit form to create new site |

| POST | | update the DB+UI with new sites data (postform)|

| PUT | one site | update DB_UI with edited details of one site |

| DELETE | one site | delete site from DB and update on UI |

| GET | | show all comment reviews for selected sites |

#### Data Stored for airbnb users, sites, reviews table

USERS

| Data | Description |

| -------- | ---------------------------- |

| username | the login name (string) |

| password | login passowrd (string) |

| email | users email (string) |

SITES

| Data | Description |

| -------- | -------------------------------------------- |

| name: | The name of the place (String) |

| image: | The image of the place (String) |

| city: | The city of the place is located (String) |

| state: | The state of the place is located (String) |

| ave_price: | The ave price of the place (String) |

| total_stars:| the total stars of rating(Number) |

| num_reviews:| The number of reviews for the place (Number) |

| ave_rating: | The ave rating for the place (Number) |

REVIEWS
| Data | Description |

| -------- | ---------------------------- |

| reviewer:| the name of reviewer (string) |

| stars: | the stars for the place (number) |

| date: | the date (string) |

| review: | the content of review (string) |

|-----------The inspiration for the application-------------|

We wanted to create an application that users can leave reviews for their favorite airbnb sites and be able to share their stories. This is because it's about how the host create the memorable stays for their customers and how they have turned their spaces into a social media star. People might come from different countries, different background and with these reviews and images, it will help people to better understand the airbnb sites that they are viewing.

|-----------How to use the application-------------|

When Admin is signed in, he/she will have access to the feature "add site" ,he/she can add "site name", "site Photo", "City", "State" and "Average price" to the website by entering information in the blank boxes. Then the information will be passed and displayed on the home page. Admin can also go into each individual listing to edit/delete the post.

For first time user, they can click on the login on the navbar right side to get to the login page. Once they are in the login page, they can click on "click here to register" to create their account. It should bring them to a "Registration Page". Once the account is created, registered user will have access to add their site reviews to the listings. They can also go into "search and sort" to look for listings and will have options to sort different catergories based on what they are looking for.

For registered user, they can just click on the "login" to get to the login page and then enter their information in the blank boxes.

For an unregister (guest) user, then can visit the website, display and sort the AirBnB sites, and can read the reviews. Creation of reviews and sites will require the higher access levels mentioned above.

Inside each listing, you will find the location, image, state, city, number of reviews, site reviews and so on. The reviews are basically showing people how they feel about these Airbnb locations.

|----------The Technologies used to build the application-------------|

Node.js, JavaScript XML, Express, Mongoose, MongoDB, React Bootstrap, npm packages

|-----------unfinished functionality-------------|

-Planning to have a drop down list to sort user's reivew based on their names.

-A google map for each site to showing driving directions.

-A page to display users and their review contributions
