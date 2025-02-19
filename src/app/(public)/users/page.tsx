import {userService} from "@/services/userService";
import {User} from "@/components/userContainer/user/User";
import React, {FC} from "react";
import {UsersPagination} from "@/components/userContainer/usersPagination/UsersPagination";
import {IUserList} from "@/interfaces/IUser";
import {SearchUser} from "@/components/userContainer/searchUser/SearchUser";

type IProps = {
    searchParams: Promise<{[key:string]: string | string[] | undefined}>
}

const UsersPage:FC<IProps> = async ({searchParams}) => {
    const params = await searchParams
    const q = params?.q ? params?.q : null
    const skip = params?.skip ? params?.skip : 0

    let result : IUserList
    if (q) {
        result = await userService.searchUser(q)
    }else {
        result = await userService.getUsers(+skip)
    }
    console.log(result)
    return (
        <div>
            <SearchUser/>
            {
                result && result.users.map(user => <User key={user.id} user={user}/>)
            }
            <UsersPagination total={result.total}/>
        </div>
    );
};

export default UsersPage;
