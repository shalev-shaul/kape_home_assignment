class LocalStorageService {
  get(key) {
    return localStorage.getItem(key);
  }

  set(key, value) {
    return localStorage.setItem(key, value);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LocalStorageService();
