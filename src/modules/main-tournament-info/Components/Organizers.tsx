import orgAvatar from "../img/org-avatar.svg";
import { Orgs } from "../../../interfaces/interfaces";

const Organizers: React.FC<Orgs> = ({organizers}) => {
    if (organizers){
        return (
            <>
            {
                organizers.map(organizer => {
                    return (
                        <li>
                            <img src={orgAvatar} alt="Фото организатора" />
                            <div>
                                <p>Организатор</p>
                                <p>{`${organizer.lastName} ${organizer.firstName} ${organizer.patronymic}`}</p>
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