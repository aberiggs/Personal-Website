import { useContext } from 'react';
import { UserContext} from './UserContext';

const ShowModal = () => {
    const user = useContext(UserContext);
};

export default ShowModal;