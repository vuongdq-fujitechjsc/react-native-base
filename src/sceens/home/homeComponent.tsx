import { RefreshControl, StyleSheet, Text, View } from "react-native";
import { selectStudentFilter, studentActions } from "src/reducers/studentReducer";
import { useAppDispatch, useAppSelector } from "src/store/hook";

import { ActivityIndicatorView } from "src/common/components/ActivityIndicator";
import { FlatList } from "react-native-gesture-handler";
import { ListResponse } from "src/models/IPagingationResponse";
import { StudentResponse } from "src/models/IStudentResponse";
import { useState } from "react";

const HomeComponent = (
    { isLoading,
        studentList,
        onRefresh,
        onLoadMore
    }:
        {
            isLoading: boolean,
            studentList: any,
            onRefresh: any,
            onLoadMore: any
        }) => {

    const RenderListItem = ({ item }: { item: StudentResponse }) => {
        return (
            <View style={_styles.item}>
                <Text style={_styles.text}>{item.name}</Text>
                <Text style={_styles.text}>{item.age}</Text>
                <Text style={_styles.text}>{item.mark}</Text>
                <Text style={_styles.text}>{item.gender}</Text>
            </View>
        )
    }

    return (
        <View style={_styles.wrapper}>
            {isLoading && <ActivityIndicatorView />}
            <FlatList
                data={studentList.data}
                renderItem={({ item }) => <RenderListItem item={item} />}
                keyExtractor={item => item.id?.toString() || ""}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={onRefresh}
                    />
                }
                onEndReachedThreshold={0.1}
                onEndReached={onLoadMore}
            />
        </View>
    )
}

const _styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    text: {
        fontSize: 12,
        color: '#123123',
    }
})

export default HomeComponent;