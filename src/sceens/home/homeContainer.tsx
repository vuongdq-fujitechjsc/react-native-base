import { StyleSheet, View } from "react-native";
import { selectStudentFilter, selectStudentIsLoading, selectStudentList, selectStudentPagination, studentActions } from "src/reducers/studentReducer";
import { useAppDispatch, useAppSelector } from "src/store/hook";

import HomeComponent from "./homeComponent";
import axios from "axios";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeContainer = () => {
    const _navigation = useNavigation();
    const _dispatch = useAppDispatch();

    const _isLoading = useAppSelector(selectStudentIsLoading);
    const _studentList = useAppSelector(selectStudentList);
    let _pagination = useAppSelector(selectStudentPagination);
    const _filter = useAppSelector(selectStudentFilter);

    useEffect(
        () => {
            // _dispatch(studentActions.getStudentList(_filter));
            demo()
        }, [_filter]
    )

    const _onRefresh = () => {
        _dispatch(studentActions.getStudentList(_filter));
    }

    const demo = () => {

        axios.get('https://js-post-api.herokuapp.com/api/students?_page=1&_limit=25')
        .catch(function (error) {
          console.log(error.toJSON());
        });


    //     axios.get(`https://js-post-api.herokuapp.com/api/students?_page=1&_limit=25`)
    //   .then(res => {
    //     const persons = res.data;
    //     console.log(persons)
    //   }
    //   .catch(function error){
    //     console.log(error.toJSON());
    //   }
      
    }

    const _onLoadMore = () => {
        // console.log(_pagination)
    

        // const _maxPage = _pagination?._limit ?? 0 / _pagination._limit ?? 0
        // _pagination._page += _pagination._page + 1

        // console.log("Call me ", _maxPage,  _pagination._page)
        // _dispatch(
        //     studentActions.setStudentFilter({
        //         ..._filter
        //     })
        // )
    }

    const _handlePaging = (error: any, page: number) => {
        
    }

    return (
        <View style={styles.wrapper}>
            <HomeComponent
                isLoading={_isLoading}
                studentList={_studentList}
                onRefresh={() => _onRefresh()}
                onLoadMore={() => _onLoadMore()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#d2d2d2',
        justifyContent: 'center',
    },
})

export default HomeContainer;