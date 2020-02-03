import Home from "../components/Pages/Home";
import Demo from "../components/Pages/Demo";
import PrivatePage from "../components/Pages/Settings";
import UserSettings from "../components/Pages/UserSettings";

const menu = [
    {title: 'Home', route: '/', component: Home, public: true},
    {title: 'Demo', route: '/demo', component: Demo, public: true},
    {title: 'Settings', route: '/settings', component: UserSettings, public: false},
]
export default menu;
