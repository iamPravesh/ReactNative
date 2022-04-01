import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from '../Screens/Home';
import ChartPie from "../Screens/ChartPie";

const screens = {
    Home: {
        screen: Home
    },
    PieChart: {
        screen: ChartPie
    },
};


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);