import {createStackNavigator} from "react-navigation-stack";
import ChooseTypeScreen from "./orderNavigation/ChooseTypeScreen";
import ConfirmationScreen from "./orderNavigation/ConfirmationScreen";


const ChatStack =createStackNavigator({
    ChooseType: {screen: ChooseTypeScreen},
    Chat: {screen: ConfirmationScreen},
    },{
    initialRouteName:'ChooseType',
    navigationOptions:{title:'Main'}
    }
    );

export default ChatStack

