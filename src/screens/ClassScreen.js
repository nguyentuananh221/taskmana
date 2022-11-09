import React, { useEffect } from 'react'
import { View,Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import useVerifyToken from '../hooks/verifyToken'
import { getClassByMentor } from '../store/slices/class/classAction';
import Loadingcontent from '../components/LoadingContent';
import Classitem from '../components/ClassItem';
import useIslogin from '../hooks/isLogIn';
import { useNavigation } from '@react-navigation/native';

export default function ClassScreen(props) {
    const navigation = useNavigation()
    const userID = useVerifyToken()
    const isLogin = useIslogin()
    useEffect(() => {
        if (!isLogin) {
            navigation.navigate('StartScreen')
        }
    }, [isLogin])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClassByMentor({userID}))
    }, [dispatch])

    const listClass = useSelector(state => state.class.listClass)
    const loading = useSelector(state => state.class.loading)
    const renderItem = ({item}) => {
        return <Classitem name={item.name} code={item.code} onClick={() => console.log(item._id)}/>
    }

    return (
    <Loadingcontent loading={loading}>
        <View style ={styles.container} >
            <FlatList
            data={listClass}
            key={item => item._id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}/>
        </View>
    </Loadingcontent> 
    )
}
const styles = StyleSheet.create({
    container  :{
        flex : 1
    }
})