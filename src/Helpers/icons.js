import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faCheckSquare,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
  return library.add (
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faCheckSquare,
    faHome
  );
};

export default Icons;
