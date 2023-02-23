## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## General Assembly, Software Engineering Immersive Project-2

## Completed over 2 days in a group of 2.

# FBI's Most Wanted

## Overview

The second project is to **build a React application** that consumes a **public API**.

<p>FBI’s Most Wanted - a web app that shows you the most wanted fugitives in America consuming the FBI’s API. Once you click on a suspect's card you open their information. You can see what information the FBI holds on that person as well as some links to download their wanted poster and where to submit a tip if you have information concerning that person. There is also a search and categories list to categorise their crimes.</p>

### Technical Requirements

Your app must:

- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components** - At least one classical and one functional.
- **The app can have a router** - with several "pages' ', this is up to your discretion and if it makes sense for your project.
- **Include wireframes** - that you designed before building the app.
- **Be deployed online** and accessible to the public.

---

## My Teammates were:

- [Nathan Harris](https://github.com/nedd-ludd)

---

## Technologies used

- HTML5
- SCSS
- JavaScript (ES6)
- React
- NPM
- Bulma
- APIs ([FBI API](https://api.fbi.gov/wanted/v1))
- Routers
- Axios
- Git and GitHub
- Adobe Illustrator
- Google Fonts

---

## Deployment

Visit the site here - [FBI’s Most Wanted](https://fbi-mostwanted.netlify.app/)

---

![FBI most wanted index page](https://media.giphy.com/media/CE4VViV6bihyw9slD1/giphy.gif)

---

## Planning Process

<p>We started off with looking into different public API's to come up with an idea for our web app. When we came across the FBI's Most Wanted API we liked the idea and went for it.</p>

<p> I created quick mockups with Adobe Illustrator to have an image to work towards.</p>

![Wireframe / mockup](https://i.postimg.cc/QCZRBYN1/Screenshot-2022-12-21-at-15-11-29.png)

<p>For project management we used a backlog system. We listed tasks and their urgency with notes for the other to see. We spoke about what tasks we had to do and then allocated them to our strengths. I took on more of the front end tasks.</p>

![Backlog](https://i.postimg.cc/X7y7ZqK0/Screenshot-2022-12-21-at-15-35-33.png)

<p>For project management we had daily standups using Zoom and had constant back and forth in a Slack group as well as WhatsApp.</p>

---

## Build Process & features

<p>Our web app is made of 3 pages:</p>

- Home page
- Wanted suspects list
- Wanted suspect information card

<p>We worked really well as a team, some sections we peer coded and communicated really well to make sure when we did work within the same file we would have pulled the most up to date code first to help minimise merge conflicts.</p>

### The main parts that I worked on were:

#### Navbar

- Global navbar to be accessed and viewable from every page.
- From Bulma I took a simple navbar component and made it fit the style from my designs.

```javascript
const Navbar = () => (
  <nav className='navbar '>
    <div className='container'>
      <div className='navbar-brand'>
        <a className='navbar-item logo' href='/'>
          <img src={logo} style={{ minWidth: 80, minHeight: 80 }} />
        </a>
        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <Link to='/' className='navbar-item has-text-white'>
            Home
          </Link>
          <Link to='/wantedList' className='navbar-item has-text-white'>
            Wanted List
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
```

#### Footer

- Global footer to be seen from every page
- Footer was super simple and in a couple lines of code could get what we needed.

```javascript
const Footer = () => (
  <footer className='footer'>
    <div className='content size-3 has-text-centered'>
      <p className='title is-4 has-text-centered has-text-white'>
        <strong>©</strong> Nathan Harris & Ulas Temel 2022
      </p>
    </div>
  </footer>
);
```

- I created a \_variables.scss file with a simple calculation for the body styling to fit within the navbar & footer.

```js
$header-height: 9.5vh;
$footer-height: 4vh;
$body-height: calc(100vh - $header-height - $footer-height);
```

#### Individual suspect information page

- I was proud of what I accomplished on this page.
- The information on the API was not all complete with some suspects having additional information and some being less known. To tackle this and make our suspects page work and look better I used ternary operators. If the information returned empty it would break the page, this was solved by having the ternary operator return an empty string if the information was not there.

```js
<div className='card-content'>
  {wanted.reward_text ? (
    <>
      <p className='title'>Reward: </p>
      <p className='subtitle'>{wanted.reward_text}</p>
    </>
  ) : (
    ''
  )}
</div>
```

- I utilised a Bulma component to make a table for each suspect showing their features. This table consumed the data from the API and populated it within the table.

```javascript
import { getSingleSuspect } from '../lib/api';
```

```javascript
<div className='card column is-one-third'>
  <div className='card-content'>
    <table className='table is-striped'>
      <tbody>
        <tr>
          <td>Date(s) of Birth Used</td>
          <td>{wanted.dates_of_birth_used}</td>
        </tr>
        <tr>
          <td>Hair</td>
          <td>{wanted.hair}</td>
        </tr>
        <tr>
          <td>Eyes</td>
          <td>{wanted.eyes_raw}</td>
        </tr>
        <tr>
          <td>Height (inch)</td>
          <td>{wanted.height_max}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{wanted.weight}</td>
        </tr>
        <tr>
          <td>Sex</td>
          <td>{wanted.sex}</td>
        </tr>
        <tr>
          <td>Race</td>
          <td>{wanted.race}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

#### Routes

- We agreed on the roots we would need then used React router to link and render the required components and different pages together.

```js
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wantedList/:id' element={<WantedShow />} />
        <Route path='/wantedList' element={<WantedIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
```

#### HTML Cleanser

- Another issue that we had was the API would return some extra HTML tags within the information making the data not display readable. To tackle this we created a htmlCleanser.js file with a function to filter what we didn't want being displayed and I added to it as I found more unwanted data from the API to be displayed on the page.

```js
function cleanseData(
  string,
  toFilter = ['<p>', '</p>', '<br />', '<br /', '<a>', '</a>']
) {
  let cleansedString = string;
  for (const tagElement of toFilter) {
    let index = cleansedString.indexOf(tagElement);
    while (index != -1) {
      if (index == 0) {
        cleansedString = [...cleansedString]
          .splice(index + tagElement.length, cleansedString.length)
          .join('');
      } else {
        cleansedString =
          [...cleansedString].splice(0, index - 1).join('') +
          [...cleansedString]
            .splice(index + tagElement.length, cleansedString.length)
            .join('');
      }
      index = cleansedString.indexOf(tagElement);
    }
  }
  return cleansedString;
}
export default cleanseData;
```

---

## Styling

- The majority of the styling and responsiveness for the app was handled using Bulma.
- I used CSS/Sass to overwrite some of the Bulma stylings for customisation.

<h4><u>Screenshots</u><h4/>

![FBI most wanted home page](https://i.postimg.cc/1Xv1G4TF/Screenshot-2023-01-01-at-15-26-28.png)

![FBI most wanted home page](https://i.postimg.cc/jSNkKLXh/Screenshot-2023-01-01-at-15-30-15.png)

![FBI most wanted home page](https://postimg.cc/7bzXxWgL)

![FBI most wanted home page](https://i.postimg.cc/7YjQpgg6/Screenshot-2023-01-01-at-15-29-28.png)

---

## Wins & Challenges

- The biggest challenge we found with this project was the information from the FBI API and formatting and using it for our needs. As a whole we made it work to the best we could and the project turned out close to what we imagined. The API being so difficult was very good for experience and I feel I understand better how API's work.
- One great outcome from this project was the use of CSS frameworks. For this project we used Bulma and learned to find and utilise the documentation in order to implement the styling correctly.
- This was the first group project and I feel we worked very well as a team and I learnt a lot from pair coding. Communication and keeping track of completed and upcoming tasks definitely plays an important role.

## Future Features

- Would like to spend more time figuring out how to make searching and filtering work better with the API. We had the issue of the API being paged, this meant when we filter the results are only the page loaded.
- Some of the suspect information pages list unwanted links and text from the API. Would need to figure out how to clean all these so the information is more readable.
