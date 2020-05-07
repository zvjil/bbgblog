import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faCheckSquare,
  faHome,
  faPhoneVolume,
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
    faHome,
    faPhoneVolume
  );
};

export default Icons;
