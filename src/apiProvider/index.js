/* eslint-disable consistent-return */
import axios from 'axios';
import logger from 'logger';

const apiUrl = process.env.REACT_APP_URL;

const param = {

};

const getAllUsers = async () => {
  const url = `${apiUrl}/users`;

  return new Promise((resolve, reject) => {
    axios.get(url, param)
      .then(response => {
        if (!response.success) {
          logger.log('error', response.statusText);
          reject(response.statusText);
        }
        resolve(response);
      })
      .catch(e => {
        logger.log('info', e.message);
        reject(e);
      });
  });
};


const getUser = async (id) => {
  const url = `${apiUrl}/users?id=${id}`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getAllAlarms = async () => {
  const url = `${apiUrl}/alarms`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getAlarmStatus = async (id) => {
  const url = `${apiUrl}/alarms?id=${id}`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getSecurityCompanys = async () => {
  const url = `${apiUrl}/security`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getSecurityCompanyInfo = async (id) => {
  const url = `${apiUrl}/security?id=${id}`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const changeRequestStatus = async (id, status) => {
  const url = `${apiUrl}/users?id=${id}`;

  try {
    const response = await axios.post(url, {
      ...param,
      ...status,
    });

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const changeAlarmStatus = async (id, status) => {
  const url = `${apiUrl}/alarms?id=${id}`;

  try {
    const response = await axios.post(url, {
      ...param,
      ...status,
    });

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const deleteUser = async (id) => {
  const url = `${apiUrl}/users?id=${id}`;

  try {
    const response = await axios.delete(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

export {
  getAllUsers,
  getUser,
  getAllAlarms,
  getAlarmStatus,
  getSecurityCompanys,
  changeRequestStatus,
  getSecurityCompanyInfo,
  changeAlarmStatus,
  deleteUser,
};
