import {PageContainer} from "@ant-design/pro-components";
import React, {forwardRef, useEffect} from "react";
import {connect, useDispatch, ConnectProps} from '@umijs/max';
import {ExpireModelState} from "@/models/ExpireManage/expire";

interface PageProps extends ConnectProps {
    expire: ExpireModelState
}

const ExpireManagePage: React.ForwardRefRenderFunction<HTMLElement, PageProps> = ({
                                                                                      expire
                                                                                  }) => {

    const {list} = expire;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "expire/queryList"})
    }, []);

    useEffect(() => {
        console.log("====>>>>")
        console.log(list)
    }, [list]);


    return (
        <PageContainer
            header={{
                title: 'TEST',
            }}
        >

        </PageContainer>
    );
};

export default connect((
    {
        expire
    }: {
        expire: ExpireModelState
    }) => ({
    expire: expire
}))(forwardRef(ExpireManagePage));