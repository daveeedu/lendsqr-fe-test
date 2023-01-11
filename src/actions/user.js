import axios from 'axios';
import Alert from '../utils/alert';
import BACKEND from '../utils/backend';
import config from '../utils/config';
import Storage from "../utils/storage";

export default class User {
 static BE = new BACKEND();
 static getUsers(){
  return User.BE.send({
    to: "/users",
    type: "get"
  })
 }
}