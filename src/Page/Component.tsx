import React from 'react';
import UserCard from '../Component/Component/UserCard';

interface CommonObj {
    [p: string]: any
}


export interface UserInfoState {
    age?: number;
    name?: string;
}

interface ComponentDemoState {
    userInfo: UserInfoState,
    title: string,
    packageInfo: CommonObj
}
class ComponentDemo extends React.Component<any, ComponentDemoState> {
    constructor(props: any) {
        super(props)
        this.state = {
            userInfo: {
                age: 12,
                name: 'React'
            },
            title: 'Nihao',
            packageInfo: {}
        }
    }

    render() {
        return <div>
            {this.state.title}
            <UserCard  {...this.state.userInfo}/>    
        </div>
    }
}


export default ComponentDemo;