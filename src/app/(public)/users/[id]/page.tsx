import {userService} from "@/services/userService";
import { Params } from "next/dist/server/request/params";
import {FC} from "react";
import {UserInfo} from "@/components/userContainer/userInfo/UserInfo";


type IProps = {
    params: Promise<Params>
}

const UserIdPage:FC<IProps> = async ({params}) => {
    const {id} = await params
    const user = await userService.getById(+id)
    return (
        <div>
            <UserInfo user={user}/>
        </div>

    );
};

export default UserIdPage;
