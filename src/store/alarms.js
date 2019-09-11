import { createStore, createEvent } from 'effector';

const updateAlarms = createEvent();

const defaultState = [];

const alarms = createStore(defaultState)
  .on(updateAlarms, (oldAlarms, newAlarms) => [...oldAlarms, ...newAlarms]);

export {alarms, updateAlarms};
