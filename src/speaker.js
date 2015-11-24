'use strict';

class SpeakerService {
    static adjust_volume(speaker, volume) {

    }
}

class Speaker {

    constructor () {

    }

    get volume () {
        return this._volume;
    }

    set volume (level) {
        this._volume = this.refine_volume(level);
    }

    get model () {
        return this._model;
    }

    set model (name) {
        if (this.is_valid_model(name))
            this._model = name;
    }

    is_valid_model (name) {
        if (['Play 1', 'Play 3', 'Play 5'].indexOf(name) >= 0)
            return true;
        throw new Error('Illegal model name.');
    }

    refine_volume (level) {
        if (level > 100)
            return 100;
        else if (level < 0)
            return 0;
        else
            return level;
    }

    stream (url) {
        throw new Error('Invalid URL.');
    }
}

module.exports = Speaker;
