import { createGlobalStyle } from 'styled-components';
// These styles were based on the UI design here:
// https://www.behance.net/gallery/60073341/Destiny-2-UI-Visual-Design

import NeueHaasLight from './NeueHaasDisplay-Light.ttf';
import NeueHaasLightItalic from './NeueHaasDisplay-LightItalic.ttf';
// Body Fiction Copy
import NeueHaasBold from './NeueHaasDisplay-Bold.ttf';
// Sub-Screen Header
import NeueHaasMedium from './NeueHaasDisplay-Medium.ttf';
// Tooltip Header
import NeueHaasMediumItalic from './NeueHaasDisplay-MediumItalic.ttf';
import NeueHaasRoman from './NeueHaasDisplay-Roman.ttf';
import NeueHaasRomanItalic from './NeueHaasDisplay-RomanItalic.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Neue Haas';
    src: local(Neue Haas), url(${NeueHaasBold}) format('truetype');
    font-weight: 800;
    font-style: bold;
  }

  @font-face {
    font-family: 'Neue Haas';
    src: local(Neue Haas), url(${NeueHaasLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Neue Haas';
    src: local(Neue Haas), url(${NeueHaasLightItalic}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Neue Haas';
    src: local(Neue Haas), url(${NeueHaasMedium}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neue Haas';
    src: local(Neue Haas), url(${NeueHaasMediumItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Neue Haas';
    src: local(Neue Haas), url(${NeueHaasRoman}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neue Haas';
    src: local(Neue Haas), url(${NeueHaasRomanItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;
