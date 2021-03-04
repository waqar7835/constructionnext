import {scroller} from 'react-scroll'
const scroll = (offset = 0) => (dispatch) => {
  scroller.scrollTo("filter-scroll", {
    duration: 1000,
    delay: 0,
    offset,
    smooth: "easeInOutQuint",
  });
};
export default scroll;
