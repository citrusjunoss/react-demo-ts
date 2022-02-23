import type { FC } from 'react'
import type { UserInfoState } from '../../Page/Component'

const UserCard: FC<UserInfoState> = ({ name, age}) => {
    return <div>
        <div><span>姓名</span><span>{name}</span></div>
        <div><span>年龄</span><span>{age}</span></div>
    </div>
}

export default UserCard;