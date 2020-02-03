# MUI Login Template

You have a great idea and want to developp it? Unfortunately you will have to spend a long time to create routes, user login, register, form checking, etc. 

MUI Login Template is a Material UI template for applications with a login interface, ready to link to your API.

Thanks to it, you will be able to:

- Create new menu items in one line of code
- Change global colors of the application

Why do you need this template?
- Front-end form checking for sign in and sign up is already implemented
- User log in and log out logic is already implemented
- It is totally responsive

## Features

### Menu Items

To add a new menu item, open up and modify the file src/components/Menu.js

If public is set to false, the route will be private. It means that only a logged user can access to that route.

```js
const menu = [
    {title: 'Home', route: '/', component: Home, public: true},
    {title: 'Demo', route: '/demo', component: Demo, public: true},
    {title: 'Settings', route: '/settings', component: UserSettings, public: false},
]
```

### Theme

To change the theme, open up and modify the file src/Theme.js
For further information, you can refer to the [Material UI documentation](https://material-ui.com/customization/palette/)

```js
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f0430',
      contrastText: '#D4F370',
    },
    secondary: {
      main: '#D4F370',
      contrastText: '#0f0430',
    },
    background: {
      default: "#0f0430"
    },
  },
});
```
### Page Component

You can wrap your new components with the "Page" component if you want to display a title, display a back arrow, and verticaly center your component.
You can display a background image as well and choose its opacity and blur.

title displays a title at the top center of the page
back displays a back arrow button to the route you want
center centers verticaly the page content
background displays a background image, without src parameter, a default background image is displayed
src displays the image you want, you can choose a path or a URL
blur blurs your background image, it blurs your image and is indicated in pixels
opacity turns you image darker, it should be a value between 0 and 1

```js
<Page
  title="title"
  back="/home"
  center

  background
  src="myImage"
  blur="1px"
  opacity={0.5}
  >
  <MyComponent>
</Page>
```

### Navbar

- The Navbar can be sticky
- You can implement a search bar thanks to a single parameter

```js
<NavBar search sticky/>
```

#### Limitations

Too many items can generate a display conflict with the search field on small screens