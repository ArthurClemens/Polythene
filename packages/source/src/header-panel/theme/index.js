import { styler } from 'polythene-core-css';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
// Does not contain color styles

const configFn = componentConfig && componentConfig['header-panel'];
const config = configFn ? configFn(vars) : vars;
const id = 'pe-header-panel';

styler.add(id, layout(config));