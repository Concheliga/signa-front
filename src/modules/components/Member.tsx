import photo from "../img/photo.svg";
import trash from "../img/trash.svg";

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
}

interface MemberProps {
    userData: UserData | null;
    onDelete: (id: number) => void;
    id: number;
}

const Member: React.FC<MemberProps> = ({ userData, onDelete, id }) => (
    <li className="member">
        <span className="id">{id}</span>
        <img src={photo || ''} alt="photo" className="photo" />
        <span className="name">
            {`${userData?.lastName} ${userData?.firstName} ${userData?.patronymic || ''}`}
        </span>
        <span className="group">{userData?.groupNumber}</span>
        <img onClick={() => onDelete(id)} src={trash} alt="trash" className="trash" />
    </li>
);

export {Member}