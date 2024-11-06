import photo from "../img/photo.svg";
import trash from "../img/trash.svg";
import { MemberProps } from "../../../interfaces/interfaces";


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