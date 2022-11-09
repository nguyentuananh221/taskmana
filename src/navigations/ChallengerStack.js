import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Challengerscreen from '../screens/ChallengerScreen';
import Missionscreen from '../screens/MissionScreen';

import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import useIslogin from '../hooks/isLogIn';
import Ionicon  from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const ChallengerStack = createStackNavigator()


export default function Challengerstack(props) {
    const isLogin = useIslogin()
    const navigation = useNavigation()
    useEffect(() => {
        if (!isLogin) {
            // reset all stack navigation when logout
            navigation.reset({
                index : 0,
                routes : [{name : 'StartScreen'}]
            })
        }
    }, [isLogin])

    return (
        <ChallengerStack.Navigator 
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.primary,
            },
            headerTitleStyle : {
                color : COLORS.white
            },
            tabBarStyle : {
                backgroundColor : COLORS.primary
            },
            tabBarActiveTintColor : COLORS.yellow
        }}
        >
            <ChallengerStack.Screen name='ChallengerScreen' component={Challengerscreen}
                                    options={{
                                        title : 'Thử thách',
                                        headerLeft : () => {
                                            return (
                                            <TouchableOpacity style={{
                                                marginLeft : 10
                                            }}
                                            onPress={() => navigation.openDrawer()}
                                            >
                                                <Ionicon  name='menu-outline' size={30} color={COLORS.white}/>
                                            </TouchableOpacity>
                                            )
                                        }
                                    }}/>
            <ChallengerStack.Screen name='MissionScreen' component={Missionscreen}
                                    options={({route})=> (
                                        {
                                            title : `Thử thách ${route.params.challenger.name}`
                                            
                                        }
                                    )
                                    }/>
        </ChallengerStack.Navigator>
    )
}
