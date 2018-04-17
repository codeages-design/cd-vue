import Vue from 'vue';
import MessageOptions from './message.vue';
import { getUUID, prefix } from '../../utils';

const Message = Vue.extend(MessageOptions);

let instance;
const instances = [];
const messagePrefix = prefix + '-message';
// const ids = [];

const message = (options) => {
  instance = new Message({
    data: options
  });

  // instance.id = getUUID(messagePrefix, ids);
  // ids.push(getUUID(messagePrefix, ids));
  
  instance = instance.$mount();
  
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instances.push(instance);

  return instance;
}

message.closeAll = () => {
  instances.map((item) => {
    item.close();
  })
}

export default message;