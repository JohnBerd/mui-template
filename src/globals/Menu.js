import Home from "../pages/Home"

const menu = [
    {title: 'Public', route: '/publicpage', component: Home, public: true},
    {title: 'My Account', route: '/myaccount', component: Home, public: false},
]
export default menu;