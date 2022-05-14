import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ActionScreen from "./ActionScreen";
import StudentList from "./StudentList";
import CoordinatorsList from "./CoordinatorsList";

const Stack = createNativeStackNavigator();

function ActionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ActionScreen" component={ActionScreen} options={{headerShown: false}} />
            <Stack.Screen name="StudentList" component={StudentList} options={{headerShown: false}}/>
            <Stack.Screen name="CoordinatorList" component={CoordinatorsList} options={{headerShown: false}}/>
            {/*<Stack.Screen name="PromotorList" component={Settings} options={{headerShown: false}} />*/}
            {/*<Stack.Screen name="ContactList" component={Settings} options={{headerShown: false}} />*/}
        </Stack.Navigator>
    );
}

export default ActionStack;