import './validation.js';
import { getData } from './load.js';
import {renderUsersPhotos} from './drawPhoto.js';
import { showAlert } from './util.js';

getData(renderUsersPhotos, showAlert);
