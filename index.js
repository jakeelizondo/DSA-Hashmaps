class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashtable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashtable[index] === undefined) {
      throw new Error('Key error');
    }
    return this._hashtable[index].value;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //find the slot where the key should be
    const index = this._findSlot(key);

    if (!this._hashtable[index]) {
      this.length++;
    }

    this._hashtable[index] = {
      key,
      value,
      DELETED: false,
    };
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key Error');
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashtable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._hashtable;
    this._capacity = size;
    //reset length
    this.length = 0;
    this._hashtable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value);
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;
