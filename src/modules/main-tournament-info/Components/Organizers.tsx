import orgAvatar from "../img/org-avatar.svg";

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    vkLink: string;
}

interface Orgs {
    organizers: UserData[] | undefined;
}

const Organizers: React.FC<Orgs> = ({organizers}) => {
    if (organizers){
        return (
            <>
            {
                organizers.map(organizer => {
                    return (
                        <li className="field org">
                            <img src={orgAvatar} alt="Фото организатора" className="org_img" />
                            <div className="org_info">
                                <p className="status">Организатор</p>
                                <p className="name">{`${organizer.lastName} ${organizer.firstName} ${organizer.patronymic}`}</p>
                            </div>
                        </li>
                    )
                })
            }
            </>
        )
    }
}

export default Organizers;