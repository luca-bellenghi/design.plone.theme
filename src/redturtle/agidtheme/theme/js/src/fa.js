import fontawesome from '@fortawesome/fontawesome';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegram';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faMediumM from '@fortawesome/fontawesome-free-brands/faMediumM';
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG';
import faPinterest from '@fortawesome/fontawesome-free-brands/faPinterest';
import faGetPocket from '@fortawesome/fontawesome-free-brands/faGetPocket';
import faRss from '@fortawesome/fontawesome-free-solid/faRss';
import faNewspaper from '@fortawesome/fontawesome-free-regular/faNewspaper';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt';
import faTags from '@fortawesome/fontawesome-free-solid/faTags';
import faFolderOpen from '@fortawesome/fontawesome-free-solid/faFolderOpen';
import faFilter from '@fortawesome/fontawesome-free-solid/faFilter';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

import faSortAlphaDown from '@fortawesome/fontawesome-free-solid/faSortAlphaDown';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';

export const init = () => {
  fontawesome.library.add(
    faFacebookF,
    faTwitter,
    faTelegram,
    faInstagram,
    faYoutube,
    faLinkedinIn,
    faMediumM,
    faGooglePlusG,
    faPinterest,
    faGetPocket,
    faRss,
    faNewspaper,
    faHome,
    faChevronUp,
    faChevronDown,
    faChevronRight,
    faAngleRight,
    faAngleUp,
    faAngleDown,
    faSearch,
    faCalendarAlt,
    faTags,
    faFolderOpen,
    faFilter,
    faStar,
    faSortAlphaDown,
    faBars
  );
};
