import { useTransitionMap } from 'react-transition-state';
import { AccordionContext } from '../utils/constants.js';
import { jsx } from 'react/jsx-runtime';

var AccordionProvider = function AccordionProvider(_ref) {
  var children = _ref.children;
  var transitionMap = useTransitionMap({
    singleEnter: true,
    preEnter: true,
    preExit: true,
    timeout: 300,
    unmountOnExit: true,
    mountOnEnter: true
  });
  return /*#__PURE__*/jsx(AccordionContext.Provider, {
    value: transitionMap,
    children: children
  });
};

export { AccordionProvider };
