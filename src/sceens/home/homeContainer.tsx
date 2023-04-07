import { StyleSheet, View } from "react-native";
import { selectStudentFilter, selectStudentIsLoading, selectStudentList, studentActions } from "src/reducers/studentReducer";
import { useAppDispatch, useAppSelector } from "src/store/hook";

import HomeComponent from "./homeComponent";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeContainer = () => {
    const _navigation = useNavigation();
    const _dispatch = useAppDispatch();


    const _isLoading = useAppSelector(selectStudentIsLoading);
    const _studentList = useAppSelector(selectStudentList);
    let _filter = useAppSelector(selectStudentFilter);

    useEffect(
        () => {
            _dispatch(studentActions.getStudentList(_filter));
        }, [_filter]
    )

    const _onRefresh = () => {
        _dispatch(studentActions.refreshStudentList());
    }


    const _onLoadMore = () => {
        _dispatch(studentActions.setStudentFilter({
            _page: _filter._page + 1,
            _limit: 10
        }))
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